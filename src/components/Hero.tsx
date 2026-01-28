import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';
import { useParallax } from '@/hooks/use-parallax';

const Hero = () => {
  const navigate = useNavigate();
  const parallaxOffset = useParallax(0.4);

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToVitrine = () => {
    navigate('/vitrine');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${parallaxOffset * 0.5}px) scale(1.1)`
        }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-secondary/80" />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with Glass Effect */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in hover-scale-subtle cursor-default">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse relative">
              <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></span>
            </span>
            <span className="text-primary text-xs sm:text-sm font-medium">
              Mais de 5 anos de experiência
            </span>
          </div>

          {/* H1 - Nome da empresa */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-slide-up px-2">
            Rental MG <span className="text-gradient-animated">Empilhadeiras</span>
          </h1>

          {/* H2 - Descrição */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up leading-relaxed px-2" style={{ animationDelay: '0.1s' }}>
            Soluções completas em locação, venda e manutenção de empilhadeiras e
            paleteiras para a grande São Paulo. Qualidade e eficiência na
            movimentação das suas cargas.
          </h2>

          {/* Slogan */}
          <p className="text-primary font-semibold text-base sm:text-lg mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Rental MG sempre prontos para atender você.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group hover-glow w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={goToVitrine}
              className="border-primary/60 text-primary hover:bg-primary/10 hover:text-primary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:border-primary"
            >
              <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
              Ver Vitrine
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-white/20 animate-fade-in bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mx-2 sm:mx-0 hover-scale-subtle" style={{ animationDelay: '0.4s' }}>
            <div className="text-center group cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-heading transition-transform duration-300 group-hover:scale-110">
                5+
              </p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm mt-1">
                Anos de experiência
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-heading transition-transform duration-300 group-hover:scale-110">
                100+
              </p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm mt-1">
                Clientes atendidos
              </p>
            </div>
            <div className="text-center group cursor-default">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-heading transition-transform duration-300 group-hover:scale-110">
                24h
              </p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm mt-1">
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
