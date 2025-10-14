"use client";

import Script from "next/script";

export default function ZohoSalesIQ() {
  return (
    <>
      <Script id="zoho-salesiq" strategy="afterInteractive">
        {`
          window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}
        `}
      </Script>   
      <Script id="zsiqscript" src="https://salesiq.zohopublic.com/widget?wc=siqa1765019dc7506e74e7623abc2fefcbdf202f08e2d36b55d3c6db69455eca290" defer />
    </>
  );
} 