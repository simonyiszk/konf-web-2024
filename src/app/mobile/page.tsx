import { AndroidTile } from '@/components/tiles/mobile/android-tile';
import { IosTile } from '@/components/tiles/mobile/ios-tile';
import { MobilePromotionTile } from '@/components/tiles/mobile/mobile-promotion-tile';
import { getIndexData } from '@/models/get-index-data';

export default async function MobilePage() {
  const data = await getIndexData();
  return (
    <div className='max-w-6xl w-full px-4 sm:px-6 xl:px-0'>
      <h1 className='mb-10'>KonferenciApp</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-10'>
        <MobilePromotionTile />
        <IosTile iosUrl={data?.mobilApp.iosUrl ?? ''} />
        <AndroidTile androidUrl={data?.mobilApp.androidUrl ?? ''} />
      </div>
    </div>
  );
}
