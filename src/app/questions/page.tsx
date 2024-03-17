import { RoomQuestion } from '@/components/tiles/question-tile';
import { getPresentationData } from '@/models/get-presentation-data';

export default async function questionsPage() {
  const presentations = await getPresentationData();
  return (
    <div className='flex flex-col px-4 sm:px-6 xl:px-0 max-w-6xl w-full overflow-hidden'>
      <h1 className='mb-16 mt-8'>Kérdezz az elődóktól!</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div className='sm:col-span-2 lg:col-span-1'>
          <h2 className='sm:text-3xl md:text-4xl text-center'>IB028</h2>
        </div>
        <div className='sm:col-span-2 lg:col-span-1'>
          <h2 className='sm:text-3xl md:text-4xl text-center'>IB025</h2>
        </div>
        <RoomQuestion presentations={presentations ?? []} room='IB028' />
        <RoomQuestion presentations={presentations ?? []} room='IB025' />
      </div>
    </div>
  );
}
