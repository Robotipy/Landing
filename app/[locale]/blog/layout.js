import { Suspense } from "react";
import HeaderBlog from "./_assets/components/HeaderBlog";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }) {
  return (
    <div className="min-h-screen bg-[#00182B] font-display text-white">
      <Suspense>
        <HeaderBlog />
      </Suspense>

      <main className="min-h-screen">{children}</main>

      <Footer />
    </div>
  );
}
