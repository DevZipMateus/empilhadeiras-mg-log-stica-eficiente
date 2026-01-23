import { Check, Calendar, Shield, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bgPlansImage from '@/assets/bg-plans.jpg';
import { useParallax } from '@/hooks/use-parallax';
import { ScrollReveal } from '@/hooks/use-scroll-reveal';

const Plans = () => {
  const parallaxOffset = useParallax(0.3);
  
  const benefits = [
    'Visitas agendadas mensalmente',
    'Fornecimento de itens preventivos',
    'Atendimento prioritário',
    'Relatórios técnicos detalhados',
    'Suporte técnico dedicado',
    'Preços especiais em peças',
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="section-padding relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${bgPlansImage})`,
          transform: `translateY(${parallaxOffset * -0.15}px) scale(1.1)`
        }}
      />
      <div className="absolute inset-0 bg-secondary/70" />
      
      <div className="container-custom mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Contrate
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 sm:mb-6">
            Contratos de manutenção
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Mantenha seus equipamentos sempre em perfeito funcionamento com
            nossos contratos de manutenção personalizados.
          </p>
        </ScrollReveal>

        {/* Plan Card */}
        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="bg-secondary/90 backdrop-blur-xl text-secondary-foreground rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover-scale-subtle">
            {/* Card Header */}
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 text-center border-b border-white/10">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Contrato personalizado
              </h3>
              <p className="text-secondary-foreground/80 text-sm sm:text-base">
                Valores de acordo com a quantidade de equipamentos e
                particularidades de cada cliente
              </p>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-10">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                    Visitas mensais
                  </h4>
                  <p className="text-secondary-foreground/70 text-xs sm:text-sm">
                    Agendamento regular para manutenção
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                    Itens preventivos
                  </h4>
                  <p className="text-secondary-foreground/70 text-xs sm:text-sm">
                    Fornecimento incluso no contrato
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Wrench className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                    Suporte técnico
                  </h4>
                  <p className="text-secondary-foreground/70 text-xs sm:text-sm">
                    Equipe especializada à disposição
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-secondary-foreground/90 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto"
                >
                  Solicitar proposta personalizada
                </Button>
                <p className="text-secondary-foreground/60 text-xs sm:text-sm mt-3 sm:mt-4 px-2">
                  Entre em contato para receber uma proposta adequada às suas
                  necessidades
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Plans;
