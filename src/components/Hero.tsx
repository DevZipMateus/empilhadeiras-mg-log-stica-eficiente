import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-secondary/80" />

      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">
              Mais de 5 anos de experiência
            </span>
          </div>

          {/* H1 - Nome da empresa */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Rental MG Empilhadeiras
          </h1>

          {/* H2 - Descrição */}
          <h2 className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            Soluções completas em locação, venda e manutenção de empilhadeiras e
            paleteiras para a grande São Paulo. Qualidade e eficiência na
            movimentação das suas cargas.
          </h2>

          {/* Slogan */}
          <p className="text-primary font-semibold text-lg mb-10 animate-fade-in">
            Rental MG sempre prontos para atender você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .querySelector('#servicos')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="border-primary/60 text-primary hover:bg-primary/10 hover:text-primary font-semibold text-lg px-8 py-6"
            >
              Nossos serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-primary/20 animate-fade-in">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary font-heading">
                5+
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Anos de experiência
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary font-heading">
                100+
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Clientes atendidos
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary font-heading">
                24h
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Suporte disponível
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
