'use client';
import { useEffect, useState } from 'react';

import { BreakWithDates, PresentationWithDates } from '@/models/models';

import { PresentationTile } from '../presentation/PresentationGrid';

type Props = {
  presentations: (PresentationWithDates | BreakWithDates)[];
  room: 'IB028' | 'IB025';
  delay: number;
};
const MARGIN_MINUTES = 10;

export function RoomQuestion({ presentations, room, delay }: Props) {
  const [now, setNow] = useState(new Date(0));

  useEffect(() => {
    setNow(getNow(delay));
    const id = setInterval(() => setNow(getNow(delay)), 30000);
    return () => clearInterval(id);
  }, []);

  const presentationInRoom = presentations.filter((p) => {
    const endDateWithMargin = new Date(p.endDate);
    endDateWithMargin.setMinutes(endDateWithMargin.getMinutes() + MARGIN_MINUTES);
    return p.room === room && !p.placeholder && p.startDate < now && endDateWithMargin > now;
  });
  return presentationInRoom.length > 0 ? (
    <div className='flex flex-col gap-4'>
      {presentationInRoom.reverse().map((p) => (
        <PresentationTile presentation={p} key={p.slug} preview />
      ))}
    </div>
  ) : (
    <p className='text-stone-200 text-base sm:text-[20px] text-center'>
      Jelenleg nincs előadás ebben a teremben, nézz vissza később!
    </p>
  );
}

function getNow(delay: number): Date {
  const now = new Date();
  now.setMinutes(now.getMinutes() - delay);
  return now;
}
