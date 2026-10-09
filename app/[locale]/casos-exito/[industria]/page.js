import { Suspense } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCaseCard from "@/components/SuccessCaseCard";
import { Link } from "@/i18n/routing";
import { getSEOTags } from "@/libs/seo";
import { industryPages, successCases } from "@/libs/successCases";

export function generateStaticParams() {
  return Object.keys(industryPages).map((industria) => ({ industria }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { locale, industria } = await params;
  const page = industryPages[industria];
  if (!page) return {};
  const m = page.meta[locale] || page.meta.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: `/casos-exito/${industria}`,
    openGraph: {
      images: [{ url: "/images/og/casos-exito-resultados.jpg", width: 1200, height: 630, alt: "Resultados de casos de éxito de Robotipy" }],
    },
  });
}

export default async function IndustryCasesPage({ params }) {
  const { industria } = await params;
  const page = industryPages[industria];
  if (!page) notFound();

  const cases = successCases.filter((c) => c.categoria === industria);

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="min-h-screen bg-gray-900">
        <section
          className="py-16 lg:py-28"
          style={{
            backgroundImage: `url('${page.banner}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/40 py-10 rounded-lg text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{page.title}</h1>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto font-medium">
              {page.subtitle}
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
              {cases.map((caseStudy) => (
                <SuccessCaseCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {page.ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8">{page.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
              >
                Solicitar diagnóstico
              </Link>
              <Link
                href="/success-cases"
                className="px-8 py-4 border-2 border-teal-600 text-teal-400 font-semibold rounded-lg hover:bg-teal-600/10 transition-colors"
              >
                Ver todos los casos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
