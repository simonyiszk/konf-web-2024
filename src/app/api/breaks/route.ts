import { NextResponse } from 'next/server';

import { breaksData } from '@/models/static/breaksData';

export function GET() {
  return NextResponse.json(breaksData);
}
