import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

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
      <div className='flex flex-col items-center justify-center gap-10 max-w-3xl mx-auto p-10'>
        <Image src='/img/konf.svg' alt='Simonyi Konferencia' height={120} width={600} />
        <p className='text-2xl font-bold text-center'>
          Magyarország legnagyobb, egyetemi hallgatók által szervezett éves technológiai konferenciája.
        </p>
        <p className='font-semibold text-5xl'>24. 03. 19.</p>
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
