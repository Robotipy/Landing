import Image from "next/image";
import ButtonMain from "./ButtonMain";

const PagePreview = ({
  title,
  srcImage,
  link,
  position = "left",
  children,
}) => {
  // position = "left", "right", "center", "cover"
  const src = srcImage ? srcImage : "/images/empty_rectangle.png";
  return (
    <section className="mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 py-8 lg:py-16 px-5">
      {position == "left" ? (
        <>
          <div className="flex flex-col gap-10 lg:gap-12 items-center justify-center text-center lg:text-left lg:items-start">
            <h2 className="text-4xl lg:text-6xl tracking-tight md:-mb-4">
              {title}
            </h2>
            {children}
            <ButtonMain text="Read more" link={link} type="secondary" />
          </div>
          <div className="w-3/4">
            <Image
              src={src}
              alt="Product Demo"
              className="w-full"
              priority={true}
              width={600}
              height={600}
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-3/4">
            <Image
              src={src}
              alt="Product Demo"
              className="w-full"
              priority={true}
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
            <h2 className="text-4xl lg:text-6xl tracking-tight md:-mb-4">
              {title}
            </h2>
            {children}
            <ButtonMain text="Read more" link={link} type="secondary" />
          </div>
        </>
      )}
    </section>
  );
};

export default PagePreview;
