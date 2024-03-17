import Image from 'next/image';

import { Tile } from '@/components/tiles/tile';

export function MobilePromotionTile() {
  return (
    <>
      <Tile>
        <Tile.Body>
          <p className='mb-2'>Maradj naprakész a KonferenciApp segítségével - a Simonyi Konferencia legújabb társa!</p>
          <p className='mb-2'>
            Légy mindig képben a programtervvel, kapj valós idejű híreket, navigálj könnyedén interaktív térképek
            segítségével, és fedezd fel az egyéb izgalmas funkciókat, hogy még jobb legyen a konferencia élményed.
          </p>
          <p className='mb-2'>Töltsd le most, és hozd ki a legtöbbet a Simonyi Konferenciából!</p>
          <p className='mb-2'>
            <strong>Kérdezz az előadótól az alkalmazásban!</strong> Egy előadás oldalán található buborék ikonra
            kattintva máris a kérdezői felületre jutsz.
          </p>
          <Image className='mx-auto -mb-10' src='/img/question.png' alt='Kérdezés' height={600} width={282} />
        </Tile.Body>
      </Tile>
      <Tile>
        <Tile.Body className='flex items-center justify-center'>
          <Image src='/img/konferenciapp.png' alt='KonferenciApp' width={500} height={509} className='h-80 w-auto' />
        </Tile.Body>
      </Tile>
    </>
  );
}
