'use server';
import { google } from 'googleapis';

export async function addToGroup({ email }: { email: string }) {
  if (!email) {
    return 400;
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
        email: email,
        role: 'MEMBER',
      },
    });
    return 200;
  } catch (e) {
    if ((e as any).response?.data?.error.code === 409) {
      return 409;
    }
    if ((e as any).response?.data?.error.code === 400) {
      return 400;
    }
    console.log(e);
    console.log('error: ', (e as any).response?.data?.error);
    return 500;
  }
}

export async function sendQuestion({
  question,
  slug,
  recaptchaToken,
  userId,
}: {
  question: string;
  slug: string;
  recaptchaToken: string;
  userId: string;
}) {
  const isRecaptchaValid = await validateRecaptcha(recaptchaToken);
  if (!isRecaptchaValid) {
    console.error('Recaptcha validation failed');
    return 400;
  }
  if (!question || !slug) {
    return 400;
  }
  const res = await fetch(`https://konf-qna.kir-dev.hu/api/presentation/${slug}/question`, {
    method: 'POST',
    body: JSON.stringify({ content: question, userId }),
  });
  if (res.status === 200) {
    return 201;
  } else if (res.status === 400) {
    return 400;
  }
  return 500;
}

async function validateRecaptcha(token: string) {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
  });
  const data = await res.json();
  return data.success;
}
