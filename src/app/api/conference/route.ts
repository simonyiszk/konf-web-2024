import { NextResponse } from 'next/server';

import { IndexPageData } from '@/models/models';
import { conferenceData } from '@/models/static/conferenceData';

export function GET(): NextResponse<IndexPageData> {
  return NextResponse.json(conferenceData);
}
