import Link from 'next/link';

import { GiveawayData } from '@/models/models';

import { Tile } from './tile';

type Props = {
  data: GiveawayData;
  showLink?: boolean;
};

export function GiveawayTile({ data: { description, sectionTitle, pictureUrl }, showLink = true }: Props) {
  const [preText, shinyText, postText] = description.split('***');
  return (
    <Tile className='sm:col-span-6'>
      <Tile.Body>
        <h2 className='text-5xl sm:text-6xl font-bold'>{sectionTitle}</h2>
        <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div>
            <p className='text-lg sm:text-xl font-medium text-justify w-full'>{preText}</p>
            <h3 className='text-5xl sm:text-6xl font-bold text-[#FFE500]'>{shinyText}</h3>
            <p className='text-lg mb-8 sm:text-xl font-medium text-justify w-full'>{postText}</p>
            {showLink && (
              <Link className='text-2xl font-medium underline' href='/giveaway'>
                További részleteket itt találsz
              </Link>
            )}
          </div>
          <img className='w-full aspect-[16/9]' src={pictureUrl} />
        </div>
      </Tile.Body>
    </Tile>
  );
}
