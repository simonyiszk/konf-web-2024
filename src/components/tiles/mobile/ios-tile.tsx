import Image from 'next/image';
import Link from 'next/link';

import { Tile } from '@/components/tiles/tile';

interface IosTileProps {
  iosUrl: string;
}

export function IosTile({ iosUrl }: IosTileProps) {
  return (
    <Tile>
      <Tile.Body className='space-y-8 text-center'>
        <h2>iOS</h2>
        <Link className='mx-auto block w-fit' href={iosUrl}>
          <Image src='/img/appstore.svg' alt='Letölthető az AppStore-ból' width={302} height={80} />
        </Link>
      </Tile.Body>
    </Tile>
  );
}
