import { Metadata } from 'next';
import Image from 'next/image';

import { Tile } from '@/components/tiles/tile';

export const metadata: Metadata = {
  title: 'A 21. század műanyaga az AI - Workshop',
  description: 'Bartos-Elekes Miklós "A 21. század műanyaga az AI" című workshopja a XXI. Simonyi Konferencián',
};

export default function WorkshopPage() {
  return (
    <div className='max-w-6xl w-full px-4 sm:px-6 xl:px-0 mt-10 overflow-hidden'>
      <Tile>
        <Tile.Body>
          <div>
            <h1 className='mb-2 text-3xl sm:text-4xl md:text-[42px]'>A 21. század műanyaga az AI - Workshop</h1>
            <p className='mb-16 text-[22px] font-bold block lg:hidden text-[#FFE500]'>IB110 | 14:30-16:30</p>
          </div>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div>
              <p className='mb-8 text-[22px] font-bold hidden lg:block text-[#FFE500]'>IB110 | 14:30-16:30</p>
              <p className='text-stone-200 text-base sm:text-[20px] whitespace-pre-line'>
                A 21. század műanyaga a mesterséges intelligencia. Már előreláthatólag el fog árasztani mindent, és
                lépésről lépésre fel kell fedezzük (a mérnökök és a felhasználók) a tulajdonságait, hogy az általános
                használata milyen előnyökkel és hátrányokkal jár együtt. 2 órás gyakorlati workshopomban a résztvevőkkel
                együtt bemutatom a neurális hálók működését, eddig megismert tulajdonságait. Felépítünk egy kisebb
                képfelismerő hálót, majd a hálót felhasználva megismerjük a ma népszerű nagy nyelvi modelleket (ChatGPT,
                Gemini) biztonsági és etikai szempontok alapján.
              </p>
              <p className='mt-8 text-stone-200 text-base sm:text-[20px] whitespace-pre-line'>
                A részvétel regisztrációhoz kötött, melyet az általános konferencia belépőtől függetlenül, de ugyanazon
                a felületen lehet intézni. A workshopon való aktív részvételhez egy laptop szükséges.
              </p>
            </div>
            <div className='flex flex-col items-center flex-shrink-0 text-center lg:max-w-sm order-first lg:order-last'>
              <Image
                width={308}
                height={308}
                quality={100}
                src='https://konf-api.kir-dev.hu/cdn/public/MEDVE_U6Y7SQZJ4HNQ.webp'
                className='object-cover rounded-3xl w-[250px] h-[250px] sm:w-[308px] sm:h-[308px]'
                alt='Presentation Image'
              />
              <p className='block mt-4 text-[32px] leading-tight font-bold text-white-900'>Bartos-Elekes Miklós</p>
              <p className='block mt-0.5 text-[20px]  text-[#FFE500]'>LEGO Kör MI projektvezető, MSc hallgató</p>
            </div>
          </div>
        </Tile.Body>
      </Tile>
    </div>
  );
}
