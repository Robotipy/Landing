import ButtonMain from "./ButtonMain";

const ProductHero = ({
  title,
  subtitle,
  ctaText = "Empieza gratis",
  ctaLink = "https://robotipy.dev",
  ctaSecondaryText,
  ctaSecondaryLink,
}) => {
  return (
    <div className="relative flex h-auto w-full flex-col overflow-x-hidden">
      <div className="flex flex-1 justify-center py-5 lg:py-16 background-image">
        <div className="flex flex-col max-w-8xl flex-1 px-4 sm:px-6 lg:px-8">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div className="flex min-h-[480px] flex-col gap-6 items-center justify-center p-4">
                <div className="flex flex-col gap-4 text-center my-3">
                  <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                    {title}
                  </h1>
                  <h2 className="text-white/80 text-lg lg:text-xl max-w-4xl mx-auto font-normal leading-normal pt-6 pb-3">
                    {subtitle}
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ButtonMain text={ctaText} link={ctaLink} type="primary" />
                  {ctaSecondaryText && ctaSecondaryLink && (
                    <ButtonMain
                      text={ctaSecondaryText}
                      link={ctaSecondaryLink}
                      type="quaternary"
                      noblank={true}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
