import Link from "next/link";

const ProjectsPricingPreview = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Planes simples, sin sorpresas
          </h2>
          <p className="mt-4 text-lg text-white/70">
            30 días gratis. Sin tarjeta de crédito. Los clientes (Guests) no
            cuentan como usuarios pagos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div
            className="rounded-xl p-8 text-center"
            style={{ backgroundColor: "#11222c" }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Freelancer</h3>
            <p className="text-gray-400 text-sm mb-4">
              Para consultores independientes
            </p>
            <ul className="text-gray-300 text-sm space-y-2 text-left mb-6">
              <li>&#10003; 1 usuario</li>
              <li>&#10003; Clientes ilimitados</li>
              <li>&#10003; Proyectos ilimitados</li>
              <li>&#10003; Portal de clientes</li>
            </ul>
          </div>
          <div
            className="rounded-xl p-8 text-center border border-accent/30"
            style={{ backgroundColor: "#11222c" }}
          >
            <h3 className="text-xl font-bold text-white mb-2">Studio</h3>
            <p className="text-gray-400 text-sm mb-4">
              Para equipos y consultoras
            </p>
            <ul className="text-gray-300 text-sm space-y-2 text-left mb-6">
              <li>&#10003; Usuarios ilimitados</li>
              <li>&#10003; Todo de Freelancer</li>
              <li>&#10003; Planificación de recursos</li>
              <li>&#10003; Integraciones</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects/pricing"
            className="text-accent hover:underline font-bold text-lg"
          >
            Ver planes y precios &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPricingPreview;
