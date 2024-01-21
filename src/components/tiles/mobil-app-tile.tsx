import { MobilAppData } from '@/models/models';

type Props = {
  data: MobilAppData;
};

export function MobilAppTile({ data: { description } }: Props) {
  return (
    <div className='tile col-span-3 p-10'>
      <h1>Konferenciapp</h1>
      <p>{description}</p>
    </div>
  );
}
