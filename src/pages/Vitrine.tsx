import Header from '@/components/Header';

const Vitrine = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Main content - iframe */}
      <main 
        className="flex-1 w-full"
        style={{ height: 'calc(100vh - 80px - 63px)' }}
      >
        <iframe 
          src="https://rentalempilhadeirasemanutencoesltda.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </main>
      
      {/* Badge space */}
      <div className="h-[63px] flex-shrink-0" />
    </div>
  );
};

export default Vitrine;
