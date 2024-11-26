import Image from "next/image";
import ButtonMain from "./ButtonMain";

const PagePreview = ({
  title,
  srcImage,
  link,
  position = "left",
  buttonText="Read more",
  children,
}) => {
  // position = "left", "right", "center", "cover"
  const src = srcImage ? srcImage : "/images/empty_rectangle.png";
  return (
    <section className="mx-auto text-white flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-8 px-12 py-20 lg:py-20 lg:px-20">
      {position == "left" ? (
        <>
          <div className="flex flex-col gap-10 lg:gap-12 items-center justify-center text-center lg:text-left lg:items-start">
            <h2 className="text-4xl lg:text-6xl tracking-tight md:-mb-4">
              {title}
            </h2>
            {children}
            <ButtonMain text={buttonText} link={link} type="tertiary" noblank={true}/>

          </div>
          <div className="w-full">
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
          <div className="w-full">
            <Image
              src={src}
              alt="Product Demo"
              className="w-full"
              priority={true}
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-10 lg:gap-10 items-center justify-center text-center lg:text-left lg:items-start">
            <h2 className="text-4xl lg:text-6xl tracking-tight md:-mb-4">
              {title}
            </h2>
            {children}
            <ButtonMain text="Read more ➡️" link={link} type="tertiary" noblank={true}/>
          </div>
        </>
      )}
    </section>
  );
};

export default PagePreview;
