import Link from 'next/link';

import { Tile } from './tile';

export function WorkshopTile() {
  return (
    <Tile className='sm:col-span-6 md:col-span-3'>
      <Tile.Body>
        <h2 className='text-3xl sm:text-[34px]'>A 21. század műanyaga az AI</h2>
        <div className='flex flex-col gap-4 lg:gap-0 lg:flex-row w-full justify-between mt-4'>
          <p className='text-stone-200 text-[20px] whitespace-pre-line w-full'>
            2 órás gyakorlati workshop, amiben bemutatásra kerül a neurális hálók működése, eddig megismert
            tulajdonságaik, valamint a ma népszerű nagy nyelvi modellek biztonsági és etikai szempontjai.
          </p>

          <div className='flex flex-col items-center w-full'>
            <img
              src='https://konf-api.kir-dev.hu/cdn/public/MEDVE_U6Y7SQZJ4HNQ.webp'
              className='object-cover rounded-3xl w-[200px] h-[200px]'
              alt='Workshop Image'
            />
            <p className='block mt-4 text-[20px] leading-tight font-bold text-white-900 text-center'>
              Bartos-Elekes Miklós
            </p>
            <p className='block mt-0.5 text-[14px]  text-[#FFE500]'>LEGO Kör MI projektvezető</p>
          </div>
        </div>
        <div className='flex w-full justify-center mt-8'>
          <Link href='/workshop' className='inline-flex items-center font-semibold text-xl text-white brand-link'>
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
      </Tile.Body>
    </Tile>
  );
}
