// Preguntas frecuentes de las páginas de servicio y del centro de respuestas.
// Cada array alimenta el HTML visible y el JSON-LD FAQPage, así que el texto
// del schema siempre es idéntico al que ve la persona.
// Reglas de redacción: docs/plan-seo-llm-2026.md, sección 9.3.

export const faqHubUpdatedAt = "2026-10-01";

export const rpaFaqs = [
  {
    q: "¿Qué es RPA y para qué sirve en una empresa?",
    a: "RPA (automatización robótica de procesos) es software que opera las mismas pantallas y sistemas que usa una persona para ejecutar tareas repetitivas con reglas claras. Sirve para cargar facturas en el ERP, conciliar cartolas bancarias, descargar documentos de portales y armar reportes, sin modificar los sistemas que ya tienes.",
  },
  {
    q: "¿Cuánto cuesta un proyecto de RPA con Robotipy?",
    a: "Un proyecto de RPA con Robotipy cuesta en promedio USD 6.000 e incluye un mes de trabajo y la marcha blanca. Si tu empresa no tiene licencia de Rocketbot, se suma una licencia de USD 2.500. El soporte mensual es opcional y parte en USD 300, y el diagnóstico inicial no se cobra.",
  },
  {
    q: "¿Cuánto demora implementar un robot RPA?",
    a: "Un proceso acotado y bien documentado suele estar productivo en semanas, no en meses. El presupuesto promedio de Robotipy considera un mes de trabajo más la marcha blanca. Lo que más alarga el plazo es el acceso a los sistemas, la cantidad de excepciones y el tiempo que toma validar las reglas de negocio.",
  },
  {
    q: "¿Qué sistemas puede automatizar Robotipy con RPA?",
    a: "Robotipy ha automatizado procesos sobre SAP, Finnegans, AS400, Defontana y portales y cartolas de bancos de Chile y de Argentina, además de Excel, correo y aplicaciones web. Si un sistema tiene pantalla, un robot puede operarlo; si además tiene API, combinamos ambos caminos en el mismo robot.",
  },
  {
    q: "¿Con qué plataformas de RPA trabaja Robotipy?",
    a: "Robotipy es Platinum Partner de Rocketbot y también trabaja con UiPath, Power Automate, n8n y agentes de IA sobre Claude. Elegimos la herramienta según el proceso, los sistemas que toca y las licencias que tu empresa ya tiene.",
  },
  {
    q: "¿Qué procesos conviene automatizar con RPA?",
    a: "Conviene automatizar procesos repetitivos, con reglas claras, que se ejecutan muchas veces al mes y usan datos digitales: carga de facturas, conciliación bancaria, descarga de cartolas, emisión de reportes o actualización de maestros en el ERP. Los procesos que cambian cada mes o dependen de criterio humano en cada caso conviene ordenarlos antes.",
  },
  {
    q: "¿Qué pasa con un robot RPA si cambia una pantalla del sistema?",
    a: "El robot puede fallar en ese paso hasta que se ajuste a la pantalla nueva. Por eso cada robot registra sus ejecuciones y avisa cuando algo falla, y el soporte mensual opcional cubre esos ajustes. Con Robotipy Monitor puedes ver cada ejecución y recibir alertas.",
  },
  {
    q: "¿RPA reemplaza a las personas del equipo?",
    a: "No necesariamente. En los proyectos de Robotipy el robot toma la parte mecánica del proceso (digitar, descargar, cruzar datos) y el equipo se queda con la revisión de excepciones, el análisis y la atención a clientes. La decisión sobre la dotación es de cada empresa.",
  },
];

