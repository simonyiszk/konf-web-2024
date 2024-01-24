import { PromoVideoData } from '@/models/models';

type Props = {
  data: PromoVideoData;
};

export function PromoVideoTile({ data: { description, sectionTitle, youtubeUrl } }: Props) {
  return (
    <div className='tile sm:col-span-6'>
      <h2 className='text-5xl sm:text-6xl font-bold'>{sectionTitle}</h2>
      <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <p className='text-lg sm:text-xl font-medium text-justify w-full'>{description}</p>
        <iframe
          className='w-full aspect-[16/9]'
          src={youtubeUrl}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Simonyi Konferencia promó videó'
        />
      </div>
    </div>
  );
}
