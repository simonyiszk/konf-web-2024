import Link from 'next/link';

import { Tile } from '@/components/tiles/tile';
import { YoutubeVideo } from '@/components/youtube-video';

type Props = {
  title: string;
  youtubeUrl: string;
  link?: string;
};
export function YoutubeVideoTile({ title, youtubeUrl, link }: Props) {
  return (
    <Tile className='sm:col-span-6 lg:col-span-3'>
      <Tile.Body>
        <h2 className='sm:text-2xl md:text-3xl text-center mb-5 capitalize'>{title}</h2>
        <div className='sm:w-full md:w-6/7 mx-auto mt-2'>
          <YoutubeVideo title={title} url={youtubeUrl} />
        </div>
        {link && (
          <div className='flex justify-center pt-8'>
            <Link href={link} className='inline-flex items-center font-semibold text-2xl text-white brand-link'>
              Részletek
              <svg
                className=' w-2.5 h-2.5 ms-2 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
            </Link>
          </div>
        )}
      </Tile.Body>
    </Tile>
  );
}
