import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Hide the Lovable badge on this page
    const style = document.createElement('style');
    style.id = 'hide-lovable-badge';
    style.textContent = `
      [id*="lovable"], 
      [class*="lovable-badge"],
      a[href*="lovable.dev"],
      div[style*="position: fixed"][style*="bottom"] a[href*="lovable"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Remove style when leaving the page
      const styleEl = document.getElementById('hide-lovable-badge');
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Main content - iframe */}
      <main 
        className="flex-1 w-full"
        style={{ height: 'calc(100vh - 80px)' }}
      >
        <iframe 
          src="https://rentalempilhadeirasemanutencoesltda.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
