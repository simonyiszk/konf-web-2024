import { GiveawayData } from '@/models/models';

type Props = {
  data: GiveawayData;
};

export function GiveawayTile({ data: { description, sectionTitle, pictureUrl } }: Props) {
  return (
    <div className='tile col-span-6 p-10'>
      <h1>{sectionTitle}</h1>
      <p>{description}</p>
      {/* pic */}
    </div>
  );
}
