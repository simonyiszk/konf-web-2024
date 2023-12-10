import { KirDevLogo } from '@/components/kir-dev-logo/KirDevLogo';

export default function Landing() {
  return (
    <main className='flex flex-col gap-10 justify-center items-center h-full'>
      <h1 className='text-center'>XXI. Simonyi Konferencia</h1>
      <p className='text-center'>A weboldal fejlesztése folyamatban, szíves türelmed kérjük.</p>
      <p className='text-center text-3xl font-bold'>
        Magyarország legnagyobb, egyetemi hallgatók által szervezett éves technológiai konferenciája.
      </p>
      <p className='text-center text-7xl font-semibold'>24.03.19</p>
      <KirDevLogo variant='light' />
    </main>
  );
}
