import { Organiser } from '@/models/models';

import { Tile } from './tile';

type Props = Organiser;

export function OrganiserTile({ name, emailAddress, pictureUrl, rank }: Props) {
  return (
    <Tile>
      <Tile.Body lessPadding='3'>
        <div className='flex flex-col h-full'>
          <img alt={name} src={pictureUrl} className='w-full aspect-square object-cover object-center' />
          <div className='rounded-b-[30px] pt-4 px-3 pb-7 flex flex-col justify-between h-full gap-2 bg-[#101010]'>
            <h2 className='text-center text-3xl lg:text-2xl font-bold'>{name}</h2>
            <div className='flex flex-col gap-2'>
              <p className='text-center text-2xl lg:text-xl'>{rank}</p>
              <p className='text-center text-base sm:text-sm md:text-base lg:text-sm xl:text-base text-[#FFE500]'>
                {emailAddress}
              </p>
            </div>
          </div>
        </div>
      </Tile.Body>
    </Tile>
  );
}
