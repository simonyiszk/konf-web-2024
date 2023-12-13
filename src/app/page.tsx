import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import { metadata } from '@/app/layout';

import konfLogo from '../../public/img/konf.svg';

export default function Landing() {
  return (
    <main className='grid grid-rows-[auto_1fr_auto] h-full'>
      <div className='p-10 md:p-15 flex justify-between items-center flex-wrap gap-10 flex-col md:flex-row'>
        <div className='flex items-center gap-10'>
          <Link href='https://simonyi.bme.hu' className='brand-link' target='blank'>
            <Image src='/img/simonyi.svg' alt='Simonyi Károly Szakkollégium' width={193} height={40} />
          </Link>
          <Link href='https://vik.bme.hu' className='brand-link' target='blank'>
            <Image src='/img/vik.svg' alt='Vik' width={40} height={40} />
          </Link>
        </div>
        <div className='flex items-center gap-10'>
          <Link href='/' className='hover:text-brand text-xl'>
            konferenciák
          </Link>
          <Link href='/' className='hover:text-brand text-xl'>
            kapcsolat
          </Link>
        </div>
      </div>
      <div className='max-w-xl p-20 mx-auto relative h-full w-full flex items-center'>
        <div className='shadow-gloria rounded-full overflow-hidden'>
          <video
            src='/video/nebula.mp4'
            height={600}
            width={600}
            className='h-full w-full'
            autoPlay
            playsInline
            loop
            controls={false}
          />
        </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col py-5 gap-5 p-5'>
          <Image src={konfLogo} alt='Simonyi Konferencia' className='w-full' />
          <p className='font-bold text-xl sm:text-2xl text-center'>{metadata.description}</p>
          <p className='font-semibold text-2xl sm:text-6xl'>24. 03. 19.</p>
        </div>
      </div>
      <div className='p-10 md:p-15 flex justify-between items-center flex-wrap gap-10 flex-col md:flex-row'>
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
      </div>
    </main>
  );
}
