import { memo } from 'react';

const recipes = [
  { name: 'Gatinho', highlight: 'Fofinho', image: 'https://image2url.com/r2/default/images/1770737037165-6d968b3a-f13c-40a2-8cc7-93e455fd61cd.jpg' },
  { name: 'Gatinho', highlight: 'Pimpão', image: 'https://image2url.com/r2/default/images/1770737064585-fe6e82c9-f68a-442e-8923-7f4aee3a2b46.jpg' },
  { name: 'Gatinho', highlight: 'Radiante', image: 'https://image2url.com/r2/default/images/1770737239302-2021ee53-344b-43ee-8fd1-cca90d90a75c.webp' },
  { name: 'Gatinho', highlight: 'das Flores', image: 'https://image2url.com/r2/default/images/1770737254124-c0faf2f0-b0b5-4ce3-92df-cbe56bb2411e.webp' },
  { name: 'Gatinho', highlight: 'Místico', image: 'https://image2url.com/r2/default/images/1770737270227-c569aaa1-6e60-41db-adeb-e9b3593981fa.webp' },
  { name: 'Gatinho', highlight: 'da Natureza', image: 'https://image2url.com/r2/default/images/1770737290188-3152aa53-227c-4389-9ab0-29e084d3513c.webp' },
  { name: 'Gatinho', highlight: 'Celestial', image: 'https://image2url.com/r2/default/images/1770737314513-3a237626-41f4-4e65-9212-2299dab51c90.webp' },
  { name: 'Gatinho', highlight: 'do Jardim', image: 'https://image2url.com/r2/default/images/1770737334240-ecef7d1a-875f-4d89-b3dc-0405d5cf4664.webp' },
  { name: 'Gatinho', highlight: 'Estrelado', image: 'https://image2url.com/r2/default/images/1770737345864-20990aa5-f2d7-4c3f-9265-1359e15dfa88.webp' },
];

function Gallery() {
  return (
    <section className="py-20 px-5 bg-gradient-to-b from-[#E3F2FD] to-bege-light">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-[32px] font-bold text-center mb-12"
          style={{
            background: 'linear-gradient(135deg, #2196F3, #1976D2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Veja as Receitas que você irá receber!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl hover:shadow-azul-primary/25 transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={recipe.image}
                alt={`${recipe.name} ${recipe.highlight}`}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-xl mb-3"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Gallery);
