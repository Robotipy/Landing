import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ProductFeatureShowcase = ({
  image,
  alt,
  title,
  description,
  position = "right",
  link,
}) => {
  const t = useTranslations("productShared");
  const imageBlock = (
    <div className="rounded-xl border border-white/10 shadow-2xl overflow-hidden">
      <Image
        src={image}
        alt={alt}
        width={700}
        height={400}
        className="w-full h-auto object-cover"
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col gap-4 justify-center">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
      {link && (
        <Link
          href={link}
          className="font-bold text-accent hover:underline mt-2"
        >
          {t("learnMore")}
        </Link>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {position === "left" ? (
        <>
          <div className="order-1">{imageBlock}</div>
          <div className="order-2">{textBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{textBlock}</div>
          <div className="order-1 md:order-2">{imageBlock}</div>
        </>
      )}
    </div>
  );
};

export default ProductFeatureShowcase;
