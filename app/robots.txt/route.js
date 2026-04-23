export const dynamic = "force-static";

export function GET() {
  const siteUrl = process.env.SITE_URL || "https://robotipy.com";
  const body = [
    "# Content signals — https://contentsignals.org/",
    "Content-Signal: search=yes, ai-train=no, ai-input=no",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
