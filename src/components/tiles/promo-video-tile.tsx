import { PromoVideoData } from '@/models/models';

type Props = {
  data: PromoVideoData;
};

export function PromoVideoTile({ data: { description, sectionTitle, youtubeUrl } }: Props) {
  return (
    <div className='tile col-span-6 p-10'>
      <h1>{sectionTitle}</h1>
      <p>{description}</p>
      {/* youtube embed */}
    </div>
  );
}
