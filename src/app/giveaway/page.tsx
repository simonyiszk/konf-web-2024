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
        <ReactMarkdown
          children={data.giveaway.rules}
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h1 className='text-5xl font-bold mb-8'>{children}</h1>,
            h2: ({ children }) => <h2 className='text-4xl font-bold my-4'>{children}</h2>,
            p: ({ children }) => <p className='my-1'>{children}</p>,
            a: ({ children, href }) => (
              <a className='text-konf-yellow underline' href={href as string} target='_blank' rel='noopener noreferrer'>
                {children}
              </a>
            ),
          }}
        />
      </div>
    </div>
  );
}
