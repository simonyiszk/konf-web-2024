'use client';

import dynamic from 'next/dynamic';

import { Tile } from '../tile';

const CountdownTileImplementation = dynamic(() => import('./countdown-implementation'), { ssr: false });

export default function CountdownTile() {
  return (
    <Tile className='sm:col-span-3'>
      <Tile.Body className='flex flex-row flex-wrap items-center justify-center gap-4'>
        {CountdownTileImplementation && <CountdownTileImplementation />}
      </Tile.Body>
    </Tile>
  );
}
