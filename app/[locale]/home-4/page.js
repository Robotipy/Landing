import { permanentRedirect } from "next/navigation";

// La propuesta /home-4 pasó a ser la home principal en español.
export default async function Home4Page({ params }) {
  const { locale } = await params;
  permanentRedirect(`/${locale}`);
}
