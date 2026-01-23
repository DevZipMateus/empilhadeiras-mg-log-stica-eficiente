import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bgContactImage from '@/assets/bg-contact.jpg';
import whatsappIcon from '@/assets/whatsapp-icon.png';
import { useParallax } from '@/hooks/use-parallax';
import { ScrollReveal } from '@/hooks/use-scroll-reveal';

const Contact = () => {
  const parallaxOffset = useParallax(0.3);
  
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Avenida Mazzei, 138',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'financeiro@rentalmgempilhadeiras.com.br',
      href: 'mailto:financeiro@rentalmgempilhadeiras.com.br',
    },
    {
      icon: Clock,
      label: 'Horário de funcionamento',
      value: 'Segunda a Quinta: 08:00 - 18:00 | Sexta: 08:00 - 17:00',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@rentalmgempilhadeiras',
      href: 'https://instagram.com/rentalmgempilhadeiras',
    },
  ];

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${bgContactImage})`,
          transform: `translateY(${parallaxOffset * -0.15}px) scale(1.1)`
        }}
      />
      <div className="absolute inset-0 bg-muted/75" />
      
      <div className="container-custom mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Fale conosco
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Estamos prontos para atender você. Entre em contato conosco para
            solicitar orçamentos, tirar dúvidas ou conhecer mais sobre nossos
            serviços.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
              Informações de contato
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-muted-foreground text-xs sm:text-sm mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors text-sm sm:text-base break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-secondary/90 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/10">
              <h4 className="font-heading text-lg sm:text-xl font-bold text-secondary-foreground mb-2">
                Atendimento rápido via WhatsApp
              </h4>
              <p className="text-secondary-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">
                Precisa de um orçamento urgente? Fale diretamente conosco pelo
                WhatsApp.
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-colors text-sm sm:text-base"
              >
                <img src={whatsappIcon} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
                Chamar no WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Contact Form - Depoimentos */}
          <ScrollReveal direction="right">
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover-scale-subtle">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Deixe seu depoimento
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Sua opinião é muito importante para nós. Compartilhe sua
              experiência com a Rental MG.
            </p>

            <form className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Celular *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="orderNumber"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Número do pedido
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Ex: 12345"
                />
              </div>

              <div>
                <label
                  htmlFor="testimonial"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Seu depoimento *
                </label>
                <textarea
                  id="testimonial"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  placeholder="Conte-nos sobre sua experiência..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Enviar depoimento
              </Button>
            </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
