import Image from 'next/image';

import { metadata } from '@/app/layout';
import { SponsorSection } from '@/components/sponsors/sponsor-section';
import { CountdownTile } from '@/components/tiles/countdown-tile';
import { GiveawayTile } from '@/components/tiles/giveaway-tile';
import { MobilAppTile } from '@/components/tiles/mobil-app-tile';
import { PromoVideoTile } from '@/components/tiles/promo-video-tile';
import { RegisterTile } from '@/components/tiles/register-tile';
import { StatTile } from '@/components/tiles/stat-tile';
import { IndexPageData } from '@/models/models';

import konfLogo from '../../public/img/konf.svg';

async function getIndexData(): Promise<IndexPageData> {
  console.log(process.env.BACKEND_URL);
  const res = await fetch(`${process.env.BACKEND_URL}/conference/index`);
  if (!res.ok) {
    throw new Error(res.status.toString());
  }
  return res.json();
}

export default async function Landing() {
  const data = await getIndexData();
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

      <div className='grid grid-cols-6 max-w-6xl w-full my-40 gap-6'>
        {data.registration.url && <RegisterTile data={data.registration} />}

        <StatTile desc='konferenciát rendeztünk már' number='20' />
        <StatTile desc='konferenciát rendeztünk már' number='20' />
        <StatTile desc='konferenciát rendeztünk már' number='20' />

        {data.promoVideo.youtubeUrl && <PromoVideoTile data={data.promoVideo} />}
        {data.giveaway.pictureUrl && <GiveawayTile data={data.giveaway} />}

        <CountdownTile />
        {(data.mobilApp.androidUrl || data.mobilApp.iosUrl) && <MobilAppTile data={data.mobilApp} />}
      </div>

      <SponsorSection companies={data.sponsors.companies} sectionTitle={data.sponsors.sectionTitle} />
    </>
  );
}