export const automationFaqs = [
  {
    q: "¿Qué procesos de una empresa automatiza Robotipy?",
    a: "Robotipy automatiza sobre todo procesos de finanzas y operaciones con reglas claras y alto volumen. Algunos publicados como casos: conciliación de varios bancos con el ERP, carga diaria de cartolas y gestión de factoring, órdenes de compra en SAP a partir de tickets, pedidos entre marketplaces, ERP y couriers, y reportes de costos mineros con un agente de IA.",
  },
  {
    q: "¿Qué diferencia hay entre RPA, un agente de IA y una integración por API?",
    a: "RPA opera las pantallas de un sistema como una persona y sigue reglas fijas. Una integración por API conecta sistemas de forma directa, sin pantallas, cuando el sistema la ofrece. Un agente de IA interpreta lenguaje natural o documentos y decide pasos dentro de límites definidos. En muchos proyectos de Robotipy se combinan los tres.",
  },
  {
    q: "¿Cómo saber si conviene automatizar un proceso?",
    a: "Conviene automatizar un proceso cuando se repite muchas veces al mes, sigue reglas estables y consume horas de personas que podrían hacer otro trabajo. Puedes estimar el retorno con la calculadora de ROI de Robotipy, y en el diagnóstico, que no se cobra, revisamos el caso contigo.",
  },
  {
    q: "¿Cuánto cuesta automatizar un proceso con Robotipy?",
    a: "El desarrollo de un proyecto de RPA cuesta en promedio USD 6.000, con un mes de trabajo y la marcha blanca incluidos. La licencia de Rocketbot (USD 2.500) solo se suma si tu empresa no tiene una, y el soporte mensual es opcional desde USD 300.",
  },
  {
    q: "¿Se necesita un equipo de TI interno para mantener los robots?",
    a: "No es obligatorio. Alcanza con que alguien del equipo revise los reportes de ejecución y avise si algo falla. Si prefieres no encargarte, el soporte mensual de Robotipy cubre el monitoreo y los ajustes cuando cambia una pantalla o un archivo de entrada.",
  },
  {
    q: "¿Cómo protege Robotipy los datos que procesa un robot?",
    a: "Cada robot trabaja con un usuario propio y solo con los permisos que el proceso necesita, y puede ejecutarse en servidores de tu empresa si tus políticas lo exigen. Además revisamos qué datos personales quedan en registros y capturas, un punto que pide la Ley 21.719 de protección de datos.",
  },
];

export const chatbotFaqs = [
  {
    q: "¿Qué tan seguros están los datos en un chatbot de Robotipy?",
    a: "Las conversaciones se transmiten cifradas y el chatbot solo consulta las fuentes de información que tu empresa autoriza. Los accesos a sistemas internos se configuran con permisos acotados a lo que el chatbot necesita responder.",
  },
  {
    q: "¿Los datos de mi empresa se usan para entrenar la IA del chatbot?",
    a: "No. Los modelos que usamos están alojados en Azure, y la información de tu empresa se usa para que el chatbot responda, no para entrenar esos modelos.",
  },
  {
    q: "¿Qué fuentes de información puede consultar un chatbot con IA?",
    a: "Un chatbot con IA de Robotipy puede consultar documentos PDF, bases de datos, tickets de soporte y sitios web, entre otras fuentes, además de sistemas como un ERP o un CRM cuando se integran.",
  },
  {
    q: "¿Qué pasa si el chatbot no conoce la respuesta?",
    a: "El chatbot deriva la conversación a una persona de tu equipo cuando la consulta es compleja o no tiene información suficiente para responder, para que el cliente siempre reciba ayuda.",
  },
  {
    q: "¿Con qué sistemas se integra un chatbot de Robotipy?",
    a: "Con ERP como SAP, Oracle y Microsoft Dynamics, con plataformas CRM y con plataformas de comercio electrónico, para que el chatbot responda con datos reales de tu empresa en vez de respuestas fijas.",
  },
  {
    q: "¿Cuánto demora implementar un chatbot con IA?",
    a: "Típicamente de 2 a 4 semanas desde el descubrimiento inicial hasta el lanzamiento. El plazo depende sobre todo de cuántas fuentes de información y cuántos sistemas hay que integrar.",
  },
  {
    q: "¿Se pueden personalizar las respuestas de un chatbot con IA?",
    a: "Sí. El chatbot se configura con los datos y la terminología de tu empresa para que responda con precisión y con el tono de tu marca.",
  },
];

