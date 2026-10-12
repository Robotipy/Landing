import config from "@/config";
import { Contenedor, Rotulo } from "./Capitulo";
import AgendaCalificador from "./AgendaCalificador";
import { agenda as a } from "../data";

export default function Agenda() {
  const correo = config.mailgun.supportEmail;
  return (
    <section
      id="agenda"
      aria-labelledby="agenda-titulo"
      className="scroll-mt-20 bg-white py-14 md:py-24"
      style={{ borderTop: "2px solid #00182B" }}
    >
      <Contenedor>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Rotulo numero={a.numero}>{a.rotulo}</Rotulo>
            <h2
              id="agenda-titulo"
              className="lp1-serif mt-5 text-[28px] font-semibold leading-[34px] md:text-[36px] md:leading-[44px]"
            >
              {a.titulo}
            </h2>
            <p className="lp1-muted mt-5 text-[17px] leading-[28px] md:text-[18px] md:leading-[30px]">{a.texto}</p>
            <ol className="mt-10 space-y-6">
              {a.pasos.map((paso, i) => (
                <li key={paso} className="flex gap-4">
                  <span className="lp1-serif lp1-accent lp1-num w-6 flex-none text-[20px] font-bold leading-[26px]">
                    {i + 1}
                  </span>
                  <span className="text-[16px] leading-[26px]">{paso}</span>
                </li>
              ))}
            </ol>
            {correo ? (
              <p className="mt-10 border-t lp1-rule pt-6 text-[15px] leading-6">
                {a.contacto}{" "}
                <a href={`mailto:${correo}`} className="lp1-link">
                  {correo}
                </a>
              </p>
            ) : null}
          </div>
          <div className="lg:col-span-7">
            <AgendaCalificador copy={a.calificador} />
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
