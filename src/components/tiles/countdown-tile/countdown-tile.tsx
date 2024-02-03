'use client';

import { intervalToDuration } from 'date-fns';
import { useEffect, useState } from 'react';

import { CountDownElement } from '@/components/tiles/countdown-tile/countdown-element';

import { Tile } from '../tile';

export default function CountdownTile() {
  const target = new Date(1710846000000); // 2024. 03. 19. 12:00
  const [duration, setDuration] = useState(intervalToDuration({ start: new Date(), end: target }));
  const update = () => {
    if (target.getTime() > Date.now()) setDuration(intervalToDuration({ start: new Date(), end: target }));
  };
  useEffect(() => {
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Tile className='sm:col-span-3'>
      <Tile.Body className='flex flex-row flex-wrap items-center justify-center gap-4'>
        <CountDownElement value={duration.months ? (duration.days ?? 0) + 30 : duration.days} label='nap' />
        <CountDownElement value={duration.hours ? String(duration.hours).padStart(2, '0') : '00'} label='óra' />
        <CountDownElement value={duration.minutes ? String(duration.minutes).padStart(2, '0') : '00'} label='perc' />
        <CountDownElement value={duration.seconds ? String(duration.seconds).padStart(2, '0') : '00'} label='mp' />
      </Tile.Body>
    </Tile>
  );
}
