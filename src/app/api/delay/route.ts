import { NextResponse } from 'next/server';

import { delayData } from '@/models/static/delayData';

export function GET() {
  return NextResponse.json(delayData);
}
