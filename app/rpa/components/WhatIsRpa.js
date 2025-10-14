import config from "@/config";
import ilusflow from "../../../public/assets/ilus-flow.png";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import Rocketbot from "../../../public/images/rocketbotwhite.svg";

const WhatIsRpa = () => {
  return (
    <section className="flex flex-col justify-center items-center text-neutral-content lg:p-12 lg:my-20 lg:mx-32">
      <div className="flex flex-col mx-auto px-1 lg:px-12 py-12 lg:py-16 text-start justify-center items-start">
        <h1 className="mx-auto text-5xl md:text-6xl tracking-tight mb-6 md:mb-8 w-full px-5 lg:px-40">
          ¿Qué es <strong>RPA?</strong>
        </h1>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40 pb-4">
          La automatización con RPA es una herramienta poderosa que te permite mejorar el
          rendimiento de tu negocio. No solo hablamos de eliminar tareas repetitivas,
          sino de optimizar esos procesos vitales que definen el éxito de tu organización.
          ¿Qué tal si los procesos que más importan - financieros, logísticos o de toma
          de decisiones - pudieran ejecutarse con precisión quirúrgica y velocidad incomparable?
        </p>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40">
          El impacto sería significativo: tiempos de respuesta más rápidos, costos
          operativos reducidos, mayor precisión en la ejecución y, lo más importante,
          la capacidad de enfocar los recursos humanos en actividades que realmente
          impulsen la innovación y el crecimiento estratégico del negocio.
        </p>
      </div>
      <Image src={ilusflow} alt="ilus-flow.png"></Image>
      <h1 className="flex flex-col mx-auto px-12 text-start justify-center items-start border border-teal-700 w-full max-w-[1160px] mt-24"></h1>
      <div className="flex flex-col mx-auto px-1 lg:px-12 py-12 lg:py-16 text-start justify-center items-start">
        <div className="mx-auto flex justify-start items-start text-5xl md:text-6xl tracking-tight mb-6 md:mb-8 w-full px-5 lg:px-40">
          <h1 className="flex flex-row justify-center items-center gap-x-4">
            <strong>Rocketbot</strong>
            RPA
          </h1>
        </div>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40 pb-4">
          Rocketbot es la plataforma RPA ideal para impulsar la transformación
          digital de empresas de cualquier tamaño. Con una inversión global en
          RPA que ya supera los $60 mil millones, Rocketbot se ha posicionado
          como una solución clave, ayudando a más de 500 clientes y automatizando más
          de 5,000 procesos en todo el mundo. Su capacidad para ejecutar procesos de
          manera ágil y eficiente le permite gestionar hasta 10 tareas en paralelo
          dentro del mismo entorno, acelerando las operaciones sin aumentar costos adicionales.
        </p>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40">
          Lo que realmente distingue a Rocketbot es su flexibilidad y escalabilidad.
          Desarrollado en Python, ofrece una facilidad única de integración con
          diferentes entornos, ya sea local (on-premise) o en la nube, adaptándose
          a las necesidades específicas de cada organización, desde pequeñas empresas
          hasta grandes corporaciones. Además, su enfoque en la democratización de
          la automatización permite que cualquier persona dentro de una organización,
          independientemente de su experiencia técnica, pueda crear y gestionar robots
          de forma autónoma. Con sus licencias asequibles y expandibles desde el escritorio
          hasta servidores, Rocketbot garantiza un ROI optimizado, proporcionando a las
          empresas una solución que crece con ellas sin pagar de más por ejecutar procesos
          críticos en paralelo.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-x-12 h-[80px] mb-10">
        <Link
          href="/#"
          aria-current="page"
          className="flex gap-2 justify-center md:justify-start items-center"
        >
          <Image
            src={logo}
            alt={`${config.appName} logo`}
            priority={true}
            className="lg:w-12 lg:h-12 h-8 w-8"
          />
          <strong className="font-extrabold tracking-tight text-2xl md:text-4xl">
            {config.appName}
          </strong>
        </Link>
        +
        <Image src={Rocketbot} alt="Rocketbot Logo" className="h-44 w-44 lg:w-[280px] mt-1"></Image>
      </div>
    </section>
  );
};

export default WhatIsRpa;
