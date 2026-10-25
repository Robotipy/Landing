import { Suspense } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonMain from "@/components/ButtonMain";
import FaqSection from "@/components/FaqSection";
import RelatedReading from "@/components/RelatedReading";
import {
  CONTACT_HREF,
  LIVE_CONTACT_HREF,
  yoaoUseCases,
  customUseCases,
  cases,
  steps,
  cameraTable,
  relatedLinks,
  faqs,
} from "./data";

const sectionTitle = "text-2xl lg:text-3xl font-bold text-white mb-4";
const card = "border border-white/10 bg-white/5 rounded-xl p-6";

export default function VisionArtificialPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="px-4">
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto pt-6 text-sm text-white/60">
          <Link href="/" className="link link-hover">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">Visión artificial</span>
        </nav>

        <header className="max-w-4xl mx-auto text-center pt-10 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Visión artificial para empresas
          </h1>
          <p className="text-white/80 text-lg lg:text-xl mt-6 leading-relaxed">
            Convertimos el video de tus cámaras, en vivo o grabado, en conteos, tiempos y alertas.
            Desarrollamos el modelo para tu proceso y conectamos los resultados con tus sistemas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonMain text="Agenda una reunión" link={CONTACT_HREF} type="primary" noblank />
            <ButtonMain
              text="Calcula el costo"
              link="/calculadora-vision-artificial"
              type="quaternary"
              noblank
            />
          </div>
        </header>

        <figure className="max-w-5xl mx-auto">
          <Image
            src="/home-assets/yoao-dron.jpg"
            alt="Toma de dron de una rotonda con tráfico: el modelo de visión artificial detecta cada auto y bus y le asigna un número para seguirlo"
            width={1642}
            height={923}
            sizes="(min-width: 1024px) 1024px, 92vw"
            className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
            priority
          />
          <figcaption className="mt-3 text-sm text-white/60 text-center">
            Video de dron procesado con visión artificial. Cada vehículo recibe un número y se
            sigue mientras cruza la imagen.
          </figcaption>
        </figure>

        <section className="max-w-3xl mx-auto py-16">
          <h2 className={sectionTitle}>Qué hace la visión artificial en una empresa</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            La visión artificial (también llamada computer vision o visión computacional) es la
            rama de la inteligencia artificial que interpreta imágenes y video. En una empresa
            permite que una cámara haga el trabajo de quien hoy mira una pantalla, revisa una
            línea o cuenta a mano.
          </p>
          <p className="text-white/80 leading-relaxed">
            Cada proyecto parte con cuatro preguntas: qué hay que detectar, con qué precisión, en
            cuánto tiempo y a qué sistema tiene que llegar el resultado. Con esas respuestas
            definimos las cámaras, el modelo y la forma de operar.
          </p>
        </section>

        <section className="max-w-6xl mx-auto pb-16">
          <h2 className={`${sectionTitle} text-center`}>Casos de uso de visión artificial</h2>
          <p className="text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
            Muchos casos se resuelven con YOAO, nuestra plataforma de analítica de video: subes el
            video grabado y recibes los resultados sin desarrollo. Los demás los construimos a
            medida.
          </p>
          <h3 className="text-xl font-bold text-white mt-10 mb-4">Listos para usar con YOAO</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yoaoUseCases.map((u) => (
              <div key={u.title} className={card}>
                <h4 className="text-lg font-bold text-white mb-2">{u.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white mt-10 mb-4">Proyectos a medida</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customUseCases.map((u) => (
              <div key={u.title} className={card}>
                <h4 className="text-lg font-bold text-white mb-2">{u.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto pb-16">
          <h2 className={`${sectionTitle} text-center`}>Casos reales</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {cases.map((c) => (
              <article key={c.title} className={`${card} flex flex-col`}>
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                  {c.industry}
                </p>
                <h3 className="text-xl font-bold text-white mb-4">{c.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-2">
                  <span className="font-semibold text-white">Desafío: </span>
                  {c.challenge}
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  <span className="font-semibold text-white">Solución: </span>
                  {c.solution}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg bg-white/5 p-4">
                      <p className="text-2xl font-bold text-accent">{m.value}</p>
                      <p className="text-white/70 text-xs mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link href={c.href} className="link link-accent text-sm mt-6">
                  Ver el caso
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto pb-16">
          <h2 className={sectionTitle}>Cómo trabajamos un proyecto de visión artificial</h2>
          <ol className="space-y-4 mt-6">
            {steps.map((s, i) => (
              <li key={s.title} className={`${card} flex gap-4`}>
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-4xl mx-auto pb-16">
          <h2 className={sectionTitle}>¿Sirven tus cámaras actuales?</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Depende de qué tan pequeño es lo que hay que detectar. Para contar o vigilar, las
            cámaras de seguridad que ya tienes suelen bastar. Para inspeccionar un producto se
            necesita una cámara industrial y luz controlada.
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full text-white/80">
              <thead>
                <tr className="text-white border-white/10">
                  <th>Caso de uso</th>
                  <th>Cámara</th>
                  <th>Dónde se procesa</th>
                </tr>
              </thead>
              <tbody>
                {cameraTable.map((row) => (
                  <tr key={row.useCase} className="border-white/10">
                    <td className="font-semibold text-white">{row.useCase}</td>
                    <td>{row.camera}</td>
                    <td>{row.processing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-4xl mx-auto pb-16">
          <div className={`${card} lg:p-10`}>
            <h2 className="text-2xl font-bold text-white mb-3">
              ¿Necesitas un estudio o una medición puntual?
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Para aforos, filas, estacionamientos o auditorías de seguridad no hace falta un
              desarrollo a medida. Subes el video a YOAO, marcas las zonas en la imagen y recibes
              conteos, tiempos y eventos listos para tu informe. Pagas por hora de video
              analizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonMain text="Conocer YOAO" link="/analysis" type="quaternary" noblank />
              <ButtonMain
                text="Calcula el costo de un aforo"
                link="/calculadora-aforo-vehicular"
                type="quaternary"
                noblank
              />
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto pb-16">
          <div className={`${card} lg:p-10`}>
            <h2 className="text-2xl font-bold text-white mb-3">
              ¿Necesitas analizar tus cámaras en vivo?
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Conectamos tus cámaras para contar, medir y detectar eventos mientras ocurren:
              alguien sin casco en una zona de equipos, una fila que supera el largo aceptable o un
              camión esperando más de lo debido. Cuéntanos qué quieres vigilar y armamos el
              proyecto con tus cámaras actuales.
            </p>
            <ButtonMain
              text="Quiero análisis en vivo"
              link={LIVE_CONTACT_HREF}
              type="primary"
              noblank
            />
          </div>
        </section>

        <FaqSection faqs={faqs} title="Preguntas frecuentes sobre visión artificial" />

        <RelatedReading title="Sigue avanzando" links={relatedLinks} />

        <section className="max-w-4xl mx-auto text-center py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Tienes cámaras grabando y nadie mirando los datos?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Envíanos una muestra de tu video y te decimos qué se puede medir y con qué precisión.
          </p>
          <div className="flex justify-center">
            <ButtonMain text="Agenda una reunión" link={CONTACT_HREF} type="primary" noblank />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
