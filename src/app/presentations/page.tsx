import clsx from 'clsx';
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
  if (!data || !data.presentations) {
    notFound();
  }
  const presentations = data.presentations.sort((p1, p2) => p1.title.localeCompare(p2.title));

  return (
    <div className='flex flex-col max-w-6xl w-full px-6 xl:px-0'>
      <h1 className='mb-16 mt-8'>Előadások</h1>

      <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8'>
        {presentations.map((presentation) => (
          <Tile key={presentation.title} clickable>
            <Tile.Body lessPadding='[1px]'>
              <div className='flex flex-col h-full'>
                <Link className='h-full flex flex-col' href={`/presentations/${slugify(presentation.title)}`}>
                  <div>
                    <img
                      src={presentation.presenter.pictureUrl}
                      className='w-full aspect-square object-cover object-center rounded-[30px]'
                      alt='Presentation Image'
                    />
                    <div className='z-20 px-5 py-2 absolute text-center left-1/2 -translate-x-[50%] -translate-y-[50%] shadow-md rounded-xl overflow-hidden bg-[#FFE500]'>
                      {presentation.presenter.name.split(',').map((pName) => (
                        <p className='whitespace-nowrap min-w-[200px] sm:min-w-[240px]  text-2xl xs:text-xl sm:text-2xl text-black font-bold'>
                          {pName}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div
                    className={clsx(
                      'p-6 h-full flex items-center justify-center',
                      presentation.presenter.name.split(',').length > 1 && 'mt-6'
                    )}
                  >
                    <h2 className='text-center text-[24px] font-bold text-white pb-4'>{presentation.title}</h2>
                  </div>
                </Link>
              </div>
            </Tile.Body>
          </Tile>
        ))}
      </div>

      <h2 className='mt-20 text-center'>Az előadások listája még bővül!</h2>
    </div>
  );
}
