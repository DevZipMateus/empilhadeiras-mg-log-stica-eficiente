import { useEffect } from 'react';
import Header from '@/components/Header';

const Vitrine = () => {
  const IFRAME_BADGE_HEIGHT_PX = 63;
  const HEADER_HEIGHT_PX = 80;

  // Remove scroll da página enquanto estiver na vitrine
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col fixed inset-0">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Main content - iframe */}
      <main 
        className="flex-1 w-full overflow-hidden relative isolate"
        style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX}px)` }}
      >
        <iframe 
          src="https://rentalempilhadeirasemanutencoesltda.egestor.com.br/vitrine/"
          className="w-full h-full border-none relative z-0"
          title="Demonstração de Vitrine"
        />

        {/* Cobre o badge fixo no rodapé do conteúdo do iframe */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 z-50 bg-background pointer-events-none"
          style={{ height: IFRAME_BADGE_HEIGHT_PX }}
        />
      </main>

      {/* Overlay fixo para garantir que a faixa inferior fique sempre coberta */}
      <div
        aria-hidden
        className="fixed bottom-0 left-0 right-0 bg-background pointer-events-none z-[9999]"
        style={{ height: IFRAME_BADGE_HEIGHT_PX }}
      />
    </div>
  );
};

export default Vitrine;
