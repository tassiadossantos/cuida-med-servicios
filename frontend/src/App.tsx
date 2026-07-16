import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  UserRound, 
  ShieldCheck, 
  FileText, 
  Clock, 
  Award, 
  CheckCircle2,
  PhoneCall,
  ClipboardList,
  CalendarCheck,
  Star,
  Menu,
  X
} from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BASE = import.meta.env.BASE_URL;

const testimonials = [
  {
    name: "María Fernanda López",
    relation: "Hija de paciente",
    text: "Contratar a CuidaMed fue la mejor decisión. El trato de la enfermera hacia mi padre ha sido excepcional, muy profesional pero sobre todo humano. Nos da mucha tranquilidad saber que está en buenas manos cuando nosotros trabajamos.",
    photo: `${BASE}testimonial-1.png`
  },
  {
    name: "Roberto Garza",
    relation: "Esposo de paciente",
    text: "Después de la cirugía de mi esposa, necesitábamos apoyo en casa. El equipo de fisioterapia llegó puntual, siempre con protocolos de higiene muy estrictos. La recuperación ha sido más rápida de lo esperado gracias a su seguimiento clínico.",
    photo: `${BASE}testimonial-2.png`
  },
  {
    name: "Elena Gutiérrez",
    relation: "Paciente",
    text: "Como adulta mayor, valoro mucho mi independencia. Mi cuidadora me asiste exactamente en lo que necesito, respetando mi espacio. Es un servicio muy serio, la agencia siempre está pendiente y las valoraciones me hacen sentir segura.",
    photo: `${BASE}testimonial-3.png`
  },
  {
    name: "Claudia Méndez",
    relation: "Hija de paciente",
    text: "Desde el primer contacto, el equipo de CuidaMed nos transmitió seguridad. La valoración inicial fue muy completa y el plan de cuidados que diseñaron para mi mamá superó nuestras expectativas. Es una agencia que realmente cumple lo que promete.",
    photo: `${BASE}testimonial-4.png`
  },
  {
    name: "Andrés Torres",
    relation: "Hijo de paciente",
    text: "Me preocupaba mucho dejar a mi padre con extraños, pero desde el primer día el enfermero se ganó su confianza y la nuestra. La comunicación con la agencia es excelente, siempre nos mantienen informados sobre su evolución.",
    photo: `${BASE}testimonial-5.png`
  },
  {
    name: "Ernesto Villanueva",
    relation: "Paciente",
    text: "Llevo varios meses recibiendo fisioterapia en casa y la diferencia en mi movilidad es notable. El fisioterapeuta trabaja con mucha paciencia y conocimiento. Gracias a CuidaMed puedo seguir viviendo en mi hogar con dignidad.",
    photo: `${BASE}testimonial-6.png`
  },
  {
    name: "Carmen Reyes",
    relation: "Paciente",
    text: "Mi cuidadora es como parte de la familia. Siempre puntual, amable y muy profesional. Los médicos de mi consulta han notado lo bien que llevo mis medicamentos y mis citas. Recomiendo CuidaMed con el corazón.",
    photo: `${BASE}testimonial-7.png`
  }
];

