import Image from 'next/image';

import { Tile } from '@/components/tiles/tile';

export function MobilePromotionTile() {
  return (
    <>
      <Tile>
        <Tile.Body>
          <p>Maradj naprakész a KonferenciApp segítségével - a Simonyi Konferencia legújabb társa!</p>
          <p>
            Légy mindig képben a programtervvel, kapj valós idejű híreket, navigálj könnyedén interaktív térképek
            segítségével, és fedezd fel az egyéb izgalmas funkciókat, hogy még jobb legyen a konferencia élményed.
          </p>
          <p>Töltsd le most, és hozd ki a legtöbbet a Simonyi Konferenciából!</p>
          <div className='flex items-center'>
            <Image className='-ml-10 -mb-10' src='/img/question.png' alt='Kérdezés' height={200} width={200} />
            <p className='m-0'>
              Kérdezz az előadótól az alkalmazásban! Egy előadás oldalán található buborék ikonra kattintva máris a
              kérdezői felületre jutsz.
            </p>
          </div>
        </Tile.Body>
      </Tile>
      <Tile>
        <Tile.Body>
          <Image
            src='/img/konferenciapp.png'
            alt='KonferenciApp'
            width={500}
            height={509}
            className='h-72 w-auto mx-auto'
          />
        </Tile.Body>
      </Tile>
    </>
  );
}
