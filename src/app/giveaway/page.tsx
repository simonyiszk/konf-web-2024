import { redirect } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { GiveawayTile } from '@/components/tiles/giveaway-tile';
import { getIndexData } from '@/models/get-index-data';

export default async function Giveaway() {
  const data = await getIndexData();
  if (!data) {
    redirect('/error');
  }
  return (
    <div className='grid grid-col-6 max-w-6xl w-full my-10 px-6 xl:px-0 gap-y-20'>
      <h1 className='col-span-6'>Nyereményjáték</h1>
      <GiveawayTile data={data.giveaway} showLink={false} />

      <div className='tile col-span-6 markdown'>
        <ReactMarkdown children={data.giveaway.rules} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}
