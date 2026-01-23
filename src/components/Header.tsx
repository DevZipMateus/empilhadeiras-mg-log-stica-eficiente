import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md`}>
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo.png" alt="Rental MG Empilhadeiras" className="h-24 w-auto" />
            <span className="text-foreground font-heading font-bold text-lg hidden sm:block">
              Rental MG
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-foreground/80 hover:text-primary transition-colors font-medium">
                {link.label}
              </button>)}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('#contato')} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-white border-t border-border">
            <nav className="flex flex-col py-4">
              {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors font-medium py-3 px-4 text-left">
                  {link.label}
                </button>)}
              <div className="px-4 pt-4">
                <Button onClick={() => scrollToSection('#contato')} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Fale conosco
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;