import { Target, Eye, Heart, Leaf, TrendingUp, Users } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';
import { ScrollReveal } from '@/hooks/use-scroll-reveal';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Transparência',
      description: 'Atuamos eticamente com nossos clientes, colaboradores e fornecedores.',
    },
    {
      icon: Leaf,
      title: 'Sustentabilidade',
      description: 'Cuidado ao meio ambiente em todas as nossas operações.',
    },
    {
      icon: TrendingUp,
      title: 'Melhoria contínua',
      description: 'Entregar resultados melhores a cada dia é nosso compromisso.',
    },
    {
      icon: Users,
      title: 'Eficiência',
      description: 'Eficiência e eficácia na logística com foco na movimentação de cargas.',
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Quem somos
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Conheça a Rental MG
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Uma empresa que nasceu da determinação e do sonho de fazer a
            diferença no mercado de movimentação de cargas.
          </p>
        </ScrollReveal>

        {/* História */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Nossa história
            </h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              A Rental MG surgiu da busca constante e de nunca desistir. Continuamos um
              sonho de família, iniciado arduamente nos anos 90, quando o ramo era
              muito pequeno.
            </p>
            <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Crescer a cada dia mais é o nosso objetivo. Poder dividir os frutos do
              nosso crescimento com nossos colaboradores e fornecedores é nossa
              maior satisfação.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Há mais de cinco anos fornecemos serviços de qualidade e alto
              conhecimento aos nossos clientes, consolidando nossa posição no
              mercado da grande São Paulo.
            </p>
          </div>

          {/* Imagem da empresa */}
          <ScrollReveal className="order-1 lg:order-2" direction="right">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover-lift group">
              <img 
                src={aboutImage} 
                alt="Equipe Rental MG trabalhando com empilhadeiras em armazém moderno" 
                className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        {/* Missão e Visão */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20">
          <div className="bg-secondary/90 backdrop-blur-lg text-secondary-foreground p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl card-hover border border-white/10">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-bold">Nossa missão</h4>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed text-sm sm:text-base">
              Oferecer empilhadeiras e paleteiras, bem como serviços de
              manutenção que efetivem a qualidade da logística das empresas da
              grande São Paulo.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl card-hover border border-white/40 shadow-xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                Nossa visão
              </h4>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Ser referência em soluções de movimentação de cargas,
              reconhecidos pela excelência em atendimento e qualidade dos
              nossos serviços.
            </p>
          </div>
        </div>

        {/* Valores */}
        <ScrollReveal>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground text-center mb-8 sm:mb-12">
            Nossos valores
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {values.map((value, index) => (
              <ScrollReveal
                key={index}
                delay={index * 100}
                className="h-full"
              >
                <div
                  className="bg-white/80 backdrop-blur-lg border border-white/40 shadow-lg p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover-lift group h-full"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