export const agroFaqs = [
  {
    q: "¿Qué procesos de una empresa agrícola o agroindustrial se pueden automatizar?",
    a: "Los procesos administrativos y financieros con reglas claras: conciliación bancaria con el ERP, carga diaria de cartolas, gestión de factoring, revisión de facturas y reportes de mercado. Robotipy tiene casos publicados en un holding agroindustrial en Chile, una viña exportadora, un grupo agropecuario en Argentina y una consultora de agronegocios.",
  },
  {
    q: "¿Qué automatizó Robotipy en un grupo agropecuario de Argentina?",
    a: "Robotipy automatizó la conciliación de varios bancos con el ERP Finnegans en un grupo agropecuario en Argentina. El robot ejecuta en minutos una conciliación que antes tomaba horas de trabajo manual del equipo de finanzas.",
  },
  {
    q: "¿Se pueden automatizar las cartolas y el factoring de una viña exportadora?",
    a: "Sí. Robotipy automatizó la carga diaria de cartolas bancarias y la gestión de factoring en una empresa vitivinícola con operaciones de exportación, y redujo a minutos un trabajo que tomaba horas.",
  },
  {
    q: "¿Se puede automatizar el monitoreo de precios de commodities y datos de mercado?",
    a: "Sí. Para una consultora de agronegocios en Argentina, Robotipy automatizó el monitoreo diario de precios de commodities, tasas bancarias y datos macroeconómicos desde más de 10 fuentes públicas.",
  },
  {
    q: "¿La automatización sirve en temporada alta de cosecha y exportación?",
    a: "Sí, y es cuando más se nota. Un robot procesa el mismo volumen de documentos y movimientos bancarios sin horas extra ni contrataciones temporales, y deja al equipo las excepciones que requieren criterio.",
  },
  {
    q: "¿Qué ERP agrícolas puede operar un robot de Robotipy?",
    a: "Robotipy ha automatizado procesos sobre SAP, Finnegans y Defontana, entre otros. Si el ERP tiene pantalla, un robot puede operarlo; si tiene API, se combinan ambos caminos.",
  },
];

export const bankingFaqs = [
  {
    q: "¿Qué procesos financieros y bancarios automatiza Robotipy?",
    a: "Conciliación bancaria con el ERP, descarga y carga de cartolas, gestión de factoring, revisión de facturas, registro de pagos y reportes financieros. Robotipy ha automatizado procesos sobre portales y cartolas de bancos de Chile y de Argentina.",
  },
  {
    q: "¿Se puede automatizar la conciliación bancaria con varios bancos a la vez?",
    a: "Sí. El robot obtiene los movimientos de cada banco, los normaliza, los cruza con el ERP por monto, fecha y referencia, y deja para revisión humana solo lo que no calza. Robotipy lo hizo con varios bancos y el ERP Finnegans en un grupo agropecuario en Argentina.",
  },
  {
    q: "¿Cómo se maneja el token o la clave dinámica del banco en un robot?",
    a: "Se resuelve con el banco y con TI, sin saltarse la seguridad: un usuario dedicado al robot, con permisos de solo consulta cuando basta, y el mecanismo de autenticación que el banco habilite para ese uso. Cuando el banco ofrece archivos automáticos o servicios de integración, se prefieren antes que el portal.",
  },
  {
    q: "¿Se pueden automatizar procesos en sistemas AS400 o mainframe?",
    a: "Sí. Robotipy ha automatizado procesos sobre AS400 y tiene un proyecto que se conecta por TN3270 a un mainframe. Un robot puede operar las pantallas de terminal o leer datos directamente de la base cuando hay acceso.",
  },
  {
    q: "¿Qué exige la Ley 21.719 a los robots que procesan datos de clientes?",
    a: "La Ley 21.719 de protección de datos personales rige desde el 1 de diciembre de 2026 y exige justificar, limitar y proteger cada tratamiento de datos personales, incluido el que hace un robot o un agente de IA. En la práctica obliga a saber qué datos toca cada robot y qué guardan sus registros.",
  },
  {
    q: "¿Un robot puede trabajar en servidores propios del banco o de la financiera?",
    a: "Sí. Los robots pueden ejecutarse en la infraestructura de tu empresa (on-premise) cuando las políticas de seguridad lo exigen, sin exponer datos a la nube.",
  },
];

