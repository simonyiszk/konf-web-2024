import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import { Presentation } from '@/models/models';
import { dateToHourAndMinuteString } from '@/utils/dateHelper';
import slugify from '@/utils/slugify';

import uk from '../../../public/img/uk.svg';
import { Tile } from '../tiles/tile';

type PresentationProps = {
  presentation: Presentation;
  isFrontPage?: boolean | undefined;
};
export default async function Presentation({ presentation, isFrontPage }: PresentationProps) {
  const { title, description, presenter, imageUrls } = presentation;
  let time = '';
  if (presentation.startTime && presentation.endTime) {
    time = ` | ${dateToHourAndMinuteString(new Date(presentation.startTime))} - ${dateToHourAndMinuteString(
      new Date(presentation.endTime)
    )}`;
  }
  return (
    <Tile className={clsx(isFrontPage && 'sm:col-span-6')}>
      <Tile.Body>
        <div className='max-w-6xl w-full'>
          {!isFrontPage && (
            <h3 className='mb-5 w-fit hover:text-brand'>
              <Link href={`/presentations`}>
                <div className='flex items-center'>
                  <FaArrowLeft />
                  <p className='ml-1'>Vissza az előadásokhoz </p>
                </div>
              </Link>
            </h3>
          )}
          {!isFrontPage && (
            <div>
              <h1 className='mb-2 hyphens-auto sm:hyphens-none'>{title}</h1>
              <p className='mb-8 text-[25px] font-bold block md:hidden text-[#FFE500]'>{`${presentation.room}${time}`}</p>
            </div>
          )}
          <div className='flex flex-col md:flex-row gap-8'>
            {!isFrontPage && (
              <div>
                <p className='mb-8 text-[25px] font-bold hidden md:block text-[#FFE500]'>{`${presentation.room}${time}`}</p>
                <p className='text-stone-200 text-base sm:text-[20px] whitespace-pre-line'>{description}</p>
              </div>
            )}
            {isFrontPage && (
              <div>
                <p className='mb-2 text-3xl sm:text-[40px] font-bold leading-10'>{title}</p>
                <p className='mb-8 text-[22px] font-bold text-[#FFE500]'>{`${presentation.room}${time}`}</p>
                <p className='text-stone-200 text-base sm:text-[20px] whitespace-pre-line'>{description}</p>
                <div className='flex flex-col sm:flex-row'>
                  {imageUrls?.map((image) => {
                    return (
                      <Image
                        width={image.includes('KODEE') ? 75 : 259}
                        height={75}
                        quality={100}
                        key={image}
                        src={image}
                        alt='presentation images'
                        className='p-2 max-w-full max-h-[75px] object-contain mt-5'
                      />
                    );
                  })}
                </div>
              </div>
            )}
            <div
              className={clsx(
                'flex flex-col items-center flex-shrink-0 text-center md:max-w-sm  mt-8',
                isFrontPage ? 'order-none' : 'order-first',
                'md:order-last'
              )}
            >
              <Image
                width={384}
                height={384}
                quality={100}
                src={presenter.pictureUrl}
                className={clsx(
                  'object-cover rounded-3xl',
                  isFrontPage ? 'w-72 h-72 sm:w-[384px] sm:h-[384px]' : 'w-[250px] h-[250px] sm:w-[308px] sm:h-[308px]'
                )}
                alt='Presentation Image'
              />
              <p className='block mt-4 text-[32px] leading-tight font-bold text-white-900'>{presenter.name}</p>
              <p className='block mt-0.5 text-[20px]  text-[#FFE500]'>{presenter.rank}</p>
              {presenter.company && (
                <div className='mt-2 bg-white rounded-xl max-w-[308px] max-h-[75px] w-full'>
                  <Image
                    width={308}
                    height={75}
                    quality={100}
                    src={presenter.company.logoUrl}
                    alt='Company logo'
                    className='p-2 max-w-full max-h-[75px] object-fit m-auto'
                  />
                </div>
              )}
              {presentation.language === 'en' && (
                <div className='flex mt-2 gap-2'>
                  <Image src={uk} alt='Egyesült Királyság zászlója' width={50} height={25} className='rounded-xl' />
                  <p className='text-lg'>Az előadás angol nyelvű.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {isFrontPage && (
          <div className='flex flex-col md:flex-row gap-6 md:gap-16 items-center pt-6 justify-center'>
            <Link
              href={`/presentations/${slugify(presentation.title)}`}
              className='inline-flex items-center font-semibold text-xl text-white brand-link'
            >
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
            <Link
              href={'/presentations'}
              className='inline-flex items-center font-semibold text-xl text-white brand-link'
            >
              Összes előadás
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
