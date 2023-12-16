import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export function SocialButtons() {
  return (
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
  );
}