export const casosFaqs = [
  {
    q: "¿Qué resultados ha logrado Robotipy con sus clientes?",
    a: "Robotipy ha entregado más de 70 proyectos desde 2023. Entre los casos publicados: una conciliación multibanco que pasó de horas a minutos, cartolas y factoring diarios automatizados en una viña, órdenes de compra en SAP sin intervención manual en una siderúrgica y reportes de costos mineros con un agente de IA.",
  },
  {
    q: "¿En qué industrias tiene casos de automatización Robotipy?",
    a: "Minería, siderurgia, agroindustria, vitivinicultura, agronegocios, logística y retail, servicios financieros, seguros, salud, servicios profesionales y estudios jurídicos, entre otras.",
  },
  {
    q: "¿Robotipy combina RPA con inteligencia artificial en sus proyectos?",
    a: "Sí. En una minera de cobre en Chile, Robotipy automatizó los reportes de costos con RPA y sumó un agente de IA que responde preguntas en lenguaje natural sobre esos datos, lo que eliminó la dependencia de una sola persona.",
  },
  {
    q: "¿Robotipy tiene casos en Chile y en Argentina?",
    a: "Sí. Tiene casos publicados en Chile, como el holding agroindustrial y la minera de cobre, y en Argentina, como el grupo agropecuario con conciliación sobre Finnegans y la consultora de agronegocios.",
  },
];

