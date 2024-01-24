import Link from 'next/link';

import { IndexPageData } from '@/models/models';

async function getIndexData(): Promise<IndexPageData> {
  const res = await fetch(`${process.env.BACKEND_URL}/conference/index`);
  if (!res.ok) {
    throw new Error(res.status.toString());
  }
  return res.json();
}

export default async function asyncontact() {
  const { organisers } = await getIndexData();
  // TODO sort by priority
  const a = organisers.sort((o) => o.priority);
  const org = [
    ...organisers,
    ...organisers,
    ...organisers,
    ...organisers,
    ...organisers,
    ...organisers,
    ...organisers,
    ...organisers,
    ...organisers,
    ...organisers,
    ...organisers,
  ];
  return (
    <div className='flex flex-col'>
      <h1 className='mb-[74px]'>Kapcsolat</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-16'>
        {org.map((organiser) => (
          <div className='w-[384px]'>
            <img src={organiser.pictureUrl} className='rounded-t-[30px] w-full h-[384px]' />
            <div className='rounded-b-[30px] pt-[18px] px-[49px] pb-[38px] grid grid-cols-1 gap-2 bg-[#101010]'>
              <h2 className='text-center text-3xl font-bold'>{organiser.name}</h2>
              <p className='text-center text-2xl'>{organiser.rank}</p>
              <p className='text-center text-base text-[#FFE500]'>{organiser.emailAddress}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        href='mailto:konferencia@simonyi.bme.hu'
        className='mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-center hover:text-brand'
        target='blank'
      >
        konferencia@simonyi.bme.hu
      </Link>
    </div>
  );
}
