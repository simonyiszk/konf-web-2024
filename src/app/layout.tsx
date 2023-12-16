import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';

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
        <main className='grid grid-rows-[auto_1fr_auto] h-[100dvh]'>
          <Navbar />
          <div className='max-w-6xl p-20 mx-auto relative h-full w-full flex justify-center items-center'>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
