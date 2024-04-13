import { interviewsData } from '@/models/static/interviewsData';
import { streamsData } from '@/models/static/streamsData';

import { InterviewData, StreamData } from './models';

export async function getStreams(): Promise<StreamData[] | undefined> {
  return streamsData;
}

export async function getInterviews(): Promise<InterviewData[] | undefined> {
  return interviewsData;
}
