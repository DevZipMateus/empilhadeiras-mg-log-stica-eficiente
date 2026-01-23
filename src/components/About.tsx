import { Target, Eye, Heart, Leaf, TrendingUp, Users } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

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
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Quem somos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Conheça a Rental MG
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma empresa que nasceu da determinação e do sonho de fazer a
            diferença no mercado de movimentação de cargas.
          </p>
        </div>

        {/* História */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Nossa história
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A Rental MG surgiu da busca constante e de nunca desistir. Continuamos um
              sonho de família, iniciado arduamente nos anos 90, quando o ramo era
              muito pequeno.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Crescer a cada dia mais é o nosso objetivo. Poder dividir os frutos do
              nosso crescimento com nossos colaboradores e fornecedores é nossa
              maior satisfação.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Há mais de cinco anos fornecemos serviços de qualidade e alto
              conhecimento aos nossos clientes, consolidando nossa posição no
              mercado da grande São Paulo.
            </p>
          </div>

          {/* Imagem da empresa */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="Equipe Rental MG trabalhando com empilhadeiras em armazém moderno" 
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Missão e Visão */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          <div className="bg-secondary text-secondary-foreground p-8 rounded-2xl card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold">Nossa missão</h4>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Oferecer empilhadeiras e paleteiras, bem como serviços de
              manutenção que efetivem a qualidade da logística das empresas da
              grande São Paulo.
            </p>
          </div>

          <div className="bg-muted p-8 rounded-2xl card-hover">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground">
                Nossa visão
              </h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em soluções de movimentação de cargas,
              reconhecidos pela excelência em atendimento e qualidade dos
              nossos serviços.
            </p>
          </div>

        </div>

        {/* Valores */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-12">
            Nossos valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 rounded-2xl text-center card-hover group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
