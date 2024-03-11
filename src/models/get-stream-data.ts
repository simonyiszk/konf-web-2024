import { StreamData } from './models';

export async function getStreams(): Promise<StreamData[] | undefined> {
  const response = await fetch(`${process.env.BACKEND_URL}/proto/streams`, { next: { revalidate: 30 * 60 } });
  if (!response.ok) {
    console.error(response);
    return;
  }
  return await response.json();
}
