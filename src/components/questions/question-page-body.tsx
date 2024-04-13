'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { RoomQuestion } from '@/components/tiles/question-tile';
import { BreakWithDates, PresentationWithDates } from '@/models/models';

export function QuestionPageBody({
  presentations,
  delay,
}: {
  presentations: (PresentationWithDates | BreakWithDates)[] | undefined;
  delay: number;
}) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div className='order-1'>
          <h2 className='text-4xl text-center'>IB028</h2>
        </div>
        <div className='order-3 sm:order-2 mt-16 sm:mt-0'>
          <h2 className='text-4xl text-center'>IB025</h2>
        </div>
        <div className='order-2 sm:order-3'>
          <RoomQuestion presentations={presentations ?? []} room='IB028' delay={delay} />
        </div>
        <div className='order-4'>
          <RoomQuestion presentations={presentations ?? []} room='IB025' delay={delay} />
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}
