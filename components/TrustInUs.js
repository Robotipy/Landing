import Image from "next/image";

const avatars = [
  {
    alt: "Novagric",
    // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
    src: "/assets/logo-novagric.png",
    link: "https://novagric.com/",
    width: 130,
  },
  {
    alt: "Kabeli",
    src: "/assets/logo-kabeli.png",
    link: "https://kabeli.cl",
    width: 130,

  },
  {
    alt: "Marketers Group",
    src: "/assets/logo-marketersgroup.png",
    link: "https://marketersgroup.es/",
    width: 200,
  },
  {
    alt: "Rocketbot",
    src: "/images/rocketbot.svg",
    link: "https://rocketbot.com/",
    width: 190,
  },
  {
    alt: "(Rabbit)²",
    src: "/assets/logo-rabbit.png",
    link: "https://www.linkedin.com/company/rabbit-%C2%B2"
  },
  {
    alt: "Crespodev",
    src: "/assets/logo-crespodev.png",
    link: "https://crespodev.com"
  },
];

const TrustInUs = ({ priority = false }) => {
  return (
    <section className="flex flex-col md:flex-row gap-10 lg:px-20 py-12 text-white">
      {/* RATING */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1 w-1/3">

        <p className="lg:text-2xl">
        Leading companies trust our team to revolutionize their processes with RPA.

        </p>
      </div>
      {/* AVATARS */}
      <div className={`-space-x-5 avatar-group justy-start gap-6`}>
        {avatars.map((image, i) => (
          <div className="w-50 lg:w-60 flex items-center justify-center px-5" key={i}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={image.src}
              alt={image.alt}
              priority={priority}
              width={image.width || 150}
              height={100}
            />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustInUs;
