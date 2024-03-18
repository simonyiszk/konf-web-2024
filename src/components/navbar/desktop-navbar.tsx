'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { NavbarItems } from '@/components/navbar/navbar-items';
import { navbarOnDarkBg } from '@/utils/navbarHelper';

export function DesktopNavbar() {
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  const onScroll = () => {
    try {
      setIsDarkBackground(navbarOnDarkBg('desktop-nav-container'));
    } catch {}
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav className='w-full mx-auto hidden lg:flex justify-end items-center flex-wrap gap-10 flex-col lg:flex-row fixed p-5 top-0 z-20 overflow-hidden'>
      <div
        id='desktop-nav-container'
        className={clsx(
          'flex items-center justify-between gap-10 w-full p-4 box-border rounded-md backdrop-blur-md',
          isDarkBackground ? 'bg-white bg-opacity-[0.15]' : 'bg-black bg-opacity-[0.65]'
        )}
      >
        <Link href='/'>
          <Image src='/img/icon-base.svg' alt='Simonyi Konferencia' width={40} height={40} />
        </Link>
        <NavbarItems />
      </div>
    </nav>
  );
}
