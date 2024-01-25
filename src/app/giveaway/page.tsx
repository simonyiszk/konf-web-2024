import { GiveawayTile } from '@/components/tiles/giveaway-tile';
import { getIndexData } from '@/models/get-index-data';

export default async function Giveaway() {
  const { giveaway } = await getIndexData();

  return (
    <div className='grid grid-col-6 max-w-6xl w-full my-40 px-6 xl:px-0'>
      <GiveawayTile data={giveaway} showLink={false} />
    </div>
  );
}
