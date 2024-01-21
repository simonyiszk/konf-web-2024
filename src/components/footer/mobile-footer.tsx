import Image from 'next/image';
import Link from 'next/link';

import konfLogo from '../../../public/img/konf.svg';
import { SocialButtons } from './social-buttons';

export function MobileFooter() {
  return (
    <footer className='flex md:hidden flex-col my-12 px-5 gap-8 '>
      <Image src={konfLogo} width={350} height={120} alt='Simonyi Konferencia' />

      <SocialButtons />

      <div className='flex items-center gap-8'>
        <Link href='https://schdesign.hu' className='brand-link' target='blank'>
          <Image className='-mb-2' src='/img/schdesign.svg' alt='schdesign' width={148} height={40} />
        </Link>
        <Link href='https://kir-dev.hu' className='brand-link' target='blank'>
          <Image src='/img/kirdev-inline.svg' alt='Kir-Dev' width={193} height={40} />
        </Link>
      </div>

      <div className='flex items-center gap-8 justify-center'>
        <Link href='https://vik.bme.hu' className='brand-link' target='blank'>
          <Image src='/img/vik.svg' alt='Vik' width={48} height={48} />
        </Link>
        <Link href='https://simonyi.bme.hu' className='brand-link' target='blank'>
          <Image src='/img/simonyi.svg' alt='Simonyi Károly Szakkollégium' width={160} height={34} />
        </Link>
      </div>

      <div className='flex justify-center'>
        <Link href='https://vercel.com' className='brand-link ' target='blank'>
          <Image src='/img/vercel.svg' alt='Vercel' className='mx-auto' width={100} height={25} />
        </Link>
      </div>
    </footer>
  );
}
