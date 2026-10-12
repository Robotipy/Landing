"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { trackHome } from "./track";

// Respuesta a "¿Tu empresa ya tiene licencia Rocketbot?": null mientras no se
// responde, "si" o "no" después. La comparten el control, la línea de licencia
// de la etapa 02 y su botón, que la lleva al formulario como licencia_rocketbot.
const LicenseContext = createContext({ license: null, setLicense: () => {} });

export function LicenseProvider({ children }) {
  const [license, setLicenseState] = useState(null);

  const setLicense = useCallback((value) => {
    setLicenseState(value);
    trackHome("home_license_toggle", { value });
  }, []);

  const value = useMemo(() => ({ license, setLicense }), [license, setLicense]);

  return <LicenseContext.Provider value={value}>{children}</LicenseContext.Provider>;
}

export function useLicense() {
  return useContext(LicenseContext);
}
