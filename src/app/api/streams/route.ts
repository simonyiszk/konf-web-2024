import { NextResponse } from 'next/server';

import { streamsData } from '@/models/static/streamsData';

export function GET() {
  return NextResponse.json(streamsData);
}
