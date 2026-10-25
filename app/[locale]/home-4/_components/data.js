// Contenido de la home principal en español (estructura de consultora: Quiénes somos,
// Qué hacemos, Perspectivas). Los datos sobre Robotipy salen de
// libs/landingFacts.js y libs/successCases.js.

import { facts, tools } from "@/libs/landingFacts";

export const MENU = [
  {
    key: "quienes",
    label: "Quiénes somos",
    intro: `Equipo de automatización e IA con clientes en ${facts.clientCountriesText}.`,
    cols: [
      {
        title: "Robotipy",
        links: [
          { label: "Nuestra historia", href: "/about" },
          { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        ],
      },
      {
        title: "Alianzas",
        links: [
          { label: "Rocketbot, Platinum Partner", href: "/rocketbot" },
          { label: "Melon Help, partner implementador", href: "/chatbot" },
        ],
      },
    ],
    feature: {
      title: `${facts.projects} proyectos`,
      text: `Clientes en ${facts.clientCountriesText}.`,
      href: "/success-cases",
      cta: "Ver casos",
    },
  },
  {
    key: "hacemos",
    label: "Qué hacemos",
    intro: "Servicios, industrias y productos propios.",
    cols: [
      {
        title: "Servicios",
        links: [
          { label: "Robots de software (RPA)", href: "/automation" },
          { label: "Agentes de IA y chatbots", href: "/chatbot" },
          { label: "Software a medida", href: "/desarrollo-software" },
          { label: "Visión artificial", href: "/vision-artificial" },
          { label: "Capacitación", href: "/capacitaciones" },
          { label: "Qué es RPA", href: "/rpa" },
        ],
      },
      {
        title: "Industrias",
        links: [
          { label: "Hotelería", href: "/casos-exito/hoteleria" },
          { label: "Minería", href: "/casos-exito/mineria" },
          { label: "Agrícola", href: "/casos-exito/agricola" },
          { label: "Alimentos", href: "/casos-exito/alimentos" },
          { label: "Financiero", href: "/casos-exito/financiero" },
          { label: "Seguros", href: "/casos-exito/seguros" },
          { label: "Transporte", href: "/casos-exito/transporte" },
          { label: "Automotriz", href: "/casos-exito/automotriz" },
        ],
      },
      {
        title: "Productos",
        links: [
          { label: "Robotipy Projects", href: "/projects" },
          { label: "Robotipy Monitor", href: "/monitor" },
          { label: "YOAO, analítica de video", href: "/analysis" },
        ],
      },
    ],
    feature: {
      title: "Casos de éxito",
      text: "Resultados reales por industria, con el antes y el después.",
      href: "/success-cases",
      cta: "Ver todos los casos",
    },
  },
  {
    key: "perspectivas",
    label: "Perspectivas",
    intro: "Guías, casos y herramientas para decidir qué automatizar.",
    cols: [
      {
        title: "Blog",
        links: [
          { label: "Todos los artículos", href: "/blog", plain: true },
          { label: "Casos de éxito", href: "/blog/category/casos-de-exito", plain: true },
          { label: "RPA", href: "/blog/category/RPA", plain: true },
          { label: "Tutoriales", href: "/blog/category/Tutoriales", plain: true },
        ],
      },
      { title: "Herramientas gratuitas", links: tools.map((t) => ({ label: t.label, href: t.href })) },
    ],
    feature: {
      title: "Cuánto cuesta automatizar un proceso",
      text: "Rangos reales de precio y qué incluye cada uno.",
      href: "/blog/cuanto-cuesta-automatizar-un-proceso",
      plain: true,
      cta: "Leer la guía",
    },
  },
];

export const SERVICES = [
  {
    title: "Robots de software",
    text: "Robots que hacen las tareas repetitivas sobre los sistemas que ya usas: ERP, portales, correo y planillas. Los construimos con Rocketbot, de quien somos Platinum Partner.",
    href: "/automation",
    image: "/home-4/bot-censo-flujo.jpg",
    w: 1650,
    h: 840,
    alt: "Robot que cruza el sistema de reservas, housekeeping y recepción",
  },
  {
    title: "Agentes de IA",
    text: "Atención por WhatsApp, Slack y correo con agentes que responden con la información real de tu empresa y derivan a una persona cuando hace falta.",
    href: "/chatbot",
    image: "/home-assets/melon-tablero.jpg",
    w: 1440,
    h: 900,
    alt: "Tablero de tickets de atención en Melon Help",
  },
  {
    title: "Software a medida",
    text: "Aplicaciones hechas para tu operación cuando ninguna herramienta del mercado calza. Las construimos y las mantenemos.",
    href: "/desarrollo-software",
    image: "/home-assets/projects-dashboard.jpg",
    w: 1600,
    h: 824,
    alt: "Tablero de Robotipy Projects",
  },
  {
    title: "Visión artificial",
    text: "Tus cámaras convertidas en datos, en vivo o grabado: conteo de vehículos y personas, filas, seguridad y control de calidad. Para estudios y mediciones usamos YOAO, nuestra plataforma de analítica de video.",
    href: "/vision-artificial",
    image: "/home-assets/yoao-dron.jpg",
    w: 1642,
    h: 923,
    alt: "Toma de dron con vehículos detectados por YOAO",
  },
  {
    title: "Capacitación",
    text: "Talleres prácticos para que tu equipo automatice y use IA en su trabajo diario.",
    href: "/capacitaciones",
    panel: [
      { title: "Equipos de negocio", text: "Automatización práctica para personas que no programan." },
      { title: "Equipos técnicos", text: "Especialización para construir y mantener robots en producción." },
    ],
  },
];

export const INDUSTRIES = [
  { label: "Hotelería", href: "/casos-exito/hoteleria", image: "/home-4/promet-loop.jpg", position: "object-center" },
  { label: "Minería", href: "/casos-exito/mineria", image: "/assets/banners/mineria.jpg", position: "object-[12%_50%]" },
  { label: "Agrícola", href: "/casos-exito/agricola", image: "/assets/banners/agricola.jpeg" },
  { label: "Financiero", href: "/casos-exito/financiero", image: "/assets/banners/financiero.jpeg" },
  { label: "Transporte", href: "/casos-exito/transporte", image: "/assets/banners/logistica.jpeg" },
  { label: "Automotriz", href: "/casos-exito/automotriz", image: "/assets/banners/automotriz.jpeg" },
];
