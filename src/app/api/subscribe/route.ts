import * as EmailValidator from 'email-validator';
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export interface Subscription {
  email: string;
}

export async function POST(request: NextRequest) {
  const { email }: Subscription = await request.json();
  if (!EmailValidator.validate(email)) {
    return new NextResponse('Invalid email!', { status: 400 });
  }

  const credentials = JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_JSON ?? '', 'base64').toString());
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    subject: process.env.SERVICE_ACCOUNT_SUBJECT,
    scopes: [process.env.JWT_SCOPE ?? ''],
  });
  try {
    await google.admin({ version: 'directory_v1', auth }).members.insert({
      groupKey: process.env.GROUP_KEY,
      requestBody: {
        email,
        role: 'MEMBER',
      },
    });
    return new NextResponse('Success', { status: 200 });
  } catch (e) {
    if ((e as any).response?.data?.error.code === 409) {
      return new NextResponse('Already subscribed', { status: 409 });
    }
    console.error('error: ', (e as any).response?.data?.error ?? e);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
