import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Tile } from '@/components/tiles/tile';
import { getIndexData } from '@/models/get-index-data';

export default async function Presentations() {
  const data = await getIndexData();
  if (!data) {
    redirect('/error');
  }

  return (
    <div className='flex flex-col max-w-6xl w-full px-6 xl:px-0'>
      <h1 className='mb-16 mt-8'>Előadások</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {data.presentations.map((presentation) => (
          <Tile key={presentation.title} clickable>
            <Tile.Body padding={0}>
              <div className='flex flex-col h-full'>
                <Link href={`/presentations/${presentation.slug}`}>
                  <div className='relative'>
                    <img
                      src={presentation.presenter.pictureUrl}
                      className='w-full aspect-square object-cover object-center rounded-b-[30px]'
                      alt='Presentation Image'
                    />
                    <div className='z-20 px-5 absolute text-center left-1/2 -translate-x-[50%] -translate-y-[50%] shadow-md rounded-xl overflow-hidden bg-[#FFE500]'>
                      <p className='pt-1 whitespace-nowrap min-w-[260px] min-h-[44px] text-[24px] text-black font-bold'>
                        {presentation.presenter.name}
                      </p>
                    </div>
                  </div>
                  <div className='p-6'>
                    <h2 className='text-center text-[24px] font-bold text-white pb-4'>{presentation.title}</h2>
                  </div>
                </Link>
              </div>
            </Tile.Body>
          </Tile>
        ))}
      </div>
    </div>
  );
}
