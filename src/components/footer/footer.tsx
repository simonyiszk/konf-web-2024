import Image from 'next/image';
import Link from 'next/link';

import konfLogo from '../../../public/img/konf.svg';
import { SocialButtons } from './social-buttons';

export function Footer() {
  return (
    <footer className='max-w-6xl mx-auto mt-24 w-full flex flex-col gap-10 mb-10 px-8 xl:px-0 overflow-hidden'>
      <div className='flex flex-col md:flex-row gap-6 justify-between'>
        <div className='flex flex-col gap-4 w-full md:w-1/2 '>
          <Image src={konfLogo} width={560} height={135} alt='Simonyi Konferencia' />
          <p className='font-bold text-xl sm:text-2xl text-center md:text-left'>
            Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciája.
          </p>
          <SocialButtons />
        </div>

        <div className='flex flex-col gap-4 text-center md:text-right text-xl font-medium'>
          <Link href='/presentations' className='brand-link'>
            Előadások
          </Link>
          <Link href='/contact' className='brand-link'>
            Kapcsolat
          </Link>
          <Link href='/golya' target='blank' className='brand-link'>
            Gólyáknak
          </Link>
          <Link href='/giveaway' className='brand-link'>
            Nyereményjáték
          </Link>
          <Link href='/conferences' className='brand-link'>
            Előző évek konferenciái
          </Link>
          <Link href='https://simonyi.bme.hu' target='blank' className='brand-link'>
            Simonyi Károly Szakkollégium
          </Link>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='w-full md:w-auto flex flex-col items-center md:items-start'>
          <p className='text-xs mb-2'>a weboldalt készítette:</p>
          <div className='flex items-center gap-8'>
            <Link href='https://schdesign.hu' className='brand-link' target='blank'>
              <Image className='-mb-2' src='/img/schdesign.svg' alt='schdesign' width={148} height={40} />
            </Link>
            <Link href='https://kir-dev.hu' className='brand-link' target='blank'>
              <Image src='/img/kirdev-inline.svg' alt='Kir-Dev' width={193} height={40} />
            </Link>
          </div>
        </div>

        <div className='flex-grow md:self-end flex justify-center'>
          <Link href='https://vercel.com' className='brand-link ' target='blank'>
            <Image src='/img/vercel.svg' alt='Vercel' className='mx-auto' width={100} height={25} />
          </Link>
        </div>

        <div className='flex items-center gap-8 '>
          <Link href='https://vik.bme.hu' className='brand-link' target='blank'>
            <Image src='/img/vik.svg' alt='Vik' width={48} height={48} />
          </Link>
          <Link href='https://simonyi.bme.hu' className='brand-link' target='blank'>
            <Image src='/img/simonyi.svg' alt='Simonyi Károly Szakkollégium' width={160} height={34} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
