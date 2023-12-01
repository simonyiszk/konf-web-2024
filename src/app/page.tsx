<<<<<<< dev
import Image from 'next/image';

import { metadata } from '@/app/layout';

import konfLogo from '../../public/img/konf.svg';
=======
'use client';
import { useState } from 'react';

import { KirDevLogo } from '@/components/kir-dev-logo/KirDevLogo';
>>>>>>> solution with google groups api - 403

export default function Landing() {
  const [email, setEmail] = useState('');
  const onSubscribe = async () => {
    const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
    console.log(res);
  };
  return (
<<<<<<< dev
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
=======
    <main className='flex flex-col gap-10 justify-center items-center h-full'>
      <h1 className='text-center'>XXI. Simonyi Konferencia</h1>
      <p className='text-center'>A weboldal fejlesztése folyamatban, szíves türelmed kérjük.</p>
      <div className='flex justify-between items-center gap-2'>
        <input className='text-black' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
        <button onClick={onSubscribe} className='bg-white text-black rounded-md p-3'>
          Feliratkozás
        </button>
      </div>
      <KirDevLogo variant='light' />
    </main>
>>>>>>> solution with google groups api - 403
  );
}
