import Image from 'next/image';
import Link from 'next/link';

import { NavbarItems } from '@/components/navbar/navbar-items';

export function DesktopNavbar() {
  return (
    <nav className='hidden md:flex p-10 md:p-15 justify-between items-center flex-wrap gap-10 flex-col md:flex-row'>
      <div className='flex items-center gap-10'>
        <Link href='https://simonyi.bme.hu' className='brand-link' target='blank'>
          <Image src='/img/simonyi.svg' alt='Simonyi Károly Szakkollégium' width={193} height={40} />
        </Link>
        <Link href='https://vik.bme.hu' className='brand-link' target='blank'>
          <Image src='/img/vik.svg' alt='Vik' width={40} height={40} />
        </Link>
      </div>
      <div className='flex items-center gap-10'>
        <NavbarItems />
      </div>
    </nav>
  );
}
