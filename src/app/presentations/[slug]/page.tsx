import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

import { getIndexData } from '@/models/get-index-data';
import slugify from '@/utils/slugify';

export async function generateStaticParams() {
  const data = await getIndexData();

  const slugs =
    data?.presentations?.map((p) => ({
      slug: slugify(p.title),
    })) ?? [];

  return slugs;
}

const getPresentationBySlug = async (slug: string) => {
  const data = await getIndexData();
  return data?.presentations.find((p) => slugify(p.title) === slug);
};

export default async function PresentationBySlug({
  params,
}: {
  params: { slug: string; noBackArrow?: boolean; imageSize?: { x: string; y: string }; imageUrls?: string[] };
}) {
  const presentation = await getPresentationBySlug(params.slug);
  if (!presentation) {
    notFound();
  }

  const { title, description, presenter } = presentation;

  let imageClass = 'object-cover rounded-3xl';

  if (params.imageSize) {
    imageClass += ` w-[${params.imageSize.x}] h-[${params.imageSize.y}]`;
  } else {
    imageClass += ' w-[308px] h-[308px]';
  }

  return (
    <>
      <div className='max-w-6xl w-full px-6 xl:px-0'>
        {!params.noBackArrow && (
          <h3 className='mb-5 w-fit hover:text-brand'>
            <Link href={`/presentations`}>
              <div className='flex items-center'>
                <FaArrowLeft />
                <p className='ml-1'>Vissza az előadásokhoz </p>
              </div>
            </Link>
          </h3>
        )}
        {!params.noBackArrow && <h1 className='mb-16'>{title}</h1>}
        <div className='flex flex-col md:flex-row gap-8'>
          {!params.noBackArrow && <p className='text-stone-200 text-[20px] whitespace-pre-line'>{description}</p>}
          {params.noBackArrow && (
            <div>
              <p className='mb-12 text-[40px] font-bold leading-10'>{title}</p>
              <p className='text-stone-200 text-[20px] whitespace-pre-line'>
                {description.slice(0, Math.floor(description.length / 2))}
              </p>
              <div className='flex'>
                {params.imageUrls?.map((image) => {
                  return (
                    <img
                      src={image}
                      alt='presentation images'
                      className='p-2 max-w-full max-h-[75px] object-fit mt-5'
                    />
                  );
                })}
              </div>
            </div>
          )}
          <div className='flex flex-col items-center flex-shrink-0 text-center order-first md:order-last'>
            <img src={presenter.pictureUrl} className={imageClass} alt='Presentation Image' />
            <p className='block mt-4 text-[32px] leading-tight font-bold text-white-900'>{presenter.name}</p>
            <p className='block mt-0.5 text-[20px]  text-[#FFE500]'>{presenter.rank}</p>
            {presenter.company && (
              <div className='mt-1.5 bg-white rounded-xl max-w-[308px] max-h-[75px]'>
                <img
                  src={presenter.company.logoUrl}
                  alt='Company logo'
                  className='p-2 max-w-full max-h-[75px] object-fit m-auto'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
