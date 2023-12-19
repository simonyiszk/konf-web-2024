import Image from 'next/image';
import Link from 'next/link';

import { NewsletterModals } from '../newsletter/newsletter-modals';
import { SocialButtons } from './social-buttons';

export function DesktopFooter() {
  return (
    <footer className='max-w-screen-2xl w-full mx-auto hidden md:flex p-10 justify-between items-center gap-10 flex-row'>
      <SocialButtons />
      <div className='absolute left-1/2 bottom-24 xl:bottom-auto -translate-x-1/2'>
        <NewsletterModals />
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
