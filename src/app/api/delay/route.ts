import { NextResponse } from 'next/server';

import { Delay } from '@/models/models';
import { delayData } from '@/models/static/delayData';

export function GET(): NextResponse<Delay> {
  return NextResponse.json(delayData);
}
