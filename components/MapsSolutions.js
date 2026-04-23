import Image from "next/image";
import { useTranslations } from "next-intl";

const MapsSolutions = () => {
  const t = useTranslations("mapsSolutions");
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <Image
              src="/assets/mapa.png"
              alt={t("mapAlt")}
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-50 text-gray-900 rounded-xl flex shadow-2xl overflow-hidden">
              <div className="text-center p-4 md:py-8 md:px-12">
                <p className="text-3xl md:text-5xl font-bold text-gray-800">
                  +60
                </p>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 mt-2">
                  {t("projectsLabel")}
                </p>
              </div>

              <div className="border-l border-gray-200 my-4"></div>

              <div className="text-center p-4 md:py-8 md:px-12">
                <p className="text-3xl md:text-5xl font-bold text-gray-800">
                  +8
                </p>
                <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 mt-2">
                  {t("countriesLabel")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsSolutions;
