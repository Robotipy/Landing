import AllSuccessCasesPage from "@/components/AllSuccessCasesPage";

export default async function Page({ params }) {
  const { locale } = await params;
  return <AllSuccessCasesPage locale={locale} pagePath="/casos-exito" />;
}
