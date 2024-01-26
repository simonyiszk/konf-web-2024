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
    setTimeout(() => setInterval(update, 1000), 1000);
  }, []);
  return (
    <div className='tile sm:col-span-3 p-10 flex flex-row items-center justify-center gap-4'>
      <p className='text-xl sm:text-2xl font-medium'>még</p>
      <div className='flex flex-col items-center'>
        <p className='text-3xl sm:text-4xl font-bold'>
          <span className='text-8xl'>{duration.months ? (duration.days ?? 0) + 30 : duration.days}</span> nap
        </p>
        <p className='text-3xl sm:text-4xl font-bold'>
          {duration.hours ? String(duration.hours).padStart(2, '0') : '00'}:
          {duration.minutes ? String(duration.minutes).padStart(2, '0') : '00'}:
          {duration.seconds ? String(duration.seconds).padStart(2, '0') : '00'}
        </p>
      </div>

      <p className='text-xl sm:text-2xl font-medium'>a konferenciáig!</p>
    </div>
  );
}
