import Link from 'next/link';

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
    href: '/contact',
    label: 'kapcsolat',
  },
];

export function NavbarItems() {
  return (
    <div className='flex flex-col md:flex-row gap-3 mt-5 md:mt-0 md:gap-10'>
      {links.map(({ href, label }) => (
        <Link href={href} key={href} className='hover:text-brand text-xl font-bold'>
          {label}
        </Link>
      ))}
    </div>
  );
}
