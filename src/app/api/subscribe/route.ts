import axios, { AxiosError } from 'axios';
import { JWT } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';
export interface Subscription {
  email: string;
}
export async function POST(request: NextRequest) {
  const { email }: Subscription = await request.json();

  const credential = JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT_JSON ?? '', 'base64').toString());

  const client = new JWT({
    email: credential.client_email,
    key: credential.private_key,
    scopes: ['https://www.googleapis.com/auth/admin.directory.group'],
  });

  const { token } = await client.getAccessToken();

  const memberData = {
    email,
    role: 'MEMBER',
  };

  try {
    const response = await axios.post(
      `https://admin.googleapis.com/admin/directory/v1/groups/${encodeURIComponent(
        'konf-news@simonyi.bme.hu'
      )}/members`,
      memberData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return new NextResponse('Created', { status: 201 });
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(e);
    }
    return new NextResponse(':(', { status: 500 });
  }
}
