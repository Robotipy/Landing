// Ilustraciones de interfaz hechas con código para las soluciones que no
// tienen captura publicable. Son ilustrativas: no muestran cifras de clientes.

import { BrowserFrame } from "./frames";
import Icon from "./icons";

function LiveDot({ color = "bg-[#039695]" }) {
  return (
    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${color}`} />
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${color}`} />
    </span>
  );
}

// Robot de software (RPA) trabajando paso a paso.
export function RobotMock() {
  const steps = [
    { label: "Lee la solicitud que llegó por correo", done: true },
    { label: "Revisa que los datos estén completos", done: true },
    { label: "Registra la orden en tu sistema", done: true },
    { label: "Avisa a la persona que la pidió", done: false },
  ];
  const systems = ["Correo", "Planillas", "Portales web", "Tu ERP"];
  return (
    <div
      role="img"
      aria-label="Ilustración de un robot de software trabajando: lee una solicitud del correo, revisa los datos, la registra en el sistema y avisa a quien la pidió."
    >
      <BrowserFrame label="Robot de órdenes de compra">
        <div className="bg-white p-4 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00182B] text-[#4fd1d0]">
                <Icon name="robot" className="h-7 w-7" />
              </span>
              <div>
                <p className="text-lg font-bold text-[#00182B]">Robot de órdenes</p>
                <p className="text-sm text-slate-500">Funciona de día y de noche</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#039695]/10 px-3 py-1 text-sm font-semibold text-[#027a79]">
              <LiveDot />
              Trabajando
            </span>
          </div>
          <ol className="mt-6 space-y-3">
            {steps.map((step) => (
              <li
                key={step.label}
                className={`flex items-center gap-3 rounded-2xl border px-3 py-3 sm:gap-4 sm:px-4 ${
                  step.done ? "border-slate-200 bg-white" : "border-[#039695]/40 bg-[#039695]/5"
                }`}
              >
                {step.done ? (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#039695] text-white">
                    <Icon name="check" className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                ) : (
                  <span className="h-8 w-8 shrink-0 animate-spin rounded-full border-4 border-[#039695]/25 border-t-[#039695]" />
                )}
                <span className="text-base font-medium text-[#00182B] sm:text-lg">{step.label}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-slate-500">Trabaja sobre:</span>
            {systems.map((s) => (
              <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                {s}
              </span>
            ))}
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

// Plataforma de proyección de ventas con asistente de IA (software a medida).
export function SoftwareMock() {
  return (
    <figure>
      <div
        role="img"
        aria-label="Ilustración de una plataforma web con un gráfico de proyección de ventas por escenario y un asistente de IA que responde preguntas."
      >
        <BrowserFrame label="Proyección de ventas">
          <div className="grid gap-4 bg-slate-50 p-4 sm:p-6 md:grid-cols-5">
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-5 md:col-span-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-base font-bold text-[#00182B]">Ventas por escenario</p>
                <div className="flex gap-1.5 text-xs font-semibold">
                  <span className="rounded-full bg-[#00182B] px-2.5 py-1 text-white">Base</span>
                  <span className="rounded-full bg-[#039695]/15 px-2.5 py-1 text-[#027a79]">Optimista</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-800">Pesimista</span>
                </div>
              </div>
              <svg viewBox="0 0 300 150" className="mt-4 h-auto w-full" aria-hidden="true">
                {[30, 65, 100, 135].map((y) => (
                  <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                ))}
                <polygon points="175,72 215,58 255,44 295,30 295,98 255,92 215,86 175,72" fill="#039695" opacity="0.12" />
                <polyline
                  points="5,118 30,110 55,114 80,98 105,100 130,86 155,80 175,72"
                  fill="none"
                  stroke="#00182B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline points="175,72 215,58 255,44 295,30" fill="none" stroke="#039695" strokeWidth="3" strokeDasharray="6 5" strokeLinecap="round" />
                <polyline points="175,72 215,66 255,62 295,58" fill="none" stroke="#00182B" strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" opacity="0.55" />
                <polyline points="175,72 215,86 255,92 295,98" fill="none" stroke="#d97706" strokeWidth="3" strokeDasharray="6 5" strokeLinecap="round" />
                <line x1="175" x2="175" y1="18" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 4" />
                <circle cx="175" cy="72" r="5" fill="#00182B" />
              </svg>
            </div>
            <div className="flex flex-col rounded-2xl bg-[#00182B] p-4 text-white sm:p-5 md:col-span-2">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#4fd1d0]">
                <Icon name="spark" className="h-5 w-5" />
                Asistente de IA
              </p>
              <div className="mt-4 space-y-3 text-sm sm:text-base">
                <p className="ml-5 rounded-2xl rounded-br-md bg-white/10 px-3 py-2">
                  ¿Cómo cambian las ventas si sube el dólar?
                </p>
                <p className="mr-3 rounded-2xl rounded-bl-md bg-[#039695] px-3 py-2 font-medium text-[#00182B]">
                  Te muestro el escenario pesimista en el gráfico, junto al base.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white/60">Escribe tu pregunta</div>
              </div>
            </div>
          </div>
        </BrowserFrame>
      </div>
      <figcaption className="mt-4 text-base text-slate-600">
        Ilustración basada en una plataforma que hicimos para una empresa de consumo masivo.
      </figcaption>
    </figure>
  );
}

// Robotipy Monitor: estado de los robots en producción.
export function MonitorMock() {
  const rows = [
    { name: "Censo de ocupación", state: "ok", text: "Terminó bien" },
    { name: "Órdenes de compra", state: "ok", text: "Terminó bien" },
    { name: "Disponibilidad de flota", state: "run", text: "En curso" },
    { name: "Carga de facturas", state: "fail", text: "Se detuvo" },
  ];
  const tone = {
    ok: "bg-emerald-400/15 text-emerald-300",
    run: "bg-[#039695]/20 text-[#4fd1d0]",
    fail: "bg-red-400/15 text-red-300",
  };
  const dot = { ok: "bg-emerald-400", run: "bg-[#4fd1d0]", fail: "bg-red-400" };
  const bars = [62, 80, 55, 90, 72, 40, 30];
  return (
    <div
      role="img"
      aria-label="Ilustración de Robotipy Monitor: lista de robots con su estado y un aviso al equipo cuando uno se detiene."
      className="relative pb-10 sm:pb-6"
    >
      <BrowserFrame label="Robotipy Monitor" tone="dark">
        <div className="bg-[#0b1622] p-4 text-white sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-lg font-bold">Robots en producción</p>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">Hoy</span>
          </div>
          <div className="mt-4 rounded-xl bg-white/5 p-4">
            <p className="text-sm text-white/60">Ejecuciones de la semana</p>
            <div className="mt-3 flex h-16 items-end gap-2 sm:h-20" aria-hidden="true">
              {bars.map((h, i) => (
                <span key={i} className="flex-1 rounded-t-md bg-[#039695]/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            {rows.map((r) => (
              <li key={r.name} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5 sm:px-4">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot[r.state]}`} aria-hidden="true" />
                <span className="truncate text-sm font-medium sm:text-base">{r.name}</span>
                <span className={`ml-auto shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold sm:text-sm ${tone[r.state]}`}>
                  {r.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </BrowserFrame>
      <div className="absolute -bottom-1 right-3 flex max-w-[85%] items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-2xl ring-1 ring-black/5 sm:-bottom-4 sm:right-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
          <Icon name="bell" className="h-5 w-5" />
        </span>
        <span className="text-sm font-semibold text-[#00182B] sm:text-base">Aviso enviado al equipo</span>
      </div>
    </div>
  );
}

// Pasos de atención de Melon Help, sobre la captura del tablero.
export function MelonSteps({ className = "" }) {
  const steps = [
    { label: "Llega el mensaje por WhatsApp", icon: "chat" },
    { label: "Se crea un ticket", icon: "ticket" },
    { label: "La IA responde con tu información", icon: "spark" },
    { label: "Si hace falta, pasa a tu equipo", icon: "person" },
  ];
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-black/5 sm:p-5 ${className}`}>
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-center gap-3">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                i === 2 ? "bg-[#039695] text-white" : "bg-[#00182B] text-[#4fd1d0]"
              }`}
            >
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold text-[#00182B]">{s.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
