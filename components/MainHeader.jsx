import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import MainHeaderBackground from './MainHeaderBackground';
import NavLink from './NavLink';

const imageLinkClass =
  'flex items-center justify-center gap-8 no-underline text-gray-300 font-bold font-montserrat tracking-wider uppercase text-lg ';

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground />
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
          <NavLink href='/meals'>Browse Meals</NavLink>
          <NavLink href='/community'>Foodies Community</NavLink>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default MainHeader;
