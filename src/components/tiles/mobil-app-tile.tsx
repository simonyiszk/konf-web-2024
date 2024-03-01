import { MobilAppData } from '@/models/models';

import { Tile } from './tile';

type Props = {
  data: MobilAppData;
};

export function MobilAppTile({ data }: Props) {
  return (
    <Tile className='sm:col-span-6 md:col-span-3'>
      <Tile.Body>
        <h2 className='text-3xl sm:text-[34px]'>KonferenciApp</h2>
        <div className='flex flex-col gap-4 lg:gap-0 lg:flex-row w-full justify-between mt-4 items-center'>
          <img src='img/app-screens.png' className='object-cover rounded-3xl h-[300px] mr-3' alt='Workshop Image' />
          <p className='text-stone-200 text-[20px] whitespace-pre-line w-full h-full items-center'>
            Töltsd le a mobil appot és kövesd a konferencia eseményeit élőben!
            {/* Tegyél fel kérdéseket az előadóknak, vagy
            tájékozódj az előadsok között */}
          </p>
        </div>
        <div className='w-full flex flex-row justify-center gap-10 items-center mt-4'>
          <a href={data.androidUrl} className='h-fit'>
            <img className='h-[57px]' src='img/google-play-badge-en.png' alt='Play Store' />
          </a>
          <a href={data.iosUrl}>
            <img className='h-[60px]' src='img/apple-store-en-black.svg' alt='Apple Store' />
          </a>
        </div>
      </Tile.Body>
    </Tile>
  );
}
