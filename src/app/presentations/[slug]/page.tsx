import Link from 'next/link';

import { getIndexData } from '@/models/get-index-data';

export default async function PresentationBySlug({ params }: { params: { slug: string } }) {
  const { presentations } = await getIndexData();
  const result = presentations.find((item) => {
    return item.slug === params.slug || null;
  });
  return (
    <div>
      <Link href={`/presentations`}>
        <h2 className='mb-5'>↩ Vissza az előadásokhoz</h2>
      </Link>
      <div className='max-w-md mx-auto bg-[#101010] rounded-xl shadow-md overflow-hidden md:max-w-5xl'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-30 w-full object-cover md:h-full md:w-64'
              src={result?.presenter.pictureUrl}
              alt='Portrait'
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-blue-300 font-semibold text-xl'>{result?.title}</div>
            <p className='block mt-1 text-lg leading-tight font-semibold text-white-900'>
              {result?.presenter.name + ', ' + result?.presenter.rank}
            </p>
            <p className='mt-2 text-stone-200'>{result?.description}</p>
            <p className='mt-3 text-stone-200'>📌 {result?.room}</p>
            <p className='mt-3 text-stone-200'>🕑{result?.startTime + ' - ' + result?.endTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
