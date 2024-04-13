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
    external: false,
  },
];

export function NavbarItems() {
  return (
    <div className='flex flex-col lg:flex-row gap-3 mt-5 lg:mt-0 lg:gap-10'>
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
