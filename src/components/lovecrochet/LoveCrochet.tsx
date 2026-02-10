import { memo } from 'react';

function LoveCrochet() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-[32px] md:text-[32px] font-bold text-cinza-dark mb-8">
          Imagine isso...
        </h2>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          Um gatinho fofo decorando o quarto do bebê. Uma criança brincando com seu novo amigo de bigodes charmosos. Uma casa cheia de doçura e encanto com suas criações artesanais.
        </p>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          <strong>Tudo feito com suas próprias mãos.</strong>
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <img
            src="https://image2url.com/r2/default/images/1770736564181-8e3d6950-be46-4918-86a8-1477447932ba.jpg"
            alt="Gatinho Amigurumi 1"
            className="w-full aspect-square object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://image2url.com/r2/default/images/1770736582146-5bd3bcda-c77b-4b28-854c-4591032f0131.webp"
            alt="Gatinho Amigurumi 2"
            className="w-full aspect-square object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://image2url.com/r2/default/images/1770736603443-954ea18e-b196-487e-9b72-0b7b6d8d7fd0.webp"
            alt="Gatinho Amigurumi 3"
            className="w-full aspect-square object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://image2url.com/r2/default/images/1770736616300-c3ab2be2-103b-4ff2-817c-cca26eb212e3.webp"
            alt="Gatinho Amigurumi 4"
            className="w-full aspect-square object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed">
          Mágico. Encantador. <strong>Inesquecível!</strong>
        </p>
      </div>
    </section>
  );
}

export default memo(LoveCrochet);
