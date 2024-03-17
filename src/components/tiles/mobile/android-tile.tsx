import Image from 'next/image';

import { Tile } from '@/components/tiles/tile';

interface AndroidTileProps {
  androidUrl: string;
}

export function AndroidTile({}: AndroidTileProps) {
  return (
    <Tile>
      <Tile.Body className='space-y-8 text-center'>
        <h2>Android</h2>
        <Image
          className='opacity-50 mx-auto'
          src='/img/google-play.png'
          alt='Letölthető Android APK'
          width={250}
          height={40}
        />
        <p>Sajnáljuk, de az Android alkalmazás még nem érhető el a Google Play Áruházban.</p>
        <p>További információkért látogass el a Kir-Dev standjához!</p>
      </Tile.Body>
    </Tile>
  );
}
