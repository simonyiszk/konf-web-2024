import { PromoVideoData } from '@/models/models';

import { Tile } from './tile';

type Props = {
  data: PromoVideoData;
};

export function PromoVideoTile({ data: { description, sectionTitle } }: Props) {
  return (
    <Tile className='sm:col-span-6'>
      <Tile.Body>
        <h2 className='text-5xl sm:text-6xl font-bold'>{sectionTitle}</h2>
        <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <p className='text-lg sm:text-xl font-medium text-justify w-full'>{description}</p>
          <video
            className='w-full aspect-[16/9]'
            controls
            preload='none'
            src='/video/promo_video.mp4'
            poster='/img/thumbnail.webp'
          ></video>
        </div>
      </Tile.Body>
    </Tile>
  );
}
