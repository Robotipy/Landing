import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Client Information | ${config.appName}`,
  description: "Share your automation needs with us. Our team will create a customized RPA solution for your business.",
  canonicalUrlRelative: "/chatbot",
});

export default function Layout({ children }) {
  return <>{children}</>;
} 