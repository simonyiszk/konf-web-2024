import { NextResponse } from 'next/server';

import { InterviewData } from '@/models/models';
import { interviewsData } from '@/models/static/interviewsData';

export function GET(): NextResponse<InterviewData[]> {
  return NextResponse.json(interviewsData);
}
