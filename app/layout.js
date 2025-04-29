import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import GoogleTagManager from "@/components/GoogleTagManager";

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
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
          <GoogleTagManager />
        </head>
      )}
      <body style={{ backgroundColor: config.colors.background }}>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
        <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-56CGK5FP"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      </body>
    </html>
  );
}
