import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

import { getIndexData } from '@/models/get-index-data';

export default async function PresentationBySlug({ params }: { params: { slug: string } }) {
  const data = await getIndexData();
  if (!data) {
    redirect('/error');
  }
  const result = data.presentations.find((item) => {
    return item.slug === params.slug;
  });

  return (
    <>
      {!result ? (
        <div className='max-w-6xl w-full px-6 xl:px-0'>
          <h3 className='mb-5 hover:text-brand'>
            <Link href={`/presentations`}>
              <div className='flex items-center'>
                <FaArrowLeft />
                <p className='ml-1'>Vissza az előadásokhoz </p>
              </div>
            </Link>
          </h3>
          <h1>Az oldal nem található.</h1>
        </div>
      ) : (
        <div className='max-w-6xl w-full px-6 xl:px-0'>
          <h3 className='mb-5 hover:text-brand'>
            <Link href={`/presentations`}>
              <div className='flex items-center'>
                <FaArrowLeft />
                <p className='ml-1'>Vissza az előadásokhoz </p>
              </div>
            </Link>
          </h3>
          <div className='shadow-md overflow-hidden md:max-w-5xl'>
            <h1 className='mb-16'>{result.title}</h1>
            <div className='flex flex-col md:flex-row gap-8'>
              <p className='text-stone-200 text-[20px] whitespace-pre-line'>{result.description}</p>
              <div className='flex flex-col items-center flex-shrink-0 text-center order-first md:order-last'>
                <img
                  src={result.presenter.pictureUrl}
                  className='object-cover w-[308px] h-[308px] rounded-3xl'
                  alt='Presentation Image'
                />
                <p className='block mt-4 text-[32px] leading-tight font-bold text-white-900'>{result.presenter.name}</p>
                <p className='block mt-0.5 text-[20px]  text-[#FFE500]'>{result.presenter.rank}</p>
                {result.presenter.company && (
                  <div className='mt-1.5 bg-white rounded-xl max-w-[308px] max-h-[75px]'>
                    <img
                      src={result.presenter.company.logoUrl}
                      alt='Company logo'
                      className='p-2 max-w-full max-h-[75px] object-fit m-auto'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
