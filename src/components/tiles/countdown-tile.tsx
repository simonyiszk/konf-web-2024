'use client';

import { intervalToDuration } from 'date-fns';
import { useEffect, useState } from 'react';

export function CountdownTile() {
  const target = new Date(1710846000000); // 2024. 03. 19. 12:00
  const [duration, setDuration] = useState(intervalToDuration({ start: new Date(), end: target }));
  const update = () => {
    if (target.getTime() > Date.now()) setDuration(intervalToDuration({ start: new Date(), end: target }));
  };
  useEffect(() => {
    setTimeout(() => setInterval(update, 1000), 2000);
  }, []);
  return (
    <div className='tile sm:col-span-3 p-10 flex flex-row flex-wrap items-center justify-center gap-4'>
      <div className='flex flex-col items-center'>
        <p className='text-6xl font-bold'>{duration.months ? (duration.days ?? 0) + 30 : duration.days}</p>
        <p className='text-xl sm:text-2xl'>nap</p>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-6xl font-bold'>{duration.hours ? String(duration.hours).padStart(2, '0') : '00'}</p>
        <p className='text-xl sm:text-2xl'>óra</p>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-6xl font-bold'>{duration.minutes ? String(duration.minutes).padStart(2, '0') : '00'}</p>
        <p className='text-xl sm:text-2xl'>perc</p>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-6xl font-bold'>{duration.seconds ? String(duration.seconds).padStart(2, '0') : '00'}</p>
        <p className='text-xl sm:text-2xl'>mp</p>
      </div>
    </div>
  );
}
