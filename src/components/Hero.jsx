import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  // Número de WhatsApp (cámbialo por el del cliente, no olvides el código de país, ej: 52 para México)
  const whatsappNumber = "523312345678"; 
  const whatsappMessage = "Hola, me interesa cotizar una pieza de maquinado.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center mt-[-80px]">
      {/* Imagen de fondo (Temporal hasta que tengas las fotos del cliente) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565439390118-9fd02c7ff083?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Maquinado industrial CNC" 
          className="w-full h-full object-cover"
        />
        {/* Capa oscura para que resalte el texto */}
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Fabricación de piezas y refacciones <br className="hidden md:block" />
          <span className="text-blue-500">sobre medida</span> para la industria
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-light">
          Soluciones en torneado, fresado y apoyo CNC para mantenimiento, automatización y manufactura.
        </p>
        
        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          
          {/* Botón principal (Lleva al formulario) */}
          <a 
            href="#contacto" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
          >
            Cotizar por correo
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Botón secundario (Abre WhatsApp) */}
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-3.5 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp directo
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;