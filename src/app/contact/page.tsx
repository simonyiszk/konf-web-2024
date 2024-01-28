import Link from 'next/link';

import { getIndexData } from '@/models/get-index-data';

export default async function asyncontact() {
  const { organisers } = await getIndexData();
  const sortedOrganizers = organisers.sort((o) => o.priority);

  return (
    <div className='flex flex-col px-6 xl:px-0'>
      <h1 className='mb-16 mt-8'>Kapcsolat</h1>

      <Link
        href='mailto:konferencia@simonyi.bme.hu'
        className='my-8 text-xl sm:text-2xl md:text-3xl font-semibold text-center hover:text-brand'
        target='blank'
      >
        konferencia@simonyi.bme.hu
      </Link>

      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-16'>
        {sortedOrganizers.map((organiser) => (
          <div className='w-[384px]'>
            <img src={organiser.pictureUrl} className='rounded-t-[30px] w-full h-[384px]' />
            <div className='rounded-b-[30px] pt-4 px-3 pb-9 grid grid-cols-1 gap-2 bg-[#101010]'>
              <h2 className='text-center text-3xl font-bold'>{organiser.name}</h2>
              <p className='text-center text-2xl'>{organiser.rank}</p>
              <p className='text-center text-base text-[#FFE500]'>{organiser.emailAddress}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
