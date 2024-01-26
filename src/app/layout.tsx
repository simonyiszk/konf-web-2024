import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

//import localFont from 'next/font/local';
import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';

export const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
//export const recharge = localFont({ src: 'TODO', variable: '--font-recharge' });

export const metadata: Metadata = {
  title: 'Simonyi Konferencia - 2024. 03. 19.',
  description: 'Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciája.',
  keywords:
    'Simonyi Konferencia 2024, technológiai konferencia, egyetemi rendezvény, hallgatók, hallgatók szervezése, Simonyi Károly Szakkollégium, BME-VIK, innováció, digitalizáció, műszaki fejlesztések, tudományos esemény, inspiráló előadások, szakmai workshopok, Magyarország eseményei, fiatal tehetségek, digitális megoldások, jövő technológiái, iparági trendek, tudásátadás, innovatív gondolkodás, egyetemi közösség, kreatív technológia, networking lehetőségek, szakmai előadók, technológiai innovációk, informatikai fejlődés, egyetemi tapasztalatok, mérnöki világ, vezető szakemberek, digitális társadalom, tudományos találkozó',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='hu'>
      <body>
        <main className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex-grow relative flex flex-col justify-center items-center'>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
