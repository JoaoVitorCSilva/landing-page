import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className="bg-black shadow-lg h-24 hidden md:flex">
      <Link href="/" className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
        <Image
          src="/corinthians-logo.svg"
          alt="Logo"
          width={120}
          height={120}
         
        />
      </Link>
      <nav className={`contents font-semibold text-base lg:text-lg ${styles.headerLinks}`}>
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          {/* Menu principal */}
          <li className={`p-3 xl:p-6 ${styles.active} bg-white text-black`}>
            <Link href="/">
              <span>Libertadores</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6 text-white">
            <Link href="/FaseGrupos">
              <span>Mundial</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6 text-white">
            <Link href="/Galeria">
              <span>Galeria</span>
            </Link>
          </li>
          <li className="p-3 xl:p-6 text-white">
            <Link href="/services">
              <span></span>
            </Link>
          </li>
          {/* ...outros itens de menu... */}
        </ul>
      </nav>
      {/* Ícones e botão de contato */}
      <nav className="hidden xl:contents">
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
          {/* Ícones das redes sociais */}
          <li className="p-1">
            <a href="https://www.linkedin.com/" className="rounded-full border border-white aspect-square w-12 h-12 overflow-hidden flex items-center justify-center hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
              <img src="/linked.svg" alt="linkedin" className="w-full h-full object-contain" />
            </a>
          </li>

            <li className="p-1">
            <a href="https://www.instagram.com/" className="rounded-full border border-white aspect-square w-12 h-12 overflow-hidden flex items-center justify-center hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
              <img src="/insta.svg" alt="Instagram" className="w-full h-full object-cover" />
            </a>
          </li>

          <li className="p-1">
            <a href="https://www.x.com/" className="rounded-full border border-white aspect-square w-12 h-12 overflow-hidden flex items-center justify-center hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5">
              <img src="/x.svg" alt="Instagram" className="w-full h-full object-cover" />
            </a>
          </li>
          
          {/* ...outros ícones... */}
        </ul>
      </nav>
      <div className="flex items-center px-4 lg:px-6 xl:px-8">
        <a href="/Loja" className="mr-4 lg:mr-6 xl:mr-8 text-white">
          {/* SVG do ícone de busca */}
        </a>
        <button className="bg-white hover:bg-gray-200 text-black font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">Acesse nossa loja</button>
      </div>
    </header>
  );
};

export default Navbar;