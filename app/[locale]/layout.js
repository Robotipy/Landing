import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import { routing } from "@/i18n/routing";
import "../globals.css";
import GoogleTagManager from "@/components/scripts/GoogleTagManager";
import MetaPixel, { MetaPixelNoScript } from "@/components/scripts/MetaPixel";
import ZohoSalesIQ from "@/components/scripts/ZohoSalesIQ";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.pages.home" });
  return getSEOTags({
    locale,
    canonicalUrlRelative: "/",
    title: t("title"),
    description: t("description"),
  });
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Robotipy",
    "url": "https://robotipy.com",
    "logo": "https://www.robotipy.com/_next/static/media/icon.0921702f.png",
    "description": "Expertos en automatización de procesos (RPA), Chatbots con IA y desarrollo de software a medida.",
    "memberOf": {
      "@type": "Organization",
      "name": "Rocketbot",
      "description": "Platinum Partner",
    },
    "awards": [
      "Certificación RPA Developer",
      "Rocketbot Expert Certification",
      "Mejor caso de éxito en Rocketbot",
    ],
    "sameAs": [
      "https://www.linkedin.com/company/robotipy",
      "https://www.instagram.com/robotipy.dev",
      "https://projects.robotipy.dev",
      "https://newsletter.robotipy.com",
    ],
  };

  return (
    <html lang={locale} data-theme={config.colors.theme} className={font.className}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/background.png"
          fetchPriority="high"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </noscript>
        <meta name="msapplication-TileImage" content={`https://${config.domainName}/images/robotipy-logo.png`} />
        <meta name="msapplication-TileColor" content={config.colors.main} />
        {config.domainName && (
          <>
            <PlausibleProvider domain={config.domainName} />
            <GoogleTagManager />
            <MetaPixel />
          </>
        )}
      </head>
      <body style={{ backgroundColor: config.colors.background }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBLGJHLN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <MetaPixelNoScript />
        <ZohoSalesIQ />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.addEventListener('load',function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/icon?family=Material+Icons';document.head.appendChild(l);});",
          }}
        />
      </body>
    </html>
  );
}
