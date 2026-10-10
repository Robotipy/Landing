import Link from "next/link";
import { getArticlesByLocale } from "../content";

// Enlace a otro post que puede estar programado: mientras el destino no está
// publicado se muestra como texto, así nunca se enlaza a una URL que da 404 y
// el enlace se activa solo el día que el post sale.
export default function PostLink({ slug, children }) {
  const target = getArticlesByLocale("es").find((a) => a.slug === slug);
  if (!target) return <>{children}</>;
  return (
    <Link href={`/blog/${slug}`} className="text-accent underline-offset-2 hover:underline">
      {children}
    </Link>
  );
}
