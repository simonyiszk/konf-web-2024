import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PresentationGrid } from '@/components/presentation/PresentationGrid';
import { getPresentationData } from '@/models/get-presentation-data';
import { PresentationWithDates } from '@/models/models';

export const metadata: Metadata = {
  title: 'Előadások',
  description:
    'Az előadások listája a XXI. Simonyi Konferencián, Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciáján.',
};

export default async function Presentations() {
  const presentations = await getPresentationData();
  if (!presentations) {
    notFound();
  }
  const [startDate, endDate] = getStartAndEndDates(presentations);
  return (
    <div className='flex flex-col max-w-6xl w-full px-4 sm:px-6 xl:px-0 relative'>
      <h1 className='mb-16 mt-8'>Előadások</h1>
      <PresentationGrid presentations={presentations} endDate={endDate} startDate={startDate} />
      <h2 className='mt-20 text-center'>Az előadások listája még bővül!</h2>
    </div>
  );
}

function getStartAndEndDates(presentations: PresentationWithDates[]): [number, number] {
  const endDates = presentations.map((presentations) => presentations.endDate.getTime());
  const startDates = presentations.map((presentation) => presentation.startDate.getTime());
  return [Math.min(...startDates), Math.max(...endDates)];
}
