import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export interface Subscription {
  email: string;
}

export async function POST(request: NextRequest) {
  const { email }: Subscription = await request.json();

  const credentials = JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_JSON ?? '', 'base64').toString());
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    subject: process.env.SERVICE_ACCOUNT_SUBJECT,
    scopes: ['https://www.googleapis.com/auth/admin.directory.group.member'],
  });

  try {
    const response = await google.admin({ version: 'directory_v1', auth }).members.insert({
      groupKey: 'konf-news@simonyi.bme.hu',
      requestBody: {
        email,
        role: 'MEMBER',
      },
    });
    console.log(response);
    return new NextResponse('Created', { status: 201 });
  } catch (e) {
    console.log(e);
    console.log('error: ', (e as any).response?.data?.error);
    return new NextResponse(':(', { status: 500 });
  }
}
