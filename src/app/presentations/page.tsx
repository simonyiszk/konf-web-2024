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
              <div className='relative w-[410px] h-[598px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-[#010101] shadow-md border-[1px] rounded-3xl overflow-hidden'>
                <Link href={`/presentations/${presentation.slug}`}>
                  <img
                    src={presentation.presenter.pictureUrl}
                    className='object-cover w-full h-[410px] rounded-3xl'
                    alt='Presentation Image'
                  />
                  <div className='z-20 absolute text-center top-2/3 left-1/2 -translate-x-[50%] -translate-y-[30%] shadow-md rounded-xl overflow-hidden bg-[#FFE500]'>
                    <p className='pt-1 min-w-[260px] min-h-[44px] text-[24px] text-black font-bold'>
                      {presentation.presenter.name}
                    </p>
                  </div>
                  <div className='p-6'>
                    <h2 className='text-center text-[24px] font-bold text-white pb-4'>{presentation.title}</h2>
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
