import Image from 'next/image';

import { Organiser } from '@/models/models';

import { Tile } from './tile';

type Props = Organiser;

export function OrganiserTile({ name, emailAddress, pictureUrl, rank }: Props) {
  return (
    <Tile>
      <Tile.Body lessPadding='3'>
        <div className='flex flex-col h-full'>
          <Image
            src={pictureUrl}
            width={500}
            height={500}
            quality={100}
            className='w-full aspect-square object-cover object-center'
            alt={`${name} profilképe`}
          />
          <div className='rounded-b-[30px] pt-4 px-3 pb-9 flex flex-col h-full gap-2 bg-[#101010]'>
            <h2 className='text-center text-3xl font-bold'>{name}</h2>
            <p className='text-center text-2xl'>{rank}</p>
            <p className='text-center text-base sm:text-sm md:text-base lg:text-sm xl:text-base text-[#FFE500]'>
              {emailAddress}
            </p>
          </div>
        </div>
      </Tile.Body>
    </Tile>
  );
}
