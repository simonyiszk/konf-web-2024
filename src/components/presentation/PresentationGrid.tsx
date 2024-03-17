'use client';

import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { CSSProperties, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { sendQuestion } from '@/app/actions';
import { Tile } from '@/components/tiles/tile';
import { PresentationWithDates, SponsorCategory } from '@/models/models';
import { dateToHourAndMinuteString } from '@/utils/dateHelper';
import slugify from '@/utils/slugify';

import { WhiteButton } from '../white-button';

const TimespanUnit = 15 * 60 * 1000; // fifteen minutes
const TimespanUnitHeight = 'minmax(5rem, auto)';

export function PresentationGrid({
  presentations,
  startDate,
  endDate,
}: {
  presentations: PresentationWithDates[];
  startDate: number;
  endDate: number;
}) {
  const fullTimespan = Math.abs(endDate - startDate);
  const allGridRows = Math.ceil(fullTimespan / TimespanUnit);

  const gridRef = useRef<HTMLUListElement | null>(null);
  return (
    <>
      <div className='flex sticky left-0 top-28 z-10 md:ml-24 flex-row justify-around rounded-b-md mb-8'>
        <button
          className='rounded-md backdrop-blur-md bg-white bg-opacity-[0.15] py-4 px-6 font-bold text-lg'
          type='button'
          onClick={() =>
            gridRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'start',
            })
          }
        >
          IB028
        </button>
        <button
          className='rounded-md backdrop-blur-md bg-white bg-opacity-[0.15] py-4 px-6 font-bold text-lg'
          type='button'
          onClick={() =>
            gridRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'end',
            })
          }
        >
          IB025
        </button>
      </div>

      <div className='overflow-x-auto no-scrollbar flex'>
        <ul
          ref={gridRef}
          className='presentation-grid snap-x snap-proximity'
          style={{
            gridTemplateRows: `repeat(${allGridRows}, ${TimespanUnitHeight})`,
          }}
        >
          {presentations.map((presentation) => (
            <li
              key={presentation.slug}
              className={clsx('w-full px-1 pb-4', presentation.room == 'IB028' && 'pr-4')}
              style={getPresentationCellStyles(startDate, presentation)}
            >
              {presentation.placeholder ? (
                <PresentationTile presentation={presentation} />
              ) : (
                <Link href={`/presentations/${slugify(presentation.title)}`}>
                  <PresentationTile presentation={presentation} />
                </Link>
              )}
            </li>
          ))}
          {[...timeMarkerGenerator(startDate, endDate)].map((markerDate) => (
            <TimeMarker key={markerDate.toString()} markerDate={markerDate} startDate={startDate} />
          ))}
        </ul>
      </div>
    </>
  );
}

