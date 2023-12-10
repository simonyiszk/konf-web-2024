import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import konfLogo from '../../public/img/konf.svg';

export default function Landing() {
  return (
    <main className='grid grid-rows-[auto_1fr_auto] h-full'>
      <div className='p-10 md:p-15 flex justify-between items-center flex-wrap gap-10'>
        <div className='flex items-center gap-10'>
          <Link href='https://vik.bme.hu'>
            <Image src='/img/vik.svg' alt='Vik' width={40} height={40} />
          </Link>
          <Link href='https://simonyi.bme.hu'>
            <Image src='/img/simonyi.svg' alt='Simonyi Károly Szakkollégium' width={193} height={40} />
          </Link>
        </div>
        <div className='flex items-center gap-10'>
          <Link href='/'>konferenciák</Link>
          <Link href='/'>kapcsolat</Link>
        </div>
      </div>
      <div className='max-w-xl p-10 mx-auto'>
        <div className='aspect-square shadow-gloria flex flex-col items-center justify-center gap-10 border-8 p-10 border-white rounded-full bg-nebula bg-cover bg-center bg-no-repeat'>
          <Image src={konfLogo} alt='Simonyi Konferencia' className='w-full' />
          <p className='font-semibold text-2xl sm:text-5xl'>24. 03. 19.</p>
        </div>
      </div>
      <div className='p-10 md:p-15 flex justify-between items-center flex-wrap gap-10'>
        <div className='flex items-center gap-5 text-[40px]'>
          <Link href='https://www.instagram.com/simonyikonf'>
            <FaInstagram />
          </Link>
          <Link href='https://www.facebook.com/events/1060756212046229'>
            <FaFacebook />
          </Link>
          <Link href='https://www.youtube.com/@SimonyiSzakkoli'>
            <FaYoutube />
          </Link>
        </div>
        <div className='flex items-center gap-10'>
          <Link href='https://schdesign.hu'>
            <Image className='-mb-2' src='/img/schdesign.svg' alt='schdesign' width={148} height={40} />
          </Link>
          <Link href='https://kir-dev.hu'>
            <Image src='/img/kirdev-inline.svg' alt='Kir-Dev' width={193} height={40} />
          </Link>
        </div>
      </div>
    </main>
  );
}
