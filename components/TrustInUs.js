import Image from "next/image";

const avatars = [
  {
    alt: "Novagric",
    // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
    src: "/assets/logo-novagric.png",
    link: "https://novagric.com/",
    width: 150,
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
    link: "https://www.linkedin.com/company/rabbit-%C2%B2",
    width: 150,
  },
  {
    alt: "Crespodev",
    src: "/assets/logo-crespodev.png",
    link: "https://crespodev.com",
    width: 150,
  },
  {
    alt: "Grupo Delirio",
    src: "/assets/logo-delirio.png",
    link: "https://grupodelirio.cl",
    width: 110,
  },
  {
    alt: "Digital Bank",
    src: "/assets/logo-digitalbankla.png",
    link: "https://www.digitalbankla.com",
    width: 200,
  },
  {
    alt: "Mitta",
    src: "/assets/logo-mitta.png",
    link: "https://www.mitta.cl",
    width: 120,
  },
  {
    alt: "Cerezo Software",
    src: "/assets/logo-cerezosoftware.png",
    link: "https://cerezosoftware.com/",
    width: 150,
  },
];

const TrustInUs = ({ priority = false }) => {
  // Split avatars into two rows
  const firstRow = avatars.slice(0, 5);
  const secondRow = avatars.slice(5);

  return (
    <section className="flex flex-col gap-10 lg:px-20 py-12 text-white w-full justify-center">
      {/* Column 1: Text */}
      <div className="mx-auto text-center">
        <p className="text-2xl lg:text-4xl text-balance">
          Las empresas líderes confían en nuestro equipo para revolucionar sus procesos
        </p>
      </div>

      {/* Column 2: Logos in two rows */}
      <div className="flex flex-col md:w-2/3 mx-auto">
        {/* First row of logos */}
        <div className="flex flex-wrap justify-around gap-4">
          {firstRow.map((image, i) => (
            <div className="flex items-center justify-center" key={i} style={{ height: 70 }}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  priority={priority}
                  width={image.width || 150}
                  height={70}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Second row of logos */}
        <div className="flex flex-wrap justify-around gap-4">
          {secondRow.map((image, i) => (
            <div className="flex items-center justify-center" key={i}>
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
      </div>
    </section>
  );
};

export default TrustInUs;
