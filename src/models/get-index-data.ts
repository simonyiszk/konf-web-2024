import { IndexPageData } from './models';

export async function getIndexData(): Promise<IndexPageData | undefined> {
  const res = await fetch(`${process.env.BACKEND_URL}/conference/index`, { cache: 'no-store' });
  if (!res.ok) {
    console.error(res);
    return;
  }
  return res.json();
}
