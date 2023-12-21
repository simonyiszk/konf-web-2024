import Link from 'next/link';

const links = [
  {
    href: '/',
    label: 'főoldal',
  },
  {
    href: '/conferences',
    label: 'konferenciák',
  },
  {
    href: '/contact',
    label: 'kapcsolat',
  },
];

export function NavbarItems() {
  return (
    <>
      {links.map(({ href, label }) => (
        <Link href={href} key={href} className='hover:text-brand text-xl font-bold'>
          {label}
        </Link>
      ))}
    </>
  );
}
