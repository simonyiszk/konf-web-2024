import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simonyi Konferencia - 2024. 03. 19.',
  description: 'Magyarország legnagyobb, egyetemi hallgatók által szervezett éves technológiai konferenciája.',
  keywords:
    'Simonyi Konferencia 2024, technológiai konferencia, egyetemi rendezvény, hallgatók, hallgatók szervezése, Simonyi Károly Szakkollégium, BME-VIK, innováció, digitalizáció, műszaki fejlesztések, tudományos esemény, inspiráló előadások, szakmai workshopok, Magyarország eseményei, fiatal tehetségek, digitális megoldások, jövő technológiái, iparági trendek, tudásátadás, innovatív gondolkodás, egyetemi közösség, kreatív technológia, networking lehetőségek, szakmai előadók, technológiai innovációk, informatikai fejlődés, egyetemi tapasztalatok, mérnöki világ, vezető szakemberek, digitális társadalom, tudományos találkozó',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='hu'>
      <body className={raleway.className}>
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
              <Link href='/conferences' className='hover:text-brand text-xl'>
                konferenciák
              </Link>
              <Link href='/contact' className='hover:text-brand text-xl'>
                kapcsolat
              </Link>
            </div>
          </div>
          <div className='max-w-xl p-20 mx-auto relative h-full w-full flex items-center'>{children}</div>
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
      </body>
    </html>
  );
}
