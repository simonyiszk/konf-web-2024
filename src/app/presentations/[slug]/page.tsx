import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import Presentation from '@/components/presentation/Presentation';
import { getIndexData } from '@/models/get-index-data';
import slugify from '@/utils/slugify';

export async function generateStaticParams() {
  const data = await getIndexData();

  return (
    data?.presentations?.map((p) => ({
      slug: slugify(p.title),
    })) ?? []
  );
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const data = await getIndexData();
  const presentation = data?.presentations.find((p) => slugify(p.title) === slug);

  return {
    title: presentation?.title,
    description: `${presentation?.presenter.name} "${presentation?.title}" című előadása a XXI. Simonyi Konferencián`,
    keywords: `${(await parent).keywords}, ${presentation?.presenter.name}${presentation?.title
      .split(' ')
      .reduce((prev, curr) => `${prev}, ${curr}`, '')}`,
  };
}

const getPresentationBySlug = async (slug: string) => {
  const data = await getIndexData();
  return data?.presentations.find((p) => slugify(p.title) === slug);
};

export default async function PresentationBySlug({ params }: { params: { slug: string } }) {
  const presentation = await getPresentationBySlug(params.slug);
  if (!presentation) {
    notFound();
  }

  return (
    <div className='mt-10 px-4 sm:px-6 xl:px-0'>
      <Presentation presentation={presentation} />
    </div>
  );
}
