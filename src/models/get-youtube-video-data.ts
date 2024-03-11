import { InterviewData, StreamData } from './models';

export async function getVideoData(endpoint: string) {
  const response = await fetch(`${process.env.BACKEND_URL}/proto/${endpoint}`, { next: { revalidate: 30 * 60 } });
  if (!response.ok) {
    console.error(response);
    return;
  }
  return await response.json();
}

export async function getStreams(): Promise<StreamData[] | undefined> {
  return getVideoData('streams');
}
export async function getInterviews(): Promise<InterviewData[] | undefined> {
  return getVideoData('interviews');
}
