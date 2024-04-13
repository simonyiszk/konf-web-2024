import { NextResponse } from 'next/server';

import { interviewsData } from '@/models/static/interviewsData';

export function GET() {
  return NextResponse.json(interviewsData);
}
