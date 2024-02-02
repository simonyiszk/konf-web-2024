import Link from 'next/link';

import { getIndexData } from '@/models/get-index-data';

export default async function Presentations() {
  const { presentations } = await getIndexData();

  return (
    <div className='flex flex-col px-6 xl:px-0'>
      <h1 className='mb-16 mt-8'>Előadások</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-16'>
        {presentations.map((presentation) => (
          <div className='flex flex-wrap justify-center'>
            <div className='w-full flex justify-center mb-16 md:mb-0'>
              <div className='relative w-full max-w-[384px] bg-[#101010] shadow-md rounded-lg overflow-hidden'>
                <Link href={`/presentations/${presentation.slug}`}>
                  <img src={presentation.presenter.pictureUrl} className='object-cover' alt='Presentation Image' />
                  <div className='p-4'>
                    <h2 className='text-center text-3xl font-bold text-blue-300 pb-4'>{presentation.title}</h2>
                    <h3 className='text-center text-3xl font-bold'>{presentation.presenter.name}</h3>
                    <p className='text-center text-2xl pb-5'>
                      {presentation.presenter.rank + ' @ ' + presentation.presenter.company?.name}
                    </p>
                    <p className='absolute bottom-0 left-0 m-2'>📌 {presentation.room}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
