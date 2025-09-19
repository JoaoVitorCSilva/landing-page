import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  titulo: string;
  subtitulo: string;
  texto: string;
  imagemUrl?: string;
}

const Card = ({ titulo, subtitulo, texto, imagemUrl }: CardProps) => {
  const bgImage = imagemUrl || 'https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  return (
    <div className="container mx-auto my-5 mb-20">
      <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        {/* Imagem primeiro */}
        <div className="z-0 order-1 md:order-1 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-l-lg">
          <div
            className="absolute inset-0 w-full h-full object-fill object-center bg-cover bg-bottom"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundColor: 'transparent',
            }}
          ></div>
          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">{subtitulo}</h3>
            <h4 className="w-full text-xl text-gray-100 leading-tight">{titulo}</h4>
          </div>
          {/* <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}
        </div>
        {/* Texto depois */}
        <div className="z-10 order-2 md:order-2 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-transparent rounded-lg md:rounded-none md:rounded-r-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-white">{titulo}</h4>
            <h3 className="hidden md:block font-bold text-2xl text-white">{subtitulo}</h3>
            <p className="text-white text-justify">{texto}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;