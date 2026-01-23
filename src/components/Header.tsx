import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [{
    href: '#inicio',
    label: 'Início'
  }, {
    href: '#sobre',
    label: 'Sobre'
  }, {
    href: '#servicos',
    label: 'Serviços'
  }, {
    href: '#planos',
    label: 'Planos'
  }, {
    href: '#contato',
    label: 'Contato'
  }];
  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const goToVitrine = () => {
    navigate('/vitrine');
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' : 'bg-white/60 backdrop-blur-lg'}`}>
      <div className="container-custom mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
            <img src="/logo.png" alt="Rental MG Empilhadeiras" className="h-16 sm:h-20 md:h-24 w-auto" />
            <span className="text-foreground font-heading font-bold text-base sm:text-lg hidden sm:block">
              Rental MG
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(link => (
              <button 
                key={link.href} 
                onClick={() => scrollToSection(link.href)} 
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm xl:text-base"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={goToVitrine}
              className="text-foreground/80 hover:text-primary transition-colors font-medium flex items-center gap-1 text-sm xl:text-base"
            >
              <ShoppingBag className="w-4 h-4" />
              Vitrine
            </button>
          </nav>

          {/* CTA Buttons Desktop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Button 
              onClick={goToVitrine} 
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/10 font-semibold text-sm"
            >
              <ShoppingBag className="w-4 h-4 mr-1.5" />
              Vitrine
            </Button>
            <Button 
              onClick={() => scrollToSection('#contato')} 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm"
            >
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-white/20">
            <nav className="flex flex-col py-4">
              {navLinks.map(link => (
                <button 
                  key={link.href} 
                  onClick={() => scrollToSection(link.href)} 
                  className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors font-medium py-3 px-4 text-left"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={goToVitrine}
                className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors font-medium py-3 px-4 text-left flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Vitrine
              </button>
              <div className="px-4 pt-4 space-y-3">
                <Button 
                  onClick={goToVitrine} 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 font-semibold"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Ver Vitrine
                </Button>
                <Button 
                  onClick={() => scrollToSection('#contato')} 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Fale conosco
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>;
};
export default Header;