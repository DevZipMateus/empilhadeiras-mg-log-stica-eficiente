import { Check, Calendar, Shield, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bgPlansImage from '@/assets/bg-plans.jpg';
import { useParallax } from '@/hooks/use-parallax';

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
      
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Contrate
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Contratos de manutenção
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Mantenha seus equipamentos sempre em perfeito funcionamento com
            nossos contratos de manutenção personalizados.
          </p>
        </div>

        {/* Plan Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary text-secondary-foreground rounded-3xl overflow-hidden shadow-2xl">
            {/* Card Header */}
            <div className="bg-primary/20 p-8 text-center border-b border-primary/20">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                Contrato personalizado
              </h3>
              <p className="text-secondary-foreground/80">
                Valores de acordo com a quantidade de equipamentos e
                particularidades de cada cliente
              </p>
            </div>

            {/* Card Body */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold mb-2">
                    Visitas mensais
                  </h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Agendamento regular para manutenção
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold mb-2">
                    Itens preventivos
                  </h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Fornecimento incluso no contrato
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold mb-2">
                    Suporte técnico
                  </h4>
                  <p className="text-secondary-foreground/70 text-sm">
                    Equipe especializada à disposição
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-secondary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-6"
                >
                  Solicitar proposta personalizada
                </Button>
                <p className="text-secondary-foreground/60 text-sm mt-4">
                  Entre em contato para receber uma proposta adequada às suas
                  necessidades
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
