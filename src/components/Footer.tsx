import { MapPin, Mail, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom mx-auto px-4 sm:px-6 section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo and About */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-white rounded-full p-2 sm:p-3 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Rental MG Empilhadeiras"
                  className="h-12 sm:h-16 md:h-20 w-auto"
                />
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl">
                Rental MG Empilhadeiras
              </span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              Soluções completas em locação, venda e manutenção de empilhadeiras
              e paleteiras para a grande São Paulo. Rental MG sempre prontos
              para atender você.
            </p>
            <p className="text-secondary-foreground/60 text-xs sm:text-sm">
              CNPJ: 44.533.328/0001-49
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base sm:text-lg mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm sm:text-base">
                  Avenida Mazzei, 138
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:financeiro@rentalmgempilhadeiras.com.br"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors break-all text-sm sm:text-base"
                >
                  financeiro@rentalmgempilhadeiras.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://instagram.com/rentalmgempilhadeiras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm sm:text-base"
                >
                  @rentalmgempilhadeiras
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold text-base sm:text-lg mb-4 sm:mb-6">Horário</h4>
            <div className="flex items-start gap-2 sm:gap-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-secondary-foreground/80 text-sm sm:text-base">
                <p>Segunda a Quinta</p>
                <p className="font-medium">08:00 - 18:00</p>
                <p className="mt-2">Sexta</p>
                <p className="font-medium">08:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-primary/20">
          <p className="text-center text-secondary-foreground/60 text-xs sm:text-sm">
            © {currentYear} Rental MG Empilhadeiras. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
