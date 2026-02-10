import { useRef, useEffect, useState, memo } from 'react';
import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { handleCheckoutNavigation } from '../../utils/navigation';

function Offer() {
  const offerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(progressRef, { threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const checkoutUrl = useCheckoutLink();

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let currentProgress = 0;
      const targetProgress = 94;
      const duration = 2000;
      const steps = 60;
      const increment = targetProgress / steps;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= targetProgress) {
          clearInterval(timer);
        } else {
          // Progress logic removed as state is unused
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, hasAnimated]);



  return (
    <section id="preco" ref={offerRef} className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] rounded-2xl p-8 md:p-12 border-2 border-verde-cta">
          <p className="inline-block bg-verde-cta text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            OFERTA LIMITADA
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-verde-cta mb-2">
            Somente hoje
          </h2>

          <div className="mb-8">
            <img
              src="https://image2url.com/r2/default/images/1770736096866-cea8d65c-b5f5-4850-aa94-15500f8a85a4.png"
              alt="Apostila Gatinhos Amigurumi"
              loading="lazy"
              className="max-w-[250px] mx-auto rounded-lg"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
            />
          </div>

          <div className="mb-2">
            <p className="text-sm line-through text-cinza-medium">De $97.00</p>
            <p className="inline-block bg-vermelho-urgencia text-white px-3 py-1 rounded text-xs font-bold">por apenas</p>
          </div>

          <div className="mb-6">
            <div className="text-[80px] md:text-[160px] font-black text-verde-cta tracking-tighter leading-none font-sans">
              $9.90
            </div>
          </div>



          <div className="bg-white rounded-xl p-6 mb-8 border-l-4 border-verde-cta">
            <p className="text-base font-semibold text-cinza-dark mb-4">Receitas exclusivas:</p>
            <ul className="space-y-3 text-sm text-cinza-dark text-left">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Mais de 100 receitas de Gatinhos Amigurumi exclusivas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Passo a passo Em português</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Pagamento Único Acesso Vitalício</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Atualizações Semanais</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Mini-eBook Acessórios Infantis Amigurumi</span>
              </li>
            </ul>
          </div>

          <a
            href={checkoutUrl}
            onClick={(e) => handleCheckoutNavigation(e, checkoutUrl, 'offer-section')}
            className="checkout inline-block w-full bg-verde-cta hover:bg-verde-hover text-white px-12 py-5 rounded-full text-lg font-bold shadow-lg transition-all duration-300 mb-6"
          >
            QUERO MEUS GATINHOS AMIGURUMI AGORA!
          </a>

          <div className="bg-[#FFF8E1] rounded-xl p-4 border-2 border-[#FFB74D]">
            <p className="text-base font-semibold text-[#E65100]">
              ⚠️ Vagas limitadas para garantir um acompanhamento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Offer);
