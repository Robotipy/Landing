"use client";

import Script from "next/script";

// Microsoft Clarity: mapas de calor y grabaciones de sesión (gratis).
// El Project ID de Clarity es público (queda visible en el HTML de cualquier
// sitio que lo use), así que se deja como valor por defecto para que funcione
// sin configurar variables en el hosting. Se puede sobrescribir con
// NEXT_PUBLIC_CLARITY_ID si algún día cambia.
const DEFAULT_CLARITY_ID = "xo0vsxq2ja";

export default function MicrosoftClarity() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_ID || DEFAULT_CLARITY_ID;
  if (!projectId) return null;

  return (
    <Script id="microsoft-clarity" strategy="lazyOnload">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${projectId}");
      `}
    </Script>
  );
}
