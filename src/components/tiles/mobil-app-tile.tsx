import Link from 'next/link';

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
          <img src='/img/konferenciapp.png' className='object-cover rounded-3xl h-[300px] mr-3' alt='App screens' />
          <p className='text-stone-200 text-[20px] whitespace-pre-line w-full h-full items-center'>
            Töltsd le a mobil appot, hogy élőben követhesd a konferencia eseményeit és kérdezhess az előadóktól!
          </p>
        </div>
        <div className='w-full flex lg:flex-row flex-col justify-center lg:gap-10 gap-4 items-center mt-4'>
          <a href={data.iosUrl} target='_blank'>
            <img className='h-[60px] min-w-[180]' src='/img/appstore.svg' alt='App Store' />
          </a>
        </div>
        <Link
          href='/mobile'
          className='mt-6 inline-flex w-full justify-center items-center font-semibold text-xl text-white brand-link'
        >
          Részletek
          <svg
            className=' w-2.5 h-2.5 ms-2 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 9 4-4-4-4' />
          </svg>
        </Link>
      </Tile.Body>
    </Tile>
  );
}
