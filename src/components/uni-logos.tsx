import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

export function UniLogos({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('flex items-center gap-10', className)} {...props}>
      <Link href='https://vik.bme.hu' className='brand-link' target='blank'>
        <Image src='/img/vik.svg' alt='Vik' width={40} height={40} />
      </Link>
      <Link href='https://simonyi.bme.hu' className='brand-link' target='blank'>
        <Image src='/img/simonyi.svg' alt='Simonyi Károly Szakkollégium' width={193} height={40} />
      </Link>
    </div>
  );
}
