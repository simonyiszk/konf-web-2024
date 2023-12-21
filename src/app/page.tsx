import Image from 'next/image';

import { metadata } from '@/app/layout';
import { SocialButtons } from '@/components/footer/social-buttons';
import { NewsletterModals } from '@/components/newsletter/newsletter-modals';

import konfLogo from '../../public/img/konf.svg';

export default function Landing() {
  return (
    <>
      <div className='p-10 relative'>
        <div className='max-w-md md:max-w-xl relative shadow-gloria rounded-full overflow-hidden mx-auto'>
          <video className='h-full w-full' autoPlay playsInline loop muted>
            <source src='/video/nebula.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col gap-5 p-5'>
          <Image src={konfLogo} alt='Simonyi Konferencia' className='w-full drop-shadow-hero' />
          <p className='font-bold text-xl sm:text-2xl text-center hero-text-shadow'>{metadata.description}</p>
          <p className='font-semibold text-4xl sm:text-6xl hero-text-shadow'>24. 03. 19.</p>
        </div>
      </div>
      <div className='flex md:hidden flex-col items-center gap-10 mt-10'>
        <SocialButtons />
        <NewsletterModals />
      </div>
    </>
  );
}
