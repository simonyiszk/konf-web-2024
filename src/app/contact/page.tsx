import { redirect } from 'next/navigation';

import { OrganiserTile } from '@/components/tiles/organizer-tile';
import { getIndexData } from '@/models/get-index-data';

export default async function asyncontact() {
  const data = await getIndexData();
  if (!data) {
    redirect('/error');
  }
  const sortedOrganizers = data.organisers.sort((o) => o.priority);

  const org = {
    main: sortedOrganizers.filter((o) => o.priority === 0),
    other: sortedOrganizers.filter((o) => o.priority !== 0),
  };

  return (
    <div className='flex flex-col px-6 xl:px-0 max-w-6xl w-full'>
      <h1 className='mb-16 mt-8'>Kapcsolat</h1>

      <div className='flex flex-col gap-24'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {org.main.map((organiser) => (
            <OrganiserTile key={organiser.emailAddress} {...organiser} />
          ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {org.other.map((organiser) => (
            <OrganiserTile key={organiser.emailAddress} {...organiser} />
          ))}
        </div>
      </div>
    </div>
  );
}
