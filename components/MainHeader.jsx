import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';

const listClass =
  'text-[#ddd6cb] font-bold py-4 px-8 hover:bg-clip-text active:bg-clip-text hover:bg-gradient-to-r active:bg-gradient-to-r from-[#ff8a05] to-[#f9b331]';

const imageLinkClass =
  'flex items-center justify-center gap-8 no-underline text-gray-300 font-bold font-montserrat tracking-wider uppercase text-lg ';

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 md:px-[10%]">
      <Link className={imageLinkClass} href="/">
        <Image
          src={logoImg}
          alt="A plate with food on it"
          className="w-20 h-20 object-contain filter drop-shadow-md"
          priority
        />
        NextLevel food
      </Link>

      <nav>
        <ul className="list-none m-0 p-0 flex gap-6 text-lg">
          <li>
            <Link href="/meals" className={listClass}>
              Browse Meals
            </Link>
          </li>
          <li>
            <Link href="/community" className={listClass}>
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
