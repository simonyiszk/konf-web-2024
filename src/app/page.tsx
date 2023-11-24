import { KirDevLogo } from '@/components/kir-dev-logo/KirDevLogo';

export default function Landing() {
  return (
    <main className='flex flex-col gap-10 justify-center items-center h-full'>
      <h1 className='text-center'>XXI. Simonyi Konferencia</h1>
      <p className='text-center'>A weboldal fejlesztése folyamatban, szíves türelmed kérjük.</p>
      <KirDevLogo variant='light' />
    </main>
  );
}
