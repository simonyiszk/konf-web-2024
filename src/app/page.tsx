import Image from 'next/image';

import { metadata } from '@/app/layout';

import konfLogo from '../../public/img/konf.svg';

export default function Landing() {
  return (
    <>
      <div className='shadow-gloria rounded-full overflow-hidden'>
        <video className='h-full w-full' autoPlay playsInline loop controls={false}>
          <source src='/video/nebula.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col py-5 gap-5 p-5'>
        <Image src={konfLogo} alt='Simonyi Konferencia' className='w-full' />
        <p className='font-bold text-xl sm:text-2xl text-center'>{metadata.description}</p>
        <p className='font-semibold text-2xl sm:text-6xl'>24. 03. 19.</p>
      </div>
    </>
  );
}