export function PresentationTile({
  presentation,
  preview = false,
}: {
  presentation: PresentationWithDates;
  preview?: boolean;
}) {
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSend = async () => {
    if (question.trim()) {
      setIsLoading(true);
      const status = await sendQuestion({ question, slug: presentation.slug });
      setIsLoading(false);
      switch (status) {
        case 201:
          setIsSuccessOpen(true);
          setQuestion('');
          break;
        case 400:
          setError('Hibás formátum!');
          break;
        default:
          setError('Ismeretlen hiba!');
      }
    }
  };

  return (
    <>
      <Tile clickable={!presentation.placeholder && !preview} className='w-full h-full' disableMinHeight={true}>
        <Tile.Body lessPadding='5' className='flex flex-col'>
          <span className='pb-2 text-xs'>
            {presentation.room !== 'BOTH' && `${presentation.room}  | `}
            {dateToHourAndMinuteString(presentation.startDate)} - {dateToHourAndMinuteString(presentation.endDate)}
          </span>
          <div className='flex flex-col justify-center flex-1'>
            <div className={clsx('flex', presentation.placeholder && 'justify-around')}>
              <h2
                className={clsx(
                  'text-lg lg:text-xl font-medium',
                  !presentation.presenter ? 'text-center pb-4' : 'pb-4 lg:pb-6'
                )}
              >
                {presentation.title}
              </h2>
              {presentation.room === 'BOTH' && presentation.placeholder && (
                <h2
                  aria-hidden={true}
                  className={clsx(
                    'text-lg lg:text-xl pb-4 lg:pb-6 font-medium',
                    !presentation.presenter && 'text-center'
                  )}
                >
                  {presentation.title}
                </h2>
              )}
            </div>
            {!!presentation.presenter && (
              <div className='flex gap-4'>
                <img
                  src={presentation.presenter.pictureUrl}
                  className='object-cover rounded-3xl w-16 h-16'
                  alt='Presentation Image'
                />
                <div>
                  <h3 className='text-lg lg:text-2xl font-bold text-[#FFE500]'>{presentation.presenter.name}</h3>
                  <div className='text-xs lg:text-sm'>{presentation.presenter.rank}</div>
                  <div className='hidden lg:block text-xs pt-0.5'>{presentation.presenter.company?.name}</div>
                </div>
              </div>
            )}
            {presentation.presenter?.company?.category === SponsorCategory.MAIN_SPONSOR && !preview && (
              <p className='mt-2 text-base whitespace-pre-line'>{presentation.description.split('\n')[0]}</p>
            )}
            {preview && (
              <div className='mt-10 w-full'>
                <textarea
                  className='w-full rounded-md p-2 bg-transparent border-white border-[0.5px]'
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows={4}
                  placeholder='Ide írd a kérdésed!'
                />
                {error && <p className='text-red-500 my-2'>{error}</p>}
                <div className='w-full my-4 flex justify-center'>
                  <WhiteButton onClick={onSend} disabled={!question.trim() || isLoading}>
                    Kérdés küldése
                  </WhiteButton>
                </div>
              </div>
            )}
          </div>
        </Tile.Body>
      </Tile>
      <Dialog open={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} className='relative z-50'>
        <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <Dialog.Panel className='mx-auto max-w-lg rounded bg-[#0f181c] p-8 flex flex-col items-center gap-5'>
            <div className='text-8xl text-white'>
              <FaCheckCircle />
            </div>
            <Dialog.Title className='font-bold text-2xl mb-5 text-center'>
              A kérdésed megkaptuk és moderálás után a felolvasandó kérdések közé kerül. Köszönjük!
            </Dialog.Title>

            <WhiteButton onClick={() => setIsSuccessOpen(false)}>Rendben</WhiteButton>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

const TimeMarkerStepSize = 30 * 60 * 1000; // half an hour

function TimeMarker({ markerDate, startDate }: { markerDate: Date; startDate: number }) {
  const rowStart = getTimeRowPositionInGrid(markerDate.getTime(), startDate) + 1;
  const rowEnd = rowStart + Math.floor(TimeMarkerStepSize / TimespanUnit) - 1;
  return (
    <li
      aria-hidden={true}
      className={clsx('snap-start hidden pr-4 md:block', rowStart > 1 && '-translate-y-10')}
      style={{ gridRowStart: rowStart, gridRowEnd: rowEnd }}
    >
      <Tile disableMinHeight={true}>
        <Tile.Body lessPadding='4'>{dateToHourAndMinuteString(markerDate)}</Tile.Body>
      </Tile>
    </li>
  );
}

function* timeMarkerGenerator(startDate: number, endDate: number): Generator<Date> {
  const end = Math.floor(endDate / TimeMarkerStepSize) * TimeMarkerStepSize;
  let currentMarker = Math.ceil(startDate / TimeMarkerStepSize) * TimeMarkerStepSize;
  while (currentMarker <= end) {
    yield new Date(currentMarker);
    currentMarker += TimeMarkerStepSize;
  }
}

function getTimeRowPositionInGrid(time: number, startDate: number) {
  return Math.floor((time - startDate) / TimespanUnit);
}

function getPresentationCellStyles(startDate: number, presentation: PresentationWithDates): CSSProperties {
  const cellStart = getTimeRowPositionInGrid(presentation.startDate.getTime(), startDate);
  const cellEnd = getTimeRowPositionInGrid(presentation.endDate.getTime(), startDate);
  let columLocation: CSSProperties = { gridColumnStart: 2, gridColumnEnd: 4 };
  switch (presentation.room) {
    case 'IB028':
      columLocation = { gridColumnStart: 2, gridColumnEnd: 3 };
      break;
    case 'IB025':
      columLocation = { gridColumnStart: 3, gridColumnEnd: 4 };
      break;
  }
  return { ...columLocation, gridRowStart: cellStart + 1, gridRowEnd: cellEnd + 1 };
}
