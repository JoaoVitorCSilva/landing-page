"use client";
import React, { useState, useEffect } from 'react';

// Define a interface para os dados do carrossel para tipagem com TypeScript
interface CarouselItem {
  id: number;
  src: string;
  alt: string;
  label: string;
  description: string;
}

// O componente principal da aplicação
const Carrosel: React.FC = () => {
  // Lista de itens do carrossel
  const carouselItems: CarouselItem[] = [
    {
      id: 0,
      src: "https://static.corinthians.com.br/uploads/ad8eda80d5b8a3ad710e04d2bd3a9c59.jpg",
      alt: "Image 1",
      label: "The Favela is Here",
      description: "A frase 'The Favela is here' (A Favela está aqui), exibida em uma faixa por torcedores do Corinthians durante o Mundial de Clubes de 2012 no Japão, tornou-se um símbolo da paixão e da identidade do clube. Ela representava o orgulho da torcida de origem popular e a força da sua presença, mostrando ao mundo que o apoio ao time transcende barreiras geográficas e sociais."
    },
    {
      id: 1,
      src: "https://www.meutimao.com.br/fotos-do-corinthians/w941/2012/12/16/durante_o_jogo_esta_noite_entre_corinthiansbrasil_x_wvw.jpg",
      alt: "Image 2",
      label: "A invasão de 2012",
      description: "A Invasão Corinthiana de 2012 é um dos capítulos mais lendários da história do futebol. Dezenas de milhares de torcedores do Corinthians viajaram do Brasil para o Japão para o Mundial de Clubes, pintando as arquibancadas de preto e branco e transformando o ambiente em uma verdadeira 'casa' para o time."
    },
    {
      id: 2,
      src: "https://gazetams.com.br/userfiles/uploads/imagens/materias/2020/05/original/6bd7e0c9bfef465abace27cbd6a17f8b.jpg",
      alt: "Image 3",
      label: "O Milagre do Goleiro Imbatível",
      description: "Na Libertadores de 2012, em um jogo decisivo contra o Vasco, o goleiro Cássio realizou uma defesa que ficou marcada na história. No lance, Cássio se agigantou diante de Diego Souza, salvando o Corinthians de uma eliminação certa e pavimentando o caminho para o seu primeiro e inédito título da Libertadores. A defesa se tornou o símbolo de uma campanha vitoriosa."
    },
    {
      id: 3,
      src: "https://jpimg.com.br/uploads/2017/04/2723476553-romarinho-da-um-toque-sutil-para-marcar-gol-de-cobertura-que-empatou-primeira-partida-da-final-da-li.jpeg",
      alt: "Image 4",
      label: "O Gol Que Não Teve Transmissão",
      description: "O gol de Romarinho no primeiro jogo da final da Libertadores, contra o Boca Juniors, na Argentina, não foi transmitido ao vivo pela televisão brasileira. A transmissão só voltou após a comemoração, deixando muitos torcedores sem ver o lance histórico que deu ao Corinthians a vantagem para o jogo de volta."
    },
    {
      id: 4,
      src: "https://centraldotimao.com.br/wp-content/uploads/2019/06/agenciacorinthians-foto-40620-scaled-720x540.jpg",
      alt: "Image 5",
      label: "O 'Manto Sagrado' na Sorte",
      description: "A camisa de cor cinza, o uniforme reserva do Corinthians em 2012, se tornou um amuleto da sorte. O time usou a camisa em todas as partidas do mata-mata da Libertadores (a partir das oitavas de final) e venceu todos os confrontos, garantindo a sua invencibilidade na campanha."
    },
    {
      id: 5,
      src: "https://static.gazetaesportiva.com/uploads/imagem/2016/04/01/00445124.jpg",
      alt: "Image 6",
      label: "A Força do Pacaembu",
      description: "O Corinthians teve a chance de decidir a maioria de seus jogos em casa. A atmosfera da torcida no Pacaembu, com a 'invasão' em todos os setores, foi um fator decisivo. O time venceu todos os seus jogos eliminatórios em casa por 1 a 0."
    },
    {
      id: 6,
      src: "https://tntsports.com.br/__export/1656719218570/sites/esporteinterativo/img/2022/07/01/cassio.jpg",
      alt: "Image 7",
      label: "A Muralha de Tite",
      description: "A defesa foi o ponto forte daquele time. Com uma marcação sólida e o goleiro Cássio em grande fase, o Corinthians terminou a campanha sofrendo apenas quatro gols em 14 jogos. Essa solidez defensiva foi crucial para a conquista inédita."
    }
  ];

  // Estado para controlar qual slide está ativo
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Manipulador para o botão "Anterior"
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  // Manipulador para o botão "Próximo"
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efeito para o movimento automático do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Altera o slide a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [activeIndex]);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative rounded-lg overflow-hidden w-full max-w-6xl mx-auto my-8"
    >
      {/* Indicadores do carrossel */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
              activeIndex === index ? 'opacity-100' : 'opacity-50'
            }`}
            aria-current={activeIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Container com a proporção 16x9 */}
      <div className="relative pt-[56.25%]">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.src}
              className="block w-full h-full object-cover"
              alt={item.alt}
            />
            <div
              className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white bg-black bg-opacity-50 rounded-lg p-4"
            >
              <h5 className="text-xl">{item.label}</h5>
              <p className="hidden md:block">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles do carrossel - item anterior */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[20] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      {/* Controles do carrossel - próximo item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[20] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carrosel;
