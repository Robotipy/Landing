"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession, SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import config from "@/config";

// Crisp customer chat support — the SDK is loaded lazily, only when a
// crisp.id is configured. With config.crisp.id empty (as currently), the
// SDK is never fetched and stays out of the JS bundle.
const CrispChat = () => {
  const pathname = usePathname();
  const { data } = useSession();

  useEffect(() => {
    if (!config?.crisp?.id) return;
    let cancelled = false;
    import("crisp-sdk-web").then(({ Crisp }) => {
      if (cancelled) return;
      Crisp.configure(config.crisp.id);
      if (
        config.crisp.onlyShowOnRoutes &&
        !config.crisp.onlyShowOnRoutes?.includes(pathname)
      ) {
        Crisp.chat.hide();
        Crisp.chat.onChatClosed(() => {
          Crisp.chat.hide();
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  useEffect(() => {
    if (!data?.user || !config?.crisp?.id) return;
    import("crisp-sdk-web").then(({ Crisp }) => {
      Crisp.session.setData({ userId: data.user?.id });
    });
  }, [data]);

  return null;
};

const ClientLayout = ({ children }) => {
  return (
    <SessionProvider>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      {children}
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <CrispChat />
    </SessionProvider>
  );
};

export default ClientLayout;
