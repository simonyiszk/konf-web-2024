import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export function DesktopFooter() {
  return (
    <footer className='hidden md:flex p-10 justify-between items-center gap-10 flex-row'>
      <div className='flex items-center gap-5 text-[40px]'>
        <Link href='https://www.instagram.com/simonyikonf' className='brand-link' target='blank'>
          <FaInstagram />
        </Link>
        <Link href='https://www.facebook.com/events/1060756212046229' className='brand-link' target='blank'>
          <FaFacebook />
        </Link>
        <Link
          href='https://www.youtube.com/watch?v=QDKDaMKqcoQ&list=PLovp3RCdzQGx_lKpvCgUJT6n-wJazXKrL'
          className='brand-link'
          target='blank'
        >
          <FaYoutube />
        </Link>
      </div>
      <div className='flex items-center gap-10'>
        <Link href='https://schdesign.hu' className='brand-link' target='blank'>
          <Image className='-mb-2' src='/img/schdesign.svg' alt='schdesign' width={148} height={40} />
        </Link>
        <Link href='https://kir-dev.hu' className='brand-link' target='blank'>
          <Image src='/img/kirdev-inline.svg' alt='Kir-Dev' width={193} height={40} />
        </Link>
      </div>
    </footer>
  );
}
