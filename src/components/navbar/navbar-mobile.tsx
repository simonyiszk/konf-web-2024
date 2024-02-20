'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';

import { NavbarItems } from '@/components/navbar/navbar-items';

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const onLinkClick: MouseEventHandler = (e) => {
    if ((e.target as HTMLElement).tagName === 'A') setIsOpen(false);
  };
  return (
    <nav className='w-full p-5 md:hidden fixed top-0 z-20' onClick={onLinkClick}>
      <div className='w-full p-5 box-border rounded-md bg-white bg-opacity-10 backdrop-blur-md'>
        <div className='w-full flex items-center justify-between gap-5'>
          <Link href='/' onClick={() => setIsOpen(false)}>
            <Image src='/img/icon-base.svg' alt='Simonyi Konferencia' width={40} height={40} />
          </Link>
          <button onClick={toggle}>
            <TbMenu2 size={40} />
          </button>
        </div>
        {isOpen && (
          <div className={clsx('flex flex-col w-full gap-3 overflow-hidden box-border mt-5')}>
            <NavbarItems />
          </div>
        )}
      </div>
    </nav>
  );
}
