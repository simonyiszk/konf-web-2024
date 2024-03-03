'use client';
import clsx from 'clsx';
import { useState } from 'react';
import { MdLocationPin } from 'react-icons/md';

import { Map } from './map';

const map = [
  'Regisztrációs pult',
  'Bosch',
  'Nokia',
  'ICF Tech',
  'Sicontact',
  'Silicon Labs',
  'Interactive Brokers',
  'Paks II.',
  'Barré',
  'Nova',
  'KUKA',
  'OTP',
  'Knorr-Bremse',
  'SCHIS',
  'Paripa',
  'BME Suborbitals',
  'BME Formula Racing Team',
  'Schdesign',
  'Kir-dev',
  'SEM',
  'HA5KFU',
  'LEGO',
];

export function Floorplan() {
  const [active, setActive] = useState(0);
  return (
    <section className='container'>
      <h4 className='mb-4 text-center text-4xl font-black md:text-6xl lg:col-span-2 lg:text-8xl'>Térkép</h4>
      <div className='relative flex flex-col-reverse md:flex-row w-full rounded-lg justify-between gap-4 items-center'>
        <ol className='pl-3 text-center grid grid-cols-2 gap-4 md:block'>
          {map.map((name, i) => {
            return (
              <li key={name} className='text-lg'>
                <button
                  type='button'
                  className='group py-1 pl-1 text-left'
                  onClick={() => {
                    // if (ref.current) {
                    //   ref.current.scrollIntoView({
                    //     behavior: 'smooth',
                    //     inline: 'start',
                    //   });
                    // }
                    setActive(i);
                  }}
                >
                  {i == 0 ? 'R: Regisztrációs pult' : `${i}:  ${name}`}
                  <span>
                    <MdLocationPin
                      className={clsx(
                        'inline pb-1  group-hover:text-konf-accent-yellow',
                        active === i ? 'text-[#ffe500]' : 'text-white'
                      )}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className='pointer-events-none relative select-none bg-white/10 rounded-md flex-1 w-full md:w-fit p-8 max-w-[500px] flex flex-row justify-center items-center'>
          <Map active={active} />
        </div>
      </div>
    </section>
  );
}
