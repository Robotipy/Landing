import Image from "next/image";
import { Link } from "@/i18n/routing";
import { BrowserFrame, PhoneFrame } from "./frames";
import Icon from "./icons";
import { MonitorMock, RobotMock, SoftwareMock } from "./mocks";
import Reveal from "./Reveal";
import SolutionTabs from "./SolutionTabs";
import { container, CtaButton, SectionHeading, textLink } from "./ui";

function Panel({ title, text, checks, servicio, more, screen }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7 lg:order-2">{screen}</div>
      <div className="lg:col-span-5 lg:order-1">
        <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-[#00182B] sm:text-3xl lg:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-slate-700 sm:text-xl">{text}</p>
        <ul className="mt-6 space-y-3">
          {checks.map((item) => (
            <li key={item} className="flex items-center gap-3 text-lg font-semibold text-[#00182B]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#039695]/15 text-[#027a79]">
                <Icon name="check" className="h-5 w-5" strokeWidth={2.4} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
          <CtaButton servicio={servicio}>Conversemos</CtaButton>
          {more && (
            <Link href={more.href} className={`${textLink} text-[#027a79]`}>
              {more.label}
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const melonScreen = (
  <figure>
    <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/25 ring-1 ring-slate-900/10">
      <Image
        src="/home-assets/melon-demo.jpg"
        alt="Demo de Melon Help: el mensaje llega por WhatsApp, se crea un ticket y el agente de IA responde con la información del servicio"
        width={1280}
        height={720}
        sizes="(min-width: 1024px) 680px, 92vw"
        className="block h-auto w-full"
      />
    </div>
    <figcaption className="mt-4 flex items-center gap-2 text-base text-slate-600">
      <Image src="/home-assets/melonbot.png" alt="" width={32} height={32} className="h-8 w-8 rounded-full" />
      Demo de Melon Help, la plataforma de atención que implementamos como partner.
    </figcaption>
  </figure>
);

const yoaoScreen = (
  <div className="relative pb-6 pr-6 sm:pb-10 sm:pr-10">
    <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/25 ring-1 ring-slate-900/10">
      <Image
        src="/home-assets/yoao-home.jpg"
        alt="Portada de YOAO: de video a datos, con una cámara que detecta autos, camiones y personas en una zona"
        width={1600}
        height={840}
        sizes="(min-width: 1024px) 640px, 88vw"
        className="block h-auto w-full"
      />
    </div>
    <div className="absolute bottom-0 right-0 w-[30%] max-w-[190px]">
      <PhoneFrame>
        <Image
          src="/home-assets/yoao-zona.jpg"
          alt="YOAO en el teléfono: zona marcada sobre una calle y conteo de vehículos por tipo"
          width={540}
          height={960}
          sizes="(min-width: 1024px) 190px, 30vw"
          className="block h-auto w-full"
        />
      </PhoneFrame>
    </div>
  </div>
);

const tabs = [
  {
    id: "agentes",
    label: "Agentes de IA",
    icon: "chat",
    panel: (
      <Panel
        title="Atiende a tus clientes a toda hora"
        text="Un agente de IA responde por WhatsApp, web y correo, y pasa a una persona lo que necesita atención humana. Lo implementamos con Melon Help, plataforma de la que somos partner."
        checks={["WhatsApp, web y correo", "Respuestas con tu información", "Tu equipo toma el control cuando quiere"]}
        servicio="chatbot"
        screen={melonScreen}
      />
    ),
  },
  {
    id: "robots",
    label: "Robots",
    icon: "robot",
    panel: (
      <Panel
        title="Robots que hacen las tareas repetitivas"
        text="Son robots de software que copian datos, descargan reportes y registran información en los sistemas que ya usas. Trabajan de día y de noche mientras tu equipo se dedica a lo importante."
        checks={["Sobre tus sistemas actuales", "Correos, planillas y portales", "Platinum Partner de Rocketbot"]}
        servicio="automatizacion"
        screen={<RobotMock />}
      />
    ),
  },
  {
    id: "software",
    label: "Software a medida",
    icon: "code",
    panel: (
      <Panel
        title="Aplicaciones hechas para tu empresa"
        text="Creamos plataformas web y paneles con IA cuando ninguna herramienta calza con tu operación. Hicimos, por ejemplo, una proyección de ventas para consumo masivo y un gemelo digital para la minería del cobre."
        checks={["Plataformas web y paneles", "Asistentes de IA con tus datos", "Soporte y mejoras después de entregar"]}
        servicio="software"
        screen={<SoftwareMock />}
      />
    ),
  },
  {
    id: "video",
    label: "Analítica de video",
    icon: "camera",
    panel: (
      <Panel
        title="Tus cámaras convertidas en datos"
        text="YOAO, nuestro producto, cuenta vehículos y personas en video en vivo o grabado. Marcas una zona en la imagen y recibes conteos y alertas."
        checks={["Vehículos y personas", "Zonas y alertas", "Cualquier cámara o video grabado"]}
        servicio="software"
        more={{ href: "/analysis", label: "Conocer YOAO" }}
        screen={yoaoScreen}
      />
    ),
  },
  {
    id: "monitoreo",
    label: "Monitoreo",
    icon: "pulse",
    panel: (
      <Panel
        title="Sabes al instante si un robot se detiene"
        text="Robotipy Monitor muestra las ejecuciones, fallas y registros de tus robots en producción. Si algo se detiene, tu equipo recibe un aviso."
        checks={["Ejecuciones y fallas", "Avisos al equipo", "Historial de cada robot"]}
        servicio="automatizacion"
        more={{ href: "/monitor", label: "Conocer Monitor" }}
        screen={<MonitorMock />}
      />
    ),
  },
];

export default function Soluciones() {
  return (
    <section
      id="soluciones"
      aria-labelledby="h2-soluciones-title"
      className="scroll-mt-28 bg-[#F2F5F7] py-20 md:py-28"
    >
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="h2-soluciones-title"
            title="Mira lo que construimos, funcionando"
            lead="Elige un tema y te mostramos cómo se ve en la práctica."
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <SolutionTabs tabs={tabs} label="Soluciones de Robotipy" />
        </Reveal>
      </div>
    </section>
  );
}
