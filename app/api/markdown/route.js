import { NextResponse } from "next/server";
import { NodeHtmlMarkdown } from "node-html-markdown";
import { routing } from "@/i18n/routing";

export const dynamic = "force-dynamic";

const LOCALE_PREFIX = new RegExp(`^/(${routing.locales.join("|")})(/|$)`);

function normalizePath(path) {
  if (!path || !path.startsWith("/")) return `/${routing.defaultLocale}`;
  if (LOCALE_PREFIX.test(path)) return path;
  return `/${routing.defaultLocale}${path === "/" ? "" : path}`;
}

function stripNoise(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, "");
}

function extractMain(html) {
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) return mainMatch[1];
  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) return bodyMatch[1];
  return html;
}

export async function GET(request) {
  const requestUrl = new URL(request.url);
  const rawPath =
    request.headers.get("x-md-source-path") ||
    requestUrl.searchParams.get("path") ||
    "/";
  const rawSearch = request.headers.get("x-md-source-search") || "";
  const targetPath = normalizePath(rawPath);

  const forwardUrl = new URL(targetPath + rawSearch, requestUrl.origin);

  let upstream;
  try {
    upstream = await fetch(forwardUrl, {
      headers: { Accept: "text/html" },
      redirect: "follow",
    });
  } catch {
    return new NextResponse("Upstream fetch failed", { status: 502 });
  }

  if (!upstream.ok) {
    return new NextResponse(`Upstream returned ${upstream.status}`, {
      status: upstream.status,
    });
  }

  const html = await upstream.text();
  const content = stripNoise(extractMain(html));
  const markdown = NodeHtmlMarkdown.translate(content).trim() + "\n";
  const tokens = Math.ceil(markdown.length / 4);

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(tokens),
      "Cache-Control": "public, max-age=300, s-maxage=3600",
      Vary: "Accept",
    },
  });
}
