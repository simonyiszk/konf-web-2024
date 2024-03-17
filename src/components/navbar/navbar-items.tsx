import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const links = [
  {
    href: '/',
    label: 'főoldal',
  },
  {
    href: '/presentations',
    label: 'előadások',
  },
  {
    href: '/workshop',
    label: 'workshop',
  },
  {
    href: '/contact',
    label: 'kapcsolat',
  },
  {
    href: '/golya',
    label: 'gólyáknak',
    external: true,
  },
];

export function NavbarItems() {
  return (
    <div className='flex flex-col md:flex-row gap-3 mt-5 md:mt-0 md:gap-10'>
      {links.map(({ href, label, external }) => (
        <Link
          href={href}
          key={href}
          target={external ? '_blank' : undefined}
          className='hover:text-brand text-xl font-bold flex gap-2 items-center'
        >
          {label}
          {external && <FaExternalLinkAlt />}
        </Link>
      ))}
    </div>
  );
}
