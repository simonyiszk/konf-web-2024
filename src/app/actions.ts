'use server';
// could be used instead of route.ts, but we have to figure out how to handle the response
import { google } from 'googleapis';
import { redirect } from 'next/navigation';

export async function addToGroup(formData: FormData) {
  if (!formData.get('email')) {
    redirect('/?status=400');
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
        email: formData.get('email')?.toString(),
        role: 'MEMBER',
      },
    });
  } catch (e) {
    if ((e as any).response?.data?.error.code === 409) {
      redirect('/?status=409');
    }
    console.log(e);
    console.log('error: ', (e as any).response?.data?.error);
    redirect('/?status=500');
  }
  redirect('/?status=200');
}
