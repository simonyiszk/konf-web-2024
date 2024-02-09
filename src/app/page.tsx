import dynamic from 'next/dynamic';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { metadata } from '@/app/layout';
import PresentationBySlug from '@/app/presentations/[slug]/page';
import { ImageCarouselSection } from '@/components/image-carousel/image-carousel-section';
import { SponsorSection } from '@/components/sponsors/sponsor-section';
import { GiveawayTile } from '@/components/tiles/giveaway-tile';
import { NewsletterTile } from '@/components/tiles/newsletter-tile';
import { PromoVideoTile } from '@/components/tiles/promo-video-tile';
import { RegisterTile } from '@/components/tiles/register-tile';
import { StatTile } from '@/components/tiles/stat-tile';
import { Tile } from '@/components/tiles/tile';
import { getIndexData } from '@/models/get-index-data';

import konfLogo from '../../public/img/konf.svg';
import redPlanet from '../../public/img/red-planet.png';
import whitePlanet from '../../public/img/white-planet.png';

const CountdownTile = dynamic(() => import('@/components/tiles/countdown-tile/countdown-tile'), { ssr: false });

export default async function Landing() {
  const data = await getIndexData();
  if (!data) {
    redirect('/error');
  }
  return (
    <>
      <div className='p-10 relative'>
        <div className='max-w-md md:max-w-xl relative shadow-gloria rounded-full overflow-hidden mx-auto'>
          <video className='h-full w-full' autoPlay playsInline loop muted>
            <source src='/video/nebula.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col gap-5 p-5'>
          <Image src={konfLogo} alt='Simonyi Konferencia' className='w-full drop-shadow-hero' />
          <p className='font-bold text-xl sm:text-2xl text-center hero-text-shadow'>{metadata.description}</p>
          <p className='font-semibold text-4xl sm:text-6xl hero-text-shadow'>24. 03. 19.</p>
        </div>
      </div>
      <div className='relative'>
        <div className='relative'>
          <div className='grid grid-cols-1 sm:grid-cols-6 max-w-6xl w-full mt-40 gap-6 px-6 xl:px-0'>
            {data.registration.cooltixEventId && <RegisterTile data={data.registration} />}

            <StatTile desc='konferenciát rendeztünk már' number='20' />
            <StatTile desc='percnyi előadás egy nap alatt' number='700+' />
            <StatTile desc='előadó' number='14' />

            <Tile className='col-span-6'>
              <Tile.Body>
                <PresentationBySlug
                  params={{
                    slug: 'kotlin-multiplatform-kodmegosztas-pragmatikusan',
                    noBackArrow: true,
                    imageUrls: [
                      'https://konf-api-staging.kir-dev.hu/cdn/public/KOTLIN_X7DTU1V0XFXU.svg',
                      'https://konf-api-staging.kir-dev.hu/cdn/public/KODE_DOWK1X158B66.png',
                    ],
                  }}
                />
              </Tile.Body>
            </Tile>

            {data.promoVideo.youtubeUrl && <PromoVideoTile data={data.promoVideo} />}

            <Tile className='col-span-6'>
              <Tile.Body>
                <PresentationBySlug
                  params={{
                    slug: 'kotlin-multiplatform-kodmegosztas-pragmatikusan',
                    noBackArrow: true,
                    imageUrls: [
                      'https://konf-api-staging.kir-dev.hu/cdn/public/KOTLIN_X7DTU1V0XFXU.svg',
                      'https://konf-api-staging.kir-dev.hu/cdn/public/KODE_DOWK1X158B66.png',
                    ],
                  }}
                />
              </Tile.Body>
            </Tile>

            {data.giveaway.pictureUrl && <GiveawayTile data={data.giveaway} />}

            <CountdownTile />
            <NewsletterTile />
            {/*{(data.mobilApp.androidUrl || data.mobilApp.iosUrl) && <MobilAppTile data={data.mobilApp} />} */}
          </div>
          <Image src={redPlanet} alt='Vörös bolygó' className='planet red-planet -z-10' />
        </div>
        {data.previousConferences.conferences.length > 0 && <ImageCarouselSection data={data.previousConferences} />}
        <Image src={whitePlanet} alt='Fehér bolygó' className='planet white-planet' />
      </div>
      <SponsorSection companies={data.sponsors.companies} sectionTitle={data.sponsors.sectionTitle} />
    </>
  );
}
