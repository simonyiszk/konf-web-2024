import { IndexPageData } from './models';

export async function getIndexData(): Promise<IndexPageData> {
  const res = await fetch(`${process.env.BACKEND_URL}/conference/index`, { next: { revalidate: 30 * 60 } });
  if (!res.ok) {
    throw new Error(res.status.toString());
  }
  return res.json();
}
