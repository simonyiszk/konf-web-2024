'use client';
import clsx from 'clsx';
import { useRef, useState } from 'react';
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
  'Nova Services',
  'KUKA',
  'OTP Bank',
  'Knorr-Bremse',
  'Schönherz Iskolaszövetkezet',
  'PARIPA',
  'BME Suborbitals',
  'BME Formula Racing Team',
  'schdesign',
  'Kir-Dev',
  'SEM',
  'HA5KFU',
  'LEGO Kör',
];

export function Floorplan() {
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section className='container'>
      <h2 ref={ref} className='mb-4 text-center text-4xl lg:col-span-2'>
        Térkép
      </h2>
      <div className='relative flex flex-col-reverse mdx:flex-row w-full rounded-lg justify-center gap-8 mdx:gap-16 lg:gap-32 items-center'>
        <ol className='text-center mdx:text-start gap-4 mdx:block'>
          {map.map((name, i) => {
            return (
              <li key={name} className='text-lg'>
                <button
                  type='button'
                  className='group py-1 pl-1 '
                  onClick={() => {
                    if (ref.current && window.innerWidth < 940) {
                      ref.current.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'start',
                      });
                    }
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
        <div className='pointer-events-none relative select-none bg-white/10 rounded-md flex-1 w-full mdx:w-fit p-8 max-w-[500px] flex flex-row justify-center items-center'>
          <Map active={active} />
        </div>
      </div>
    </section>
  );
}
