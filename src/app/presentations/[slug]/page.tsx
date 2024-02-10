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

const getPresentationBySlug = async (slug: string) => {
  const data = await getIndexData();
  return data?.presentations.find((p) => slugify(p.title) === slug);
};

export default async function PresentationBySlug({ params }: { params: { slug: string } }) {
  const presentation = await getPresentationBySlug(params.slug);
  if (!presentation) {
    notFound();
  }

  return <Presentation presentation={presentation} />;
}
