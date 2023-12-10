import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simonyi Konferencia 2024',
  description: 'Magyarország legnagyobb, egyetemi hallgatók által szervezett éves technológiai konferenciája.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='hu'>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
