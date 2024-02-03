import { Organiser } from '@/models/models';

import { Tile } from './tile';

type Props = Organiser;

export function OrganiserTile({ name, emailAddress, pictureUrl, rank }: Props) {
  return (
    <Tile>
      <Tile.Body hidePadding>
        <img src={pictureUrl} className='w-full aspect-square object-cover object-center' />
        <div className='rounded-b-[30px] pt-4 px-3 pb-9 grid grid-cols-1 gap-2 bg-[#101010]'>
          <h2 className='text-center text-3xl font-bold'>{name}</h2>
          <p className='text-center text-2xl'>{rank}</p>
          <p className='text-center text-base text-[#FFE500]'>{emailAddress}</p>
        </div>
      </Tile.Body>
    </Tile>
  );
}
