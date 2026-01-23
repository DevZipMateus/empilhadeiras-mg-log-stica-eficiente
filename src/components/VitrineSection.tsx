import { ShoppingBag, ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import bgVitrineImage from '@/assets/bg-vitrine.jpg';
import forkliftOperatorImage from '@/assets/forklift-operator.jpg';
import palletJackImage from '@/assets/pallet-jack.jpg';

const VitrineSection = () => {
  const navigate = useNavigate();

  const goToVitrine = () => {
    navigate('/vitrine');
  };

  const features = [
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Entregamos em toda a grande São Paulo com agilidade',
    },
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: 'Equipamentos revisados e prontos para uso',
    },
    {
      icon: Clock,
      title: 'Disponibilidade Imediata',
      description: 'Estoque disponível para pronta entrega',
    },
  ];

  return (
    <section id="vitrine" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgVitrineImage})` }}
      />
      <div className="absolute inset-0 bg-background/75" />
      
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">
              Novidade
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça Nossa{' '}
            <span className="text-primary">Vitrine de Produtos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore nossa seleção de empilhadeiras, paleteiras e equipamentos disponíveis para locação e venda. 
            Encontre a solução perfeita para sua operação.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src={forkliftOperatorImage} 
              alt="Operador de empilhadeira profissional" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-heading font-bold text-secondary-foreground text-lg">
                Operação Segura
              </h3>
              <p className="text-secondary-foreground/80 text-sm">
                Equipamentos confiáveis para sua operação
              </p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src={palletJackImage} 
              alt="Paleteira elétrica moderna" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-heading font-bold text-secondary-foreground text-lg">
                Equipamentos Modernos
              </h3>
              <p className="text-secondary-foreground/80 text-sm">
                Paleteiras e empilhadeiras de última geração
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Veja Todos os Equipamentos Disponíveis
            </h3>
            <p className="text-secondary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Acesse nossa vitrine completa e encontre empilhadeiras, paleteiras e peças 
              com os melhores preços do mercado.
            </p>
            
            <Button
              size="lg"
              onClick={goToVitrine}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-6 group"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Acessar Vitrine
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
