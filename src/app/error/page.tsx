'use client';
import Link from 'next/link';

import { WhiteButton } from '@/components/white-button';

export default function error() {
  return (
    <div className='px-6 xl:px-0 max-w-6xl w-full'>
      <h1 className='mb-16 mt-8'>Hiba</h1>
      <div className='w-full flex flex-col gap-4 items-center'>
        <p className='text-xl font-semibold'>Sajnos nem várt hiba történt, kérlek próbáld újra később!</p>
        <Link href='/'>
          <WhiteButton onClick={() => {}}>Újrapróbálom</WhiteButton>
        </Link>
      </div>
    </div>
  );
}