// Centro de respuestas (/preguntas-frecuentes). Cada pregunta puede llevar un
// enlace a la página con la respuesta completa; el enlace no forma parte del
// texto de la respuesta ni del schema.
export const faqHub = [
  {
    id: "sobre-robotipy",
    title: "Sobre Robotipy",
    faqs: [
      {
        q: "¿Qué es Robotipy y qué servicios ofrece?",
        a: "Robotipy es una empresa de automatización de procesos fundada en 2023, con equipo en Chile y en Argentina. Diseña, construye y mantiene robots RPA, agentes de IA, chatbots y software a medida para áreas de finanzas y operaciones, y capacita a equipos internos. Ha entregado más de 70 proyectos y es Platinum Partner de Rocketbot.",
        link: { href: "/es/about", label: "Conoce al equipo" },
      },
      {
        q: "¿Dónde opera Robotipy?",
        a: "Robotipy tiene equipo en Chile y en Argentina, donde Ivan Cabrera lidera Robotipy Argentina. Además de esos dos países, ha implementado proyectos en Colombia y en España.",
      },
      {
        q: "¿Quién fundó Robotipy?",
        a: "Robotipy fue fundada en 2023 por Danilo Toro, desarrollador con más de 7 años de experiencia en automatización de procesos y desarrollo de software. Ivan Cabrera es CEO de Robotipy Argentina.",
        link: { href: "/es/about", label: "Equipo de Robotipy" },
      },
      {
        q: "¿Robotipy es partner oficial de Rocketbot?",
        a: "Sí. Robotipy es Platinum Partner de Rocketbot, el nivel más alto del programa de partners del fabricante, que exige un equipo de ingenieros y consultores certificados. Eso le permite implementar, licenciar y dar soporte de Rocketbot en Chile y Argentina.",
        link: { href: "/es/rocketbot", label: "Robotipy y Rocketbot" },
      },
      {
        q: "¿Cuántos proyectos de automatización ha entregado Robotipy?",
        a: "Más de 70 proyectos desde 2023, en industrias como minería, siderurgia, agroindustria, vitivinicultura, servicios financieros, logística y retail. Varios están publicados como casos de éxito, con el proceso y los resultados.",
        link: { href: "/blog/category/casos-de-exito", label: "Casos de éxito" },
      },
    ],
  },
  {
    id: "precios",
    title: "Precios y contratación",
    faqs: [
      {
        q: "¿Cuánto cuesta automatizar un proceso con RPA en Chile?",
        a: "En Robotipy, un proyecto de RPA cuesta en promedio USD 6.000 e incluye un mes de trabajo y la marcha blanca. El precio final depende de cuántos sistemas toca el robot, cuántas excepciones tiene el proceso y qué tan documentado está.",
        link: { href: "/blog/cuanto-cuesta-automatizar-un-proceso", label: "Cómo se arma el precio" },
      },
      {
        q: "¿Hay que pagar una licencia de RPA además del desarrollo?",
        a: "Solo si tu empresa no tiene licencia propia. En ese caso se suma una licencia de Rocketbot de USD 2.500. Si tu empresa ya tiene licencia, ese ítem no aparece en la cotización.",
      },
      {
        q: "¿Cuánto cuesta el soporte de un robot RPA después de la entrega?",
        a: "El soporte mensual es opcional y parte en USD 300. Cubre el monitoreo de las ejecuciones y los ajustes cuando cambia una pantalla o un archivo de entrada. Hay clientes que operan el robot con su propio equipo y no pagan nada mensual.",
        link: { href: "/blog/mantenimiento-de-robots-rpa", label: "Mantenimiento de robots" },
      },
      {
        q: "¿El diagnóstico inicial de Robotipy tiene costo?",
        a: "No. Antes de cotizar revisamos el proceso contigo, estimamos el ahorro y te decimos si conviene automatizarlo. Con la frecuencia del proceso, la cantidad de personas que participan y los sistemas que toca, normalmente alcanza para dar un rango de precio en la primera reunión.",
      },
      {
        q: "¿Cuánto cuesta un desarrollo de software a medida con Robotipy?",
        a: "Los proyectos de desarrollo de software a medida de Robotipy tienen un rango de inversión de USD 5.500 a 11.000, según el alcance. Conviene cuando el proceso necesita una aplicación propia en vez de un robot que opere sistemas existentes.",
        link: { href: "/es/desarrollo-software", label: "Desarrollo a medida" },
      },
      {
        q: "¿Qué pasa si un proyecto de automatización cuesta más de lo cotizado?",
        a: "Si el alcance no cambió, el precio cerrado se respeta. Si aparece algo que no estaba en el alcance original, como un sistema adicional o una excepción no contemplada, se conversa como cambio de alcance antes de seguir y no se factura por sorpresa al final.",
      },
    ],
  },
  {
    id: "rpa-e-ia",
    title: "RPA, agentes de IA y plataformas",
    faqs: [
      {
        q: "¿Qué es RPA?",
        a: "RPA (automatización robótica de procesos) es software que opera las mismas pantallas y sistemas que usa una persona para ejecutar tareas repetitivas con reglas claras. Un robot puede entrar al ERP, descargar cartolas, cruzar datos en Excel y registrar resultados sin modificar los sistemas existentes.",
        link: { href: "/blog/que-es-rpa", label: "Qué es RPA" },
      },
      {
        q: "¿Qué diferencia hay entre RPA y un agente de IA?",
        a: "Un robot RPA sigue reglas fijas y hace siempre lo mismo; un agente de IA interpreta lenguaje natural o documentos y decide pasos dentro de límites definidos. RPA conviene para procesos estables y de alto volumen, y un agente cuando la entrada varía. En los reportes de costos de una minera, Robotipy combinó ambos.",
        link: { href: "/blog/rpa-vs-ia-agentica", label: "RPA vs IA agéntica" },
      },
      {
        q: "¿Con qué plataformas de automatización trabaja Robotipy?",
        a: "Robotipy trabaja con Rocketbot, UiPath, Power Automate, n8n, agentes de IA sobre Claude (Anthropic) y Python. Elegimos la herramienta según el proceso, los sistemas que toca y las licencias que tu empresa ya tiene.",
        link: { href: "/blog/rocketbot-uipath-power-automate-o-n8n", label: "Comparativa de plataformas" },
      },
      {
        q: "¿Cuándo conviene una integración por API en lugar de RPA?",
        a: "Cuando el sistema ofrece una API estable y el proceso tiene volumen suficiente para pagar ese desarrollo. Una API es más rápida y no depende de que cambie una pantalla; RPA se construye más rápido y es el único camino cuando el sistema no tiene otra puerta. Muchas veces el mismo robot combina ambos.",
        link: { href: "/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros", label: "RPA y ERP" },
      },
      {
        q: "¿RPA sirve para pymes?",
        a: "Sí. Lo que define si conviene es el proceso, no el tamaño de la empresa: cuánto se repite, cuánta gente lo hace a mano y si el sistema que toca es estable. Robotipy ha automatizado procesos en empresas de doce personas con mejor retorno que en algunas corporaciones.",
        link: { href: "/blog/rpa-para-pymes-conviene-o-es-solo-para-grandes", label: "RPA para pymes" },
      },
      {
        q: "¿Qué procesos no conviene automatizar con RPA?",
        a: "Los que cambian cada pocas semanas, dependen de criterio humano en cada caso, se ejecutan muy pocas veces al mes o están por migrar a un sistema nuevo. En esos casos conviene ordenar el proceso primero, esperar al sistema nuevo o evaluar otra salida, como una API o un agente de IA.",
        link: { href: "/blog/errores-comunes-al-implementar-rpa", label: "Errores comunes" },
      },
    ],
  },
  {
    id: "sistemas-y-procesos",
    title: "Sistemas y procesos que se pueden automatizar",
    faqs: [
      {
        q: "¿Qué sistemas ha automatizado Robotipy?",
        a: "SAP, Finnegans, AS400, Defontana y portales y cartolas de bancos de Chile y de Argentina, además de Excel, correo, marketplaces y aplicaciones web. Si un sistema tiene pantalla, un robot puede operarlo; si además tiene API o una base de datos accesible, se combinan los caminos.",
      },
      {
        q: "¿Se puede automatizar SAP con RPA?",
        a: "Sí. Un robot puede operar SAP por la interfaz gráfica, llamar funciones como BAPI o RFC, o preparar cargas masivas por archivo, y muchas veces combina los tres en el mismo flujo. Robotipy automatizó, por ejemplo, el ciclo de órdenes de compra de una siderúrgica, desde la lectura de tickets hasta la creación de pedidos en SAP.",
        link: { href: "/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa", label: "Procesos de SAP" },
      },
      {
        q: "¿Se puede automatizar un sistema AS400?",
        a: "Sí. Un robot puede trabajar con las pantallas 5250 de IBM i a través de un emulador o conectándose por el protocolo de la terminal, y leer datos de la base DB2 cuando hay acceso. Lo habitual es leer por base de datos y escribir por pantalla, para no saltarse la lógica de negocio del sistema.",
        link: { href: "/blog/como-automatizar-as400-con-rpa", label: "Automatizar AS400" },
      },
      {
        q: "¿Se puede automatizar la conciliación bancaria?",
        a: "Sí. Un robot obtiene las cartolas de cada banco, normaliza los formatos, las cruza con el ERP por monto, fecha y referencia, y deja para revisión humana solo las partidas que no calzan. Robotipy lo hizo para un grupo agropecuario en Argentina con varios bancos y Finnegans, donde el proceso pasó de horas a minutos.",
        link: { href: "/blog/como-automatizar-la-conciliacion-bancaria", label: "Conciliación bancaria" },
      },
      {
        q: "¿Se puede automatizar Defontana?",
        a: "Sí. Robotipy ha automatizado procesos sobre Defontana. El camino conveniente depende del proceso y del volumen: RPA sobre la interfaz web, integraciones por API cuando están disponibles, o una combinación de ambos.",
        link: { href: "/blog/como-automatizar-defontana", label: "Automatizar Defontana" },
      },
      {
        q: "¿Qué procesos de finanzas conviene automatizar primero?",
        a: "Los que más horas consumen con reglas claras: carga de facturas de proveedores, conciliación bancaria, descarga de cartolas, reportes en Excel y registro de documentos en el ERP. Conviene partir por uno acotado y bien documentado, medir el resultado y después escalar.",
        link: { href: "/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas", label: "Cuentas por pagar" },
      },
    ],
  },
  {
    id: "implementacion",
    title: "Implementación y soporte",
    faqs: [
      {
        q: "¿Cuánto demora implementar un robot RPA con Robotipy?",
        a: "Un proceso acotado y bien documentado suele estar productivo en semanas, no en meses. El presupuesto promedio de Robotipy considera un mes de trabajo más la marcha blanca. Lo que más alarga los plazos es el acceso a los sistemas y la definición de reglas y excepciones.",
      },
      {
        q: "¿Qué tiene que aportar mi empresa para empezar un proyecto de automatización?",
        a: "Una persona que conozca bien el proceso, acceso a los sistemas con un usuario dedicado para el robot y ejemplos reales de casos normales y de excepciones. Con eso documentamos el proceso y cerramos alcance y precio por escrito.",
        link: { href: "/blog/como-documentar-un-proceso-antes-de-automatizarlo", label: "Documentar un proceso" },
      },
      {
        q: "¿Quién mantiene un robot RPA después de la entrega?",
        a: "Puede ser tu equipo o Robotipy. Para operarlo alcanza con alguien que revise los reportes de ejecución; si prefieres no encargarte, el soporte mensual de Robotipy parte en USD 300 e incluye monitoreo y ajustes.",
      },
      {
        q: "¿Cómo se monitorea un robot RPA en producción?",
        a: "Con registros de cada ejecución, alertas cuando algo falla y un tablero que muestra qué robot corrió, cuánto demoró y en qué paso se detuvo. Robotipy Monitor hace ese seguimiento para robots en producción.",
        link: { href: "/blog/como-monitorear-robots-rpa-en-produccion", label: "Monitoreo de robots" },
      },
      {
        q: "¿Se necesita saber programar para trabajar con robots RPA?",
        a: "No. El desarrollo lo hace Robotipy y tu equipo puede aprender a operar y monitorear los robots con una capacitación básica. Si quieres que tu equipo construya sus propios robots, Robotipy ofrece capacitaciones en RPA e IA.",
        link: { href: "/es/capacitaciones", label: "Capacitaciones" },
      },
    ],
  },
  {
    id: "seguridad-y-datos",
    title: "Seguridad y datos",
    faqs: [
      {
        q: "¿Un robot RPA tiene acceso a información confidencial de mi empresa?",
        a: "El robot accede solo a los sistemas y datos para los que le das permiso, con un usuario propio y un rol acotado a lo que el proceso necesita. Si tus políticas lo exigen, puede ejecutarse en servidores de tu empresa sin exponer datos a la nube.",
      },
      {
        q: "¿Qué cambia la Ley 21.719 para los robots y agentes de IA en Chile?",
        a: "La Ley 21.719 de protección de datos personales rige desde el 1 de diciembre de 2026 y exige justificar, limitar y proteger cada tratamiento de datos personales, incluido el que hace un robot o un agente de IA. En la práctica obliga a saber qué datos toca cada robot, qué guardan sus registros y capturas, y qué condiciones tienen los proveedores de IA.",
        link: { href: "/blog/ley-21719-proteccion-de-datos-robots-y-agentes-ia", label: "Ley 21.719 y robots" },
      },
      {
        q: "¿Los agentes de IA de Robotipy usan los datos de mi empresa para entrenar modelos?",
        a: "No. Configuramos los agentes y chatbots con servicios de IA empresariales, como Claude por API o modelos alojados en Azure, cuyas condiciones comerciales no usan los datos de los clientes para entrenar sus modelos.",
      },
    ],
  },
];
