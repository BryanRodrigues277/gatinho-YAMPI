import { memo } from 'react';

function Hero() {
  const scrollToPrice = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const priceSection = document.getElementById('preco');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-azul-gradient-start to-azul-gradient-end py-20 px-5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-[36px] md:text-[40px] leading-tight font-bold mb-4">
              Apostila Amigurumi Gatinhos Fofos -{' '}
              <span className="text-amarelo-destaque" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                +100 modelos exclusivos
              </span>
            </h1>

            <h2 className="text-2xl md:text-2xl leading-tight font-semibold mb-6 text-white">
              Transforme seus fios em gatinhos fofos que encantam a todos!
            </h2>

            <p className="text-lg text-white/95 mb-4 leading-relaxed">
              +100 modelos exclusivos de gatinhos amigurumi com passo a passo detalhado.
            </p>

            <p className="text-lg text-white/95 mb-8 leading-relaxed">
              Descubra o segredo para criar gatinhos de crochê que trazem doçura e encanto para qualquer ambiente!
            </p>

            <a
              href="#preco"
              onClick={scrollToPrice}
              className="inline-block bg-verde-cta hover:bg-verde-hover text-white px-6 py-3 md:px-10 md:py-4 rounded-lg text-sm md:text-lg font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 animate-pulse-shadow w-full md:w-auto text-center"
            >
              QUERO MEUS GATINHOS AMIGURUMI AGORA!
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="https://image2url.com/r2/default/images/1770736096866-cea8d65c-b5f5-4850-aa94-15500f8a85a4.png"
              alt="Apostila Gatinhos Amigurumi"
              className="max-w-[450px] w-full h-auto rounded-lg animate-float"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
