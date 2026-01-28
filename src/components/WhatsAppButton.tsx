import whatsappIcon from '@/assets/whatsapp-icon.png';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-125 animate-float group"
      style={{
        boxShadow: '0 0 20px rgba(37, 211, 102, 0.5), 0 0 40px rgba(37, 211, 102, 0.3)'
      }}
    >
      {/* Pulse ring effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16 drop-shadow-lg relative z-10 group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
};

export default WhatsAppButton;
