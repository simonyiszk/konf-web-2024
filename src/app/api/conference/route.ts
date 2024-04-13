import { NextResponse } from 'next/server';

import { conferenceData } from '@/models/static/conferenceData';

export function GET() {
  return NextResponse.json(conferenceData);
}
