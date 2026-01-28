import { Truck, Wrench, ShoppingBag, RefreshCw, ClipboardCheck, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import serviceMaintenanceImage from '@/assets/service-maintenance.jpg';
import serviceRentalImage from '@/assets/service-rental.jpg';
import servicePartsImage from '@/assets/service-parts.jpg';
import bgServicesImage from '@/assets/bg-services.jpg';
import { useParallax } from '@/hooks/use-parallax';
import { ScrollReveal } from '@/hooks/use-scroll-reveal';

const Services = () => {
  const parallaxOffset = useParallax(0.3);
  
  const services = [
    {
      icon: Truck,
      title: 'Locação de empilhadeiras',
      description:
        'Empilhadeiras diesel, GLP e elétricas para sua operação. Contratos flexíveis e equipamentos de qualidade.',
    },
    {
      icon: ShoppingBag,
      title: 'Compra e venda',
      description:
        'Comercialização de empilhadeiras e paleteiras. Equipamentos novos e seminovos com garantia.',
    },
    {
      icon: RefreshCw,
      title: 'Troca de equipamentos',
      description:
        'Realize a troca do seu equipamento antigo por um novo. Avaliação justa e negociação transparente.',
    },
    {
      icon: Wrench,
      title: 'Manutenção corretiva',
      description:
        'Reparo de falhas e defeitos em empilhadeiras de todos os tipos. Atendimento rápido e eficiente.',
    },
    {
      icon: ClipboardCheck,
      title: 'Manutenção preventiva',
      description:
        'Inspeções programadas para evitar quebras e prolongar a vida útil dos seus equipamentos.',
    },
    {
      icon: Cog,
      title: 'Manutenção preditiva',
      description:
        'Monitoramento avançado para identificar problemas antes que eles aconteçam.',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${bgServicesImage})`,
          transform: `translateY(${parallaxOffset * -0.2}px) scale(1.1)`
        }}
      />
      <div className="absolute inset-0 bg-muted/70" />
      
      <div className="container-custom mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            O que fazemos
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Nossos serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Soluções completas em empilhadeiras e paleteiras para sua empresa.
            Da locação à manutenção, cuidamos de tudo para você.
          </p>
        </ScrollReveal>

        {/* Services Images Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group">
            <img 
              src={serviceRentalImage} 
              alt="Empilhadeira moderna disponível para locação" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-4 sm:p-6">
              <div>
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2" />
                <h3 className="font-heading text-base sm:text-lg font-bold text-secondary-foreground">Locação</h3>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group">
            <img 
              src={serviceMaintenanceImage} 
              alt="Técnico realizando manutenção em empilhadeira" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-4 sm:p-6">
              <div>
                <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2" />
                <h3 className="font-heading text-base sm:text-lg font-bold text-secondary-foreground">Manutenção</h3>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group sm:col-span-2 md:col-span-1">
            <img 
              src={servicePartsImage} 
              alt="Estoque de peças e componentes para empilhadeiras" 
              className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-4 sm:p-6">
              <div>
                <Cog className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-1 sm:mb-2" />
                <h3 className="font-heading text-base sm:text-lg font-bold text-secondary-foreground">Peças</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 80} className="h-full">
              <div
                className="bg-white/80 backdrop-blur-lg border border-white/40 shadow-lg p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover-lift group h-full"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Paleteiras Section */}
        <div className="bg-secondary text-secondary-foreground p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Manutenção de paleteiras
              </h3>
              <p className="text-secondary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Também oferecemos manutenção especializada para paleteiras
                manuais e elétricas. Nossa equipe técnica está preparada para
                atender todos os modelos e marcas do mercado.
              </p>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
              >
                Solicitar orçamento
              </Button>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <div className="relative">
                <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-primary/30 rounded-full flex items-center justify-center">
                    <Truck className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
