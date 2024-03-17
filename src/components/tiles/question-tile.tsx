'use client';
import { PresentationWithDates } from '@/models/models';
import { getCurrentDate } from '@/utils/dateHelper';

import { PresentationTile } from '../presentation/PresentationGrid';

type Props = {
  presentations: PresentationWithDates[];
  room: 'IB028' | 'IB025';
};

export function RoomQuestion({ presentations, room }: Props) {
  const now = getCurrentDate();
  const presentation = presentations.find((p) => p.room === room && p.startDate < now && p.endDate > now);
  return (
    <div className='sm:col-span-2 lg:col-span-1'>
      {presentation ? (
        <PresentationTile presentation={presentation} preview />
      ) : (
        <p className='text-stone-200 text-base sm:text-[20px] text-center'>
          Jelenleg nincs előadás ebben a teremben, nézz vissza később!
        </p>
      )}
    </div>
  );
}
