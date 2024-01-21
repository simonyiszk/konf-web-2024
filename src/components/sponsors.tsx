import { Company } from '@/models/models';

type Props = {
  sectionTitle: string;
  companies: Company[];
};

export function Sponsors({ sectionTitle, companies }: Props) {
  return (
    <div className='w-full bg-white'>
      <h1 className='text-center text-black p-5'>{sectionTitle}</h1>
    </div>
  );
}
