import Image from 'next/image';
import Link from 'next/link';

import { Tile } from '@/components/tiles/tile';

interface AndroidTileProps {
  androidUrl: string;
}

export function AndroidTile({ androidUrl }: AndroidTileProps) {
  return (
    <Tile>
      <Tile.Body className='space-y-8 text-center'>
        <h2>Android</h2>
        <Link className='mx-auto w-fit block' href={androidUrl}>
          <Image src='/img/androidapk.svg' alt='Letölthető Android APK' width={302} height={80} />
        </Link>
        <p>
          Az APK fájlt letöltve és megnyitva telepítheted az alkalmazást az Androidos eszközödre. A telepítés
          előtt/közben az "Ismeretlen forrásból származó alkalmazások engedélyezése" opciót be kell kapcsolni a
          beállításokban.
        </p>
      </Tile.Body>
    </Tile>
  );
}
