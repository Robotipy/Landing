const ProjectsDifferentiator = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Construido por una consultora, para consultoras
        </h2>
        <div
          className="rounded-xl p-8 lg:p-12"
          style={{ backgroundColor: "#11222c" }}
        >
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Robotipy nace de nuestra propia necesidad. Somos una consultora de
            RPA con <strong className="text-white">+60 proyectos</strong> en{" "}
            <strong className="text-white">8 países</strong>. Construimos esta
            herramienta porque ninguna existente resolvía nuestros problemas
            reales.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            No es un software genérico adaptado. Es una herramienta nacida
            desde la trinchera de gestionar proyectos de automatización,
            desarrollo de software y consultoría tecnológica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDifferentiator;
