const ChatbotFeatures = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Desbloquea el Poder de la Conversación
          </h2>
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Nuestros asistentes conversacionales con IA se conectan 
            perfectamente a tus fuentes de datos, proporcionando una interfaz de lenguaje natural tanto para tus equipos internos como para tus 
            clientes externos. Esto significa información más rápida y precisa para tus empleados y soporte instantáneo 24/7 para tus clientes, 
            transformando cómo se comunica tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Para tus Equipos
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Habilita consultas en lenguaje natural de tu ERP, democratiza el acceso a datos y aumenta la productividad del equipo.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Para tus Clientes
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Proporciona atención 24/7, entrega respuestas instantáneas a preguntas comunes y eleva la experiencia del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotFeatures;
