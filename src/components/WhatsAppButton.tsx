import whatsappIcon from '@/assets/whatsapp-icon.png';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow"
      style={{
        boxShadow: '0 0 20px rgba(37, 211, 102, 0.5), 0 0 40px rgba(37, 211, 102, 0.3)'
      }}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16 drop-shadow-lg" />
    </a>
  );
};

export default WhatsAppButton;
