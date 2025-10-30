"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCaseCard from "@/components/SuccessCaseCard";
import Link from "next/link";

export default function PortfolioPage() {
  // Consolidamos todos los casos de éxito de todas las industrias
  const allSuccessCases = [
    // Casos de Agricultura
    {
      id: 1,
      industry: "Agrotecnología",
      categoria: "agricola",
      challenge: "Generación manual de ofertas técnicas en documentos word con diferentes plantillas e información personalizada para clientes",
      solution: "Automatizamos la generación de documentos con ofertas de artículos para clientes a través de un formulario, eliminando el trabajo manual repetitivo.",
      results: {
        manualExecution: "2 hr",
        automatedExecution: "2 min",
        timeSaving: "98%",
      },
      name: "Configurador de Oferta Técnica",
      tools: ["excel", "word", "pdf", "javascript"],
      platform: "rocketbot",
    },
    {
      id: 2,
      industry: "Agroindustria",
      categoria: "agricola",
      challenge: "Conciliar los movimientos de diferentes bancos argentinos y los movimientos de finnegans",
      solution: "Automatización de la descarga de movimientos de cada banco, comparación con los movimientos de finnegans y conciliación de los mismos",
      results: {
        manualExecution: "2 hr",
        automatedExecution: "5 min",
        timeSaving: "96%",
      },
      name: "Conciliación Bancaria",
      tools: ["finnegans", "excel", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 3,
      industry: "Agrotecnología",
      categoria: "agricola",
      challenge: "Los operarios poco técnicos en terreno, debían buscar en la base de datos los artículos para presupuestar.",
      solution: "Extracción de los articulos desde un audio enviado por el operario, y envío de la información al sistema de presupuestos.",
      results: {
        manualExecution: "2 hr",
        automatedExecution: "5 min",
        timeSaving: "96%",
      },
      name: "Registro de Artículos por Audio",
      tools: ["python", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 4,
      industry: "Frutícola",
      categoria: "agricola",
      challenge: "Bajar los documentos desde el SII, y carga de cada uno junto a la respectiva orden de compra en su ERP Quality (Q-biz).",
      solution: "Automatización de la descarga de facturas del SII, búsqueda de la respectiva orden de compra y carga en ERP Quality (Q-Biz)",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "1 hr",
        timeSaving: "87%",
      },
      name: "Carga de Facturas en ERP Quality",
      tools: ["excel", "qbiz", "sii", "pdf", "xml", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 5,
      industry: "Agrotecnología",
      categoria: "agricola",
      challenge: "Generación de Planos DWG e imagenes TIFF descargando archivos KMZ de diferentes plataformas incluyendo google earth",
      solution: "Automatización de la descarga de archivos KMZ y control de las aplicaciones de Google Earth, BricsCad y QGIS para generar los planos y imagenes TIFF",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "25 min",
        timeSaving: "92%",
      },
      name: "Generación de Planos",
      tools: ["qgis", "bricscad", "google-earth"],
      platform: "rocketbot",
    },

    // Casos de Alimentos
    {
      id: 4,
      hide: true,
      industry: "Alimentos",
      categoria: "alimentos",
      challenge: "Proceso manual de ratificación de Órdenes de Producción (OP) con validación de datos y documentación compleja.",
      solution: "Automatización del proceso de ratificación de Órdenes de Producción, incluyendo validación automática de datos y generación de documentación requerida.",
      results: {
        manualExecution: "4 hr",
        automatedExecution: "20 min",
        timeSaving: "92%",
      },
      name: "Mercadería OP",
      tools: ["excel", "pdf", "dynamics"],
      platform: "rocketbot",
    },
    {
      id: 5,
      hide: true,
      industry: "Alimentos",
      categoria: "alimentos",
      challenge: "Proceso manual de ratificación de Órdenes de Servicio (OS) con seguimiento de documentación y validaciones.",
      solution: "Automatización completa del proceso de ratificación de Órdenes de Servicio, incluyendo seguimiento automático de documentación y validaciones.",
      results: {
        manualExecution: "3 hr",
        automatedExecution: "15 min",
        timeSaving: "92%",
      },
      name: "Ratificación OS",
      tools: ["excel", "pdf", "dynamics"],
      platform: "rocketbot",
    },
    {
      id: 6,
      hide: true,
      industry: "Alimentos",
      categoria: "alimentos",
      challenge: "Extracción manual de información de PDFs de Cereal, Leche y Hacienda para ingreso en documentos de Compra y Venta.",
      solution: "Automatización de la extracción de información desde PDFs de diferentes sectores (Cereal, Leche, Hacienda) y su posterior ingreso en documentos de Compra y Venta.",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "25 min",
        timeSaving: "92%",
      },
      name: "Lectura de Facturas",
      tools: ["excel", "pdf", "python"],
      platform: "rocketbot",
    },

    // Casos de Automotriz
    {
      id: 7,
      industry: "Automotriz",
      categoria: "automotriz",
      challenge: "Actualización manual de matrículas de vehículos en diferentes sistemas (Invesfleet y MUTUA) con validación y filtrado de expedientes.",
      solution: "Automatización de la extracción de datos en Invesfleet y MUTUA, incluyendo filtrado, validación de expedientes y extracción de información del vehículo.",
      results: {
        manualExecution: "4 hr",
        automatedExecution: "15 min",
        timeSaving: "94%",
      },
      name: "Actualización de Matrículas",
      tools: ["excel", "outlook", "chrome"],
      platform: "rocketbot",
    },
    {
      id: 8,
      industry: "Automotriz",
      categoria: "automotriz",
      challenge: "Descarga manual de órdenes de trabajo desde el portal de Allianz para gestión de vehículos.",
      solution: "Automatización de la descarga de órdenes desde el portal de Allianz, integrando la información con el sistema de gestión vehicular.",
      results: {
        manualExecution: "2 hr",
        automatedExecution: "10 min",
        timeSaving: "92%",
      },
      name: "Descarga de Órdenes y Facturas",
      tools: ["excel", "chrome", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 9,
      industry: "Rent-a-car",
      categoria: "automotriz",
      challenge: "El proceso de generación de órdenes de compra, debía cargar datos a SAP y mandar la OC al proveedor, pasando por diferentes etapas de aprobación y validación.",
      solution: "Automatización de la generación de órdenes de compra, incluyendo estandarización, carga de datos a SAP y envío de la OC al proveedor 24/7.",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "2 min",
        timeSaving: "93%",
      },
      name: "Generación de Órdenes de Compra",
      tools: ["excel", "sap", "pdf", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 10,
      industry: "Logística",
      categoria: "transporte",
      challenge: "Valoración manual de baterías de vehículos en el portal de Allianz con verificación de estado y documentación.",
      solution: "Automatización de la valoración de baterías en el portal de Allianz, incluyendo verificación de estado, documentación y generación de reportes.",
      results: {
        manualExecution: "3 hr",
        automatedExecution: "20 min",
        timeSaving: "89%",
      },
      name: "Valoración de Baterías",
      tools: ["excel", "chrome", "pdf", "outlook"],
      platform: "rocketbot",
    },

    // Casos de Financiero
    {
      id: 11,
      industry: "Banca",
      categoria: "financiero",
      challenge: "La página de la dirección del trabajo se cae constantemente, lo que dificulta la carga de contratos de nuevos colaboradores.",
      solution: "Automatización de carga de contratos en la página de la dirección del trabajo, incluyendo validación de datos y confirmación de envío.",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "18 min",
        timeSaving: "94%"
      },
      name: "Carga de Contratos en MIDT",
      tools: ["excel", "midt", "outlook"],
      platform: "rocketbot"
    },
    {
      id: 12,
      industry: "Seguros",
      categoria: "financiero",
      challenge: "Buscar el estado de los siniestros abiertos en cada plataforma de seguros y actualizar la información en el portal de elevia",
      solution: "Automatización que ingresa al sistema de cada seguro, obtiene las observaciones, descarga los adjuntos y actualiza la información en el portal de elevia",
      results: {
        manualExecution: "4 hr",
        automatedExecution: "15 min",
        timeSaving: "94%"
      },
      name: "Actualización de Siniestros",
      tools: ["chrome", "reale-seguros", "mapfre", "allianz", "axa"],
      platform: "rocketbot"
    },
    {
      id: 13,
      industry: "Banca",
      categoria: "financiero",
      challenge: "Validación de dominios de correos electrónicos de contacto para documentos a ratificar.",
      solution: "Automatización de la búsqueda de dominios de correos electrónicos de contacto en los sitios de godaddy, nic chile y whois",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "1 hr",
        timeSaving: "80%"
      },
      name: "Ratificación de Dominios",
      tools: ["chrome", "sharepoint"],
      platform: "rocketbot"
    },
    {
      id: 14,
      industry: "Estudio Contable",
      categoria: "financiero",
      challenge: "Extracción manual de información de Facturas de Cereal, Leche y Hacienda para ingreso en documentos de Compra y Venta.",
      solution: "Automatización que recibe las facturas desde un formulario web y genera los reportes de compra, venta y bienes y servicios",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "7 min",
        timeSaving: "88%"
      },
      name: "Lectura de Facturas",
      tools: ["excel", "pdf", "outlook", "chrome"],
      platform: "rocketbot"
    },
    {
      id: 15,
      industry: "Seguros",
      categoria: "financiero",
      challenge: "Notificar por email y whatsapp a los clientes y responsables el estado de los siniestros pendientes en el software ebroker",
      solution: "Automatización de que ingresa al sistema ebroker, y notifica a los usuarios o respnsables a través de correo o whatsapp el estado de los siniestros",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "1 hr",
        timeSaving: "88%"
      },
      name: "Notificación de Siniestros",
      tools: ["excel", "outlook", "ebroker", "chrome"],
      platform: "rocketbot"
    },
    {
      id: 16,
      industry: "Seguros",
      categoria: "financiero",
      challenge: "Resolver tareas pendientes y crear, asignar y/o actualizar siniestros en elevia y reale seguros",
      solution: "Automatización de que ingresa al sistema elevia, y según el tipo de tarea, crea, asigna y actualiza los siniestros en reale seguros",
      results: {
        manualExecution: "30 min",
        automatedExecution: "1 min",
        timeSaving: "97%"
      },
      name: "Gestión de tareas",
      tools: ["excel", "outlook", "reale-seguros"],
      platform: "rocketbot"
    },

    // Casos de Salud
    {
      id: 17,
      hide: true,
      industry: "Salud",
      categoria: "salud",
      challenge: "Capacitación manual de usuarios en el Programa PDD (Programa de Desarrollo Digital) para asociaciones de clínicas, proceso repetitivo y extenso.",
      solution: "Automatización del programa de capacitación PDD para asociaciones de clínicas, optimizando el proceso de formación de usuarios en herramientas digitales.",
      results: {
        manualExecution: "12 hr",
        automatedExecution: "2 hr",
        timeSaving: "83%",
      },
      name: "Programa PDD - Asociación de Clínicas",
      tools: ["excel", "powerpoint", "email", "web-scraping"],
      platform: "rocketbot",
    },

    // Casos de Seguros
    {
      id: 18,
      industry: "Seguros",
      categoria: "fianciero",
      challenge: "Procesamiento manual de siniestros pendientes en Ebroker, con validación y notificación manual a clientes según medio preferido.",
      solution: "Automatización completa del procesamiento y validación de siniestros pendientes en Ebroker, notificando automáticamente al cliente según su medio preferido con mensajes predefinidos.",
      results: {
        manualExecution: "6 hr",
        automatedExecution: "30 min",
        timeSaving: "92%",
      },
      name: "Notificación de Siniestros",
      tools: ["excel", "web-scraping", "email"],
      platform: "rocketbot",
    },

    // Casos de Servicios Profesionales
    {
      id: 19,
      industry: "Ingeniería Vial",
      categoria: "servicios-profesionales",
      challenge: "Reducir el costo de revisar videos de transito manteniendo la precisión en el conteo y clasificaciónde vehiculos",
      solution: "Se construyó un sistema de IA que clasifica los vehiculos en videos de transito, generando un reporte en excel con la información consolidada.",
      results: {
        manualExecution: "7 días",
        automatedExecution: "1 día",
        timeSaving: "86%",
      },
      name: "Traffic Analysis",
      tools: ["python", "javascript"],
      platform: "robotipy",
    },
    {
      id: 20,
      industry: "Software",
      categoria: "servicios-profesionales",
      challenge: "Gestionar la alta y baja de usuarios en las diferentes plataformas utilizadas para gestionar proyectos",
      solution: "Automatización de las plataformas de los usuarios como Google Drive, Jira, Gmail,Slack, a partir de formularios que indican altas o bajas de acceso.",
      results: {
        manualExecution: "30 minutos",
        automatedExecution: "30 segundos",
        timeSaving: "98%"
      },
      name: "Gestión de Permisos",
      tools: ["slack", "jira", "drive", "gmail", "github", "flokzu"],
      platform: "rocketbot"
    },
    {
      id: 21,
      industry: "Estudio Jurídico",
      categoria: "servicios-profesionales",
      challenge: "Gestionar solicitudes de conciliación y audiencias extrayendo datos de correos y 6 portales como RUES y RUNT",
      solution: "Automatización optimizada para la recolección de datos, agendamiento de citas en Google Calendar y generación de informes",
      results: {
        manualExecution: "7 hr",
        automatedExecution: "30 min",
        timeSaving: "93%"
      },
      name: "Gestión administrativa",
      tools: ["excel", "word", "chrome"],
      platform: "rocketbot"
    },
    {
      id: 22,
      industry: "Ingeniería y Construcción",
      categoria: "servicios-profesionales",
      challenge: "Descarga de Facturas, Boletas de honorarios y Factoring del sistema de impuestos internos",
      solution: "Automatización de la descarga de documentos desde el sistema de impuestos internos y su posterior carga en el sistema de gestión de documentos",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "5 min",
        timeSaving: "92%"
      },
      name: "Descarga de Documentos SII",
      tools: ["excel", "sii"],
      platform: "rocketbot"
    },
    {
      id: 23,
      industry: "Estudio Jurídico",
      categoria: "servicios-profesionales",
      challenge: "Gestionar trámites ante la Superfinanciera a diario desde el portal web y extraer datos de correos para generar múltiples documentos legales",
      solution: "Automatización de la lectura de correos y la generación de documentos (Poder y Contestación), consultando en la superfinanciera, cruzando datos en Excel.",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "5 min",
        timeSaving: "92%"
      },
      name: "Gestión administrativa Superfinanciera",
      tools: ["excel", "word", "chrome"],
      platform: "rocketbot"
    },
    {
      id: 24,
      industry: "Servicios Técnicos",
      categoria: "servicios-profesionales",
      challenge: "Búsqueda de imágenes deartículos en el sitio web de proveedores y actualización masiva de artículos en ecommerce",
      solution: "Automatización de búsqueda de imágenes de artículos con inteligencia artificial para identificar SKUs diferentes y actualización de las imagenes en el ecommerce",
      results: {
        manualExecution: "1 mes",
        automatedExecution: "2 días",
        timeSaving: "93%"
      },
      name: "Carga Masiva de Artículos",
      tools: ["excel", "chrome", "outlook"],
      platform: "rocketbot"
    },
    {
      id: 25,
      industry: "Servicios TI",
      categoria: "servicios-profesionales",
      challenge: "Consolidar manualmente múltiples reportes Excel, descargados diariamente desde correos de Outlook y el portal web Field Service",
      solution: "Automatización que filtra y descarga reportes diarios y unifica en una sola plantilla la información de los reportes",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "3 min",
        timeSaving: "95%"
      },
      name: "Mapeo de Tickets",
      tools: ["excel", "chrome", "outlook"],
      platform: "rocketbot"
    },
    {
      id: 26,
      industry: "Servicios TI",
      categoria: "servicios-profesionales",
      challenge: "Actualizar manualmente el estado de los tickets en la plataforma HELIX, extrayendo los datos desde correos pendientes en Outlook",
      solution: "Automatización que extrae el número de referencia de cada correo y accede a HELIX a diario para buscar y aplicar las actualizaciones al ticket correspondientes",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "3 min",
        timeSaving: "95%"
      },
      name: "Gestión de Tickets",
      tools: ["excel", "chrome", "outlook"],
      platform: "rocketbot"
    },

    // Casos de Servicios Técnicos
    {
      id: 27,
      industry: "Servicios Técnicos",
      categoria: "servicios-tecnicos",
      challenge: "Carga manual masiva de artículos de proveedores en el ecommerce de SANCA, proceso repetitivo y propenso a errores.",
      solution: "Automatización completa de la carga masiva de artículos de proveedores en el ecommerce de SANCA, eliminando el trabajo manual repetitivo.",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "1 hr",
        timeSaving: "88%",
      },
      name: "Carga Masiva de Artículos",
      tools: ["excel", "web-scraping", "ecommerce"],
      platform: "rocketbot",
    },

    // Casos de Industrias Tecnológicas
    {
      id: 28,
      hide: true,
      industry: "Industrias Tecnológicas",
      categoria: "industrias-tecnologicas",
      challenge: "Capacitación manual de usuarios en el Programa PDD (Programa de Desarrollo Digital) para industrias tecnológicas, proceso extenso y repetitivo.",
      solution: "Automatización del programa de capacitación PDD para industrias tecnológicas, optimizando el proceso de formación de usuarios en herramientas digitales y tecnologías emergentes.",
      results: {
        manualExecution: "16 hr",
        automatedExecution: "3 hr",
        timeSaving: "81%",
      },
      name: "Programa PDD - Industrias Tecnológicas",
      tools: ["excel", "powerpoint", "email", "web-scraping", "python"],
      platform: "rocketbot",
    },

    // Casos de Software
    {
      id: 29,
      industry: "Software",
      categoria: "software",
      challenge: "Gestión manual de permisos en plataformas como Google Drive, Jira y Slack, con altas y bajas de acceso basadas en formularios.",
      solution: "Automatización completa de la gestión de permisos en múltiples plataformas (Google Drive, Jira, Slack) a partir de formularios que indican altas o bajas de acceso.",
      results: {
        manualExecution: "4 hr",
        automatedExecution: "20 min",
        timeSaving: "92%",
      },
      name: "Gestión de Permisos Plataforma",
      tools: ["excel", "google-drive", "jira", "slack"],
      platform: "rocketbot",
    },

    // Casos de Estudio Jurídico
    {
      id: 30,
      industry: "Estudio Jurídico",
      categoria: "estudio-juridico",
      challenge: "Búsqueda manual de información de clientes deudores de bancos en diferentes webs, armado de documentos y generación de audiencias para negociación.",
      solution: "Automatización de la búsqueda de información de clientes deudores en diferentes webs, armado automático de documentos y generación de audiencias (vía calendar) para negociación con deudores.",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "1 hr",
        timeSaving: "88%",
      },
      name: "Generación de Audiencia",
      tools: ["excel", "web-scraping", "calendar", "pdf"],
      platform: "rocketbot",
    },

    // Casos de Transporte
    {
      id: 31,
      industry: "Transporte",
      categoria: "transporte",
      challenge: "Validación manual de expedientes pendientes de acuse en la Agencia Tributaria de España, proceso lento y propenso a errores.",
      solution: "Automatización que actualiza en Dynamics NAV el estado de los expedientes pendientes de acuse en la Agencia Tributaria de España.",
      results: {
        manualExecution: "6 hr",
        automatedExecution: "30 min",
        timeSaving: "92%",
      },
      name: "Expedientes Pendientes Acuse",
      tools: ["dynamics", "chrome", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 32,
      industry: "Transporte",
      categoria: "transporte",
      challenge: "Validación manual de expedientes pendientes de recepción de acuerdo en la Agencia Tributaria de España con actualización en Dynamics.",
      solution: "Automatización de la validación de expedientes pendientes de recepción de acuerdo en la Agencia Tributaria, integrando automáticamente con Dynamics.",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "25 min",
        timeSaving: "92%",
      },
      name: "Expedientes Pendientes Recepción",
      tools: ["dynamics", "chrome", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 33,
      industry: "Logística",
      categoria: "transporte",
      challenge: "Ingresar al sistema Kipintoch e ingresar en cada módulo para descargar sus reportes (Rentabilidad, Comercial, etc)",
      solution: "Automatización de la descarga de reportes del sistema Kipintoch, permitiendo parametrizar los filtros y exportarlos en Excel",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "10 min",
        timeSaving: "92%",
      },
      name: "Descarga de Estadisticas",
      tools: ["chrome", "outlook", "excel"],
      platform: "uipath",
    },
    {
      id: 34,
      industry: "Transporte",
      categoria: "transporte",
      challenge: "Envío manual de datos de expedientes de la AEAT (España) desde Dynamics NAV, incluyendo extracción, validación y firma digital.",
      solution: "Automatización completa del envío de datos de expedientes de la AEAT desde Dynamics NAV, incluyendo extracción, validación, firma digital y presentación.",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "45 min",
        timeSaving: "91%",
      },
      name: "Expediente Pendiente España y Portugal",
      tools: ["dynamics", "chrome", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 35,
      industry: "Transporte",
      categoria: "transporte",
      challenge: "Actualización manual de vehículos de Gasóleo Profesional, consultando la AEAT y extrayendo datos a Excel para importación.",
      solution: "Automatización de la actualización de vehículos de Gasóleo Profesional, consultando la AEAT, extrayendo datos a Excel e importando datos al sistema.",
      results: {
        manualExecution: "4 hr",
        automatedExecution: "20 min",
        timeSaving: "92%",
      },
      name: "Vehículos Declarados",
      tools: ["excel", "chrome", "dynamics"],
      platform: "rocketbot",
    },
    {
      id: 36,
      industry: "Transporte",
      categoria: "transporte",
      challenge: "Actualización manual de devoluciones de Gasóleo Profesional, consultando la AEAT por año y extrayendo datos a Excel.",
      solution: "Automatización de la actualización de devoluciones de Gasóleo Profesional, consultando la AEAT por año, extrayendo datos a Excel e importando automáticamente.",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "25 min",
        timeSaving: "92%",
      },
      name: "Estado Devoluciones Gasóleo Profesional",
      tools: ["dynamics", "chrome", "outlook"],
      platform: "rocketbot",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Portafolio de Casos de Éxito
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubre cómo hemos transformado procesos empresariales a través de la automatización inteligente en diferentes industrias. Más de 36 casos de éxito que demuestran el poder de la tecnología RPA.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-success mb-2">60+</div>
                <div className="text-gray-300">Casos de Éxito</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">15+</div>
                <div className="text-gray-300">Industrias</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">90%</div>
                <div className="text-gray-300">Ahorro Promedio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">100%</div>
                <div className="text-gray-300">Satisfacción</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Todos Nuestros Casos de Éxito
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {allSuccessCases.map((caseStudy) => (
                (!caseStudy.hide && (
                  <SuccessCaseCard key={caseStudy.id} caseStudy={caseStudy} showIndustryLink={true} />
                ))
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Explora por Industria
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Agricultura", url: "/casos-exito/agricola", color: "bg-green-600" },
                // { name: "Alimentos", url: "/casos-exito/alimentos", color: "bg-orange-600" },
                { name: "Automotriz", url: "/casos-exito/automotriz", color: "bg-blue-600" },
                { name: "Financiero", url: "/casos-exito/financiero", color: "bg-yellow-600" },
                // { name: "Salud", url: "/casos-exito/salud", color: "bg-emerald-600" },
                { name: "Servicios Profesionales", url: "/casos-exito/servicios-profesionales", color: "bg-purple-600" },
                { name: "Transporte y Logística", url: "/casos-exito/transporte", color: "bg-teal-600" },
              ].map((industry) => (
                <Link
                  key={industry.name}
                  href={industry.url}
                  className={`${industry.color} text-white px-4 py-3 rounded-lg text-center hover:opacity-80 transition-opacity text-sm font-medium`}
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre cómo podemos automatizar y optimizar los procesos de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-success text-white font-semibold rounded-lg hover:bg-success/90 transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-success text-success font-semibold rounded-lg hover:bg-success/10 transition-colors"
              >
                Calcular ROI
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}