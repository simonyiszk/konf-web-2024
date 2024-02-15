import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Tile } from '@/components/tiles/tile';
import { getIndexData } from '@/models/get-index-data';
import slugify from '@/utils/slugify';

export const metadata: Metadata = {
  title: 'Előadások',
  description:
    'Az előadások listája a XXI. Simonyi Konferencián, Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciáján.',
};

export default async function Presentations() {
  const data = await getIndexData();
  if (!data) {
    notFound();
  }
  const presentations = data.presentations.toSorted((p1, p2) => p1.presenter.name.localeCompare(p2.presenter.name));

  return (
    <div className='flex flex-col max-w-6xl w-full px-6 xl:px-0'>
      <h1 className='mb-16 mt-8'>Előadások</h1>

      <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8'>
        {presentations.map((presentation) => (
          <Tile key={presentation.title} clickable>
            <Tile.Body lessPadding='[1px]'>
              <div className='flex flex-col h-full'>
                <Link href={`/presentations/${slugify(presentation.title)}`}>
                  <div className='relative'>
                    <img
                      src={presentation.presenter.pictureUrl}
                      className='w-full aspect-square object-cover object-center rounded-[30px]'
                      alt='Presentation Image'
                    />
                    <div className='z-20 px-5 absolute text-center left-1/2 -translate-x-[50%] -translate-y-[50%] shadow-md rounded-xl overflow-hidden bg-[#FFE500]'>
                      <p className='pt-1 whitespace-nowrap min-w-[200px] sm:min-w-[240px] min-h-[36px] sm:min-h-[44px] text-2xl xs:text-xl sm:text-2xl text-black font-bold'>
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
