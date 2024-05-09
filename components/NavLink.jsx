'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const listClass =
  'font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-orange-400 hover:to-orange-300 hover:drop-shadow-xl';

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`${listClass} ${
          path.startsWith(href)
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300  '
            : ` text-orange-50 `
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
