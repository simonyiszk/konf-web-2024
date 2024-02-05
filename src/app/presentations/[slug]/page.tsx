import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import { getIndexData } from '@/models/get-index-data';

export default async function PresentationBySlug({ params }: { params: { slug: string } }) {
  const { presentations } = await getIndexData();
  const result = presentations.find((item) => {
    return item.slug === params.slug;
  });

  return (
    <>
      {!result ? (
        <div>
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
        <div>
          <h3 className='mb-5 hover:text-brand'>
            <Link href={`/presentations`}>
              <div className='flex items-center'>
                <FaArrowLeft />
                <p className='ml-1'>Vissza az előadásokhoz </p>
              </div>
            </Link>
          </h3>
          <div className='max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-5xl'>
            <h1 className='mb-16'>{result.title}</h1>
            <div className='md:flex'>
              <div className='pr-[8rem]'>
                <p className='text-stone-200 text-[20px]'>{result.description}</p>
              </div>
              <div className='md:flex-shrink-0 text-center'>
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
