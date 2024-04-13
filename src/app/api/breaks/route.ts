import { NextResponse } from 'next/server';

import { Break } from '@/models/models';
import { breaksData } from '@/models/static/breaksData';

export function GET(): NextResponse<Break[]> {
  return NextResponse.json(breaksData);
}
