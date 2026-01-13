import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import GoogleTagManager from "@/components/scripts/GoogleTagManager";
import ZohoSalesIQ from "@/components/scripts/ZohoSalesIQ";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags({ canonicalUrlRelative: "/" });

export default function RootLayout({ children }) {
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
      "description": "Platinum Partner"
    },
    "awards": [
      "Certificación RPA Developer", 
      "Rocketbot Expert Certification",
      "Mejor caso de éxito en Rocketbot"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/robotipy",
      "https://www.instagram.com/robotipy.dev",
    ]
  };
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Microsoft/Bing specific meta tags for thumbnail support */}
        <meta name="msapplication-TileImage" content={`https://${config.domainName}/images/robotipy-logo.png`} />
        <meta name="msapplication-TileColor" content={config.colors.main} />
        {config.domainName && (
          <>
            <PlausibleProvider domain={config.domainName} />
            <GoogleTagManager />
          </>
        )}
      </head>
      <body style={{ backgroundColor: config.colors.background }}>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KBLGJHLN"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </noscript>
        <ZohoSalesIQ />
      </body>
    </html>
  );
}
