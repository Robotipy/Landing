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

  const siteUrl = "https://www.robotipy.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Robotipy",
    "url": siteUrl,
    "logo": `${siteUrl}/images/robotipy-logo.png`,
    "description":
      "Empresa de automatización de procesos fundada en 2023, con equipo en Chile y Argentina. Más de 70 proyectos entregados con RPA, inteligencia artificial y desarrollo de software a medida. Platinum Partner de Rocketbot.",
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": "Danilo Toro",
      "sameAs": ["https://www.linkedin.com/in/danilotorol/"],
    },
    "areaServed": [
      { "@type": "Country", "name": "Chile" },
      { "@type": "Country", "name": "Argentina" },
      { "@type": "Place", "name": "Latinoamérica" },
    ],
    "knowsAbout": [
      "Automatización robótica de procesos (RPA)",
      "Rocketbot",
      "UiPath",
      "Power Automate",
      "n8n",
      "Agentes de IA con Claude",
      "Procesamiento inteligente de documentos (IDP)",
      "Automatización de SAP",
      "Automatización de Finnegans",
      "Automatización de AS400",
      "Automatización de Defontana",
      "Conciliación bancaria automatizada",
      "Desarrollo de software a medida",
    ],
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
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "url": `${siteUrl}/es/contact-us`,
      "availableLanguage": ["es", "en", "pt"],
      "areaServed": ["CL", "AR"],
    },
    "sameAs": [
      "https://www.linkedin.com/company/robotipy",
      "https://www.instagram.com/robotipy.dev",
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
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
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
