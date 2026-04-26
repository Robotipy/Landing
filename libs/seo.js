import config from "@/config";
import { routing, ogLocaleMap, htmlLangMap } from "@/i18n/routing";

const siteOrigin =
  process.env.SITE_URL ||
  `https://www.${config.domainName.replace(/^www\./, "")}`;

const buildAlternates = (locale, canonicalUrlRelative) => {
  if (!canonicalUrlRelative) return undefined;
  const path = canonicalUrlRelative.startsWith("/")
    ? canonicalUrlRelative
    : `/${canonicalUrlRelative}`;
  const suffix = path === "/" ? "" : path;
  const languages = {};
  routing.locales.forEach((l) => {
    languages[htmlLangMap[l] || l] = `${siteOrigin}/${l}${suffix}`;
  });
  languages["x-default"] = `${siteOrigin}/${routing.defaultLocale}${suffix}`;
  return {
    canonical: `${siteOrigin}/${locale}${suffix}`,
    languages,
  };
};

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can customize it for each page.
// It's already added in the root layout.js so you don't have to add it to every pages
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
// Pass `locale` from generateMetadata({ params }) so og:locale and hreflang alternates reflect the active language.
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
  locale,
} = {}) => {
  const activeLocale =
    locale && routing.locales.includes(locale) ? locale : routing.defaultLocale;

  const finalTitle = title || config.appTitle || config.appName;
  const finalDescription =
    description || config.appDescriptionSEO || config.appDescription;

  return {
    // 50-60 characters recommended by Bing (what does your app do for the user?)
    title: finalTitle,
    // 120-160 characters recommended by Bing (how does your app help the user?)
    description: finalDescription,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || [config.appName],
    applicationName: config.appName,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development" ? "http://localhost:3000/" : siteOrigin
    ),

    openGraph: {
      title: openGraph?.title || finalTitle,
      description: openGraph?.description || finalDescription,
      url: openGraph?.url || `${siteOrigin}/${activeLocale}`,
      siteName: config.appName,
      // Bing requires og:image with minimum 1200x630 pixels
      images: openGraph?.images || [
        {
          url: `${siteOrigin}/images/robotipy-logo.png`,
          width: 1200,
          height: 630,
          alt: config.appName,
        },
      ],
      locale: ogLocaleMap[activeLocale] || "es_ES",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || finalTitle,
      description: openGraph?.description || finalDescription,
      // Twitter card image (also used by Bing as fallback)
      images: openGraph?.images || [
        {
          url: `${siteOrigin}/images/robotipy-logo.png`,
          width: 1200,
          height: 630,
          alt: config.appName,
        },
      ],
      card: "summary_large_image",
      creator: "@robotipy",
    },

    // If a canonical URL is given, we add it (locale-prefixed) plus hreflang alternates.
    ...(canonicalUrlRelative && {
      alternates: buildAlternates(activeLocale, canonicalUrlRelative),
    }),

    // Microsoft/Bing specific meta tags for better thumbnail support
    other: {
      "msapplication-TileImage": `${siteOrigin}/images/robotipy-logo.png`,
      "msapplication-TileColor": config.colors.main,
    },

    // If you want to add extra tags, you can pass them here
    ...extraTags,
  };
};

// Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structure: https://search.google.com/test/rich-results
// You don't have to use this component, but it increase your chances of having a rich snippet on Google.
// I recommend this one below to your /page.js for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
// Fill the fields with your own data
// See https://shipfa.st/docs/features/seo
export const renderSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication",
          name: config.appName,
          description: config.appDescription,
          image: `${siteOrigin}/icon.png`,
          url: `${siteOrigin}/`,
          author: {
            "@type": "Person",
            name: "Danilo Toro",
          },
          datePublished: "2023-08-01",
          applicationCategory: "EducationalApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "12",
          },
          offers: [
            {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
            },
          ],
        }),
      }}
    ></script>
  );
};