function TestimonialsCarousel() {
  const [paused, setPaused] = useState(false);
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonios" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Lo que dicen las familias</h2>
          <p className="text-lg text-foreground/70">
            La confianza de nuestros pacientes es nuestro mayor respaldo.
          </p>
        </motion.div>
      </div>

      {/* Fita contínua — sem padding lateral para ir de borda a borda */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
        }}
      >
        <div
          className="flex gap-6"
          style={{
            width: "max-content",
            animation: "ticker 40s linear infinite",
            animationPlayState: paused ? "paused" : "running"
          }}
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              style={{ minWidth: "280px", width: "360px", flexShrink: 0 }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Card className="h-full bg-white border-none shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-5 text-amber-400">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="fill-current w-4 h-4" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-6 grow leading-relaxed text-sm">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover object-top border-2 border-secondary/20 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                      <p className="text-xs text-foreground/60">{t.relation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Por qué elegirnos", href: "#por-que-elegirnos" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary selection:text-white">
      {/* 1. Barra de navegación */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-secondary transition-colors">
              <HeartPulse className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl md:text-2xl text-primary tracking-tight">
              Cuida<span className="text-secondary">Med</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer">
                Agendar Valoración
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-base font-medium text-foreground block py-2 border-b border-border/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mt-2">
              <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer">
                Agendar Valoración
              </a>
            </Button>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* 2. Hero */}
        <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden bg-white">
          {/* Doctor image pinned to right side */}
          <div className="absolute right-0 top-0 bottom-0 w-[72%] z-0 hidden md:block">
            <img
              src={`${BASE}hero.png`}
              alt="Profesional médica sonriendo"
              className="w-full h-full object-cover object-center-top"
              style={{ objectPosition: "40% top" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm">
                  Atención certificada en todo México
                </motion.div>
                <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                  Excelencia en <span className="text-secondary">Cuidados Domiciliarios</span> y Seguimiento Clínico
                </motion.h1>
                <motion.p variants={fadeIn} className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
                  Brindamos seguridad y confianza a su familia con atención profesional en casa. Un equipo multidisciplinario humano, certificado y regido por las más altas normas de la Secretaría de Salud.
                </motion.p>
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/20">
                    <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer">
                      Agendar Valoración Clínica
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/20 text-primary hover:bg-primary/5">
                    <a href="#servicios">
                      Conocer Servicios
                    </a>
                  </Button>
                </motion.div>
                
                <motion.div variants={fadeIn} className="mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-foreground/70 font-medium">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="text-secondary h-5 w-5 shrink-0" />
                    <span>Cumplimiento COFEPRIS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-secondary h-5 w-5 shrink-0" />
                    <span>Personal Certificado</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Servicios */}
        <section id="servicios" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
              <p className="text-lg text-foreground/70">
                Atención clínica especializada en la comodidad de su hogar, diseñada para la recuperación y bienestar de sus seres queridos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <UserRound className="h-8 w-8 text-secondary" />,
                  title: "Cuidador en Domicilio",
                  description: "Asistencia personalizada en el hogar, respetando la NOM-019-SSA3-2013 para el cuidado integral del paciente."
                },
                {
                  icon: <Activity className="h-8 w-8 text-secondary" />,
                  title: "Acompañamiento Hospitalario",
                  description: "Presencia profesional y cálida durante internamientos, estudios médicos y procedimientos."
                },
                {
                  icon: <HeartPulse className="h-8 w-8 text-secondary" />,
                  title: "Fisioterapia Domiciliaria",
                  description: "Rehabilitación física especializada en el domicilio del paciente para optimizar su recuperación."
                },
                {
                  icon: <Stethoscope className="h-8 w-8 text-secondary" />,
                  title: "Enfermería Domiciliaria",
                  description: "Aplicación de medicamentos, curaciones profesionales y monitoreo estricto de signos vitales."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                  }}
                >
                  <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                    <CardContent className="p-8">
                      <div className="mb-6 bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Por qué elegirnos */}
        <section id="por-que-elegirnos" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="lg:w-1/2"
              >
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden bg-card">
                    <img 
                      src={`${BASE}home-care.png`}
                      alt="Cuidadora atendiendo a paciente adulto mayor en su domicilio" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-primary-foreground/80 font-medium">Personal<br/>Certificado</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="lg:w-1/2"
              >
                <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Confianza que se siente, <br/><span className="text-secondary">profesionalismo que se nota</span>
                </motion.h2>
                <motion.p variants={fadeIn} className="text-lg text-foreground/70 mb-10">
                  Entendemos la importancia de dejar la salud de un ser querido en manos de terceros. Por eso, operamos bajo estrictos estándares de calidad.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <CheckCircle2 />, text: "Valoración Multidisciplinaria Inicial sin costo" },
                    { icon: <ShieldCheck />, text: "Protocolos de seguridad rigurosos" },
                    { icon: <FileText />, text: "Expediente resguardado bajo NOM-004-SSA3-2012" },
                    { icon: <Award />, text: "Personal certificado y verificado" },
                    { icon: <Clock />, text: "Disponibilidad 24/7 para emergencias" },
                    { icon: <ClipboardList />, text: "Cumplimiento total con regulaciones COFEPRIS" }
                  ].map((item, index) => (
                    <motion.div key={index} variants={fadeIn} className="flex items-start gap-3">
                      <div className="text-secondary mt-1 shrink-0 bg-secondary/10 p-1 rounded-full">
                        {item.icon}
                      </div>
                      <span className="font-medium text-foreground/80 leading-snug">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Cómo funciona */}
        <section id="como-funciona" className="py-24 bg-primary text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo iniciar el cuidado?</h2>
              <p className="text-primary-foreground/70 text-lg">
                Un proceso claro, formal y transparente, diseñado para brindarle tranquilidad desde el primer momento.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Conector visible en desktop */}
              <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-white/20 z-0"></div>

              {[
                { icon: <PhoneCall />, title: "Contacto Inicial", desc: "Comuníquese con nosotros para escuchar sus necesidades específicas." },
                { icon: <ClipboardList />, title: "Valoración Clínica", desc: "Un especialista evaluará al paciente en su domicilio sin costo." },
                { icon: <CalendarCheck />, title: "Planeación", desc: "Diseñamos un plan de cuidados personalizado según el diagnóstico." },
                { icon: <HeartPulse />, title: "Inicio de Asistencia", desc: "El profesional asignado comienza el cuidado con seguimiento continuo." }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
                  }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-primary border-4 border-white/20 flex items-center justify-center mb-6 text-secondary bg-white shadow-xl">
                    <div className="scale-150">
                      {step.icon}
                    </div>
                  </div>
                  <div className="bg-primary-foreground/10 text-xs font-bold px-3 py-1 rounded-full mb-3 text-secondary-foreground tracking-wider">PASO {index + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Testimonios — Carrusel */}
        <TestimonialsCarousel />

        {/* 7. CTA Final */}
        <section id="contacto" className="py-24 bg-secondary/10 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center bg-white p-6 sm:p-10 md:p-16 rounded-3xl shadow-xl border border-primary/5"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                El bienestar de su familia merece atención profesional y de confianza.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
                No deje la salud de sus seres queridos al azar. Contáctenos hoy para una valoración inicial sin compromiso.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 shadow-lg shadow-[#25D366]/20 group inline-flex items-center gap-3">
                  <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Solicitar Plan de Cuidados
                  </a>
                </Button>
              </motion.div>
              <motion.p variants={fadeIn} className="mt-6 text-xs text-foreground/50 max-w-md mx-auto">
                Sus datos están protegidos conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (INAI).
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 8. Pie de página institucional */}
      <footer className="bg-primary text-primary-foreground/80 py-16 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="bg-white text-primary p-1.5 rounded-md">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl text-white tracking-tight">
                  Cuida<span className="text-secondary">Med</span>
                </span>
              </a>
              <p className="text-sm leading-relaxed mb-6">
                Asistencia Clínica Domiciliaria. Cuidado profesional, ético y humano para las familias mexicanas.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/5211234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 shrink-0 text-secondary" />
                  <span>+52 1 123 456 7890</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 shrink-0 text-secondary" />
                  <span>contacto@cuidamed.mx</span>
                </li>
                <li className="flex items-start gap-3">
                  <UserRound className="w-5 h-5 shrink-0 text-secondary" />
                  <span>
                    <strong>Domicilio:</strong><br />
                    Av. de la Salud 123, Col. Médica<br />
                    CDMX, México. C.P. 01000
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal y Regulatorio</h4>
              <ul className="space-y-3 text-sm">
                <li><strong>RFC:</strong> CUI240101XYZ</li>
                <li><strong>Aviso de Funcionamiento COFEPRIS:</strong> 243300506X0001</li>
                <li><strong>Responsable Sanitario:</strong> Dr. Juan Pérez Gómez</li>
                <li><strong>Cédula Profesional:</strong> 12345678</li>
                <li className="pt-3">
                  <a href="#" className="underline decoration-white/30 hover:text-white transition-colors">
                    Aviso de Privacidad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Servicios Rápidos</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Cuidador en Domicilio</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Acompañamiento Hospitalario</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Fisioterapia Domiciliaria</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> Enfermería Domiciliaria</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-sm text-center md:flex md:justify-between md:text-left text-primary-foreground/60">
            <p>© 2026 CuidaMed — Asistencia Clínica Domiciliaria. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Sitio de información médica sujeto a normatividad vigente.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
