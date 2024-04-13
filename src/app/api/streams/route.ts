import { NextResponse } from 'next/server';

import { StreamData } from '@/models/models';
import { streamsData } from '@/models/static/streamsData';

export function GET(): NextResponse<StreamData[]> {
  return NextResponse.json(streamsData);
}
