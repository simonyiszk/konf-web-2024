import Link from 'next/link';

export function NavbarItems() {
  return (
    <>
      <Link href='/' className='hover:text-brand text-xl'>
        főoldal
      </Link>
      <Link href='/conferences' className='hover:text-brand text-xl'>
        konferenciák
      </Link>
      <Link href='/contact' className='hover:text-brand text-xl'>
        kapcsolat
      </Link>
    </>
  );
}
