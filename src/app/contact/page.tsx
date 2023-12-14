import Link from 'next/link';

export default function Contact() {
  return (
    <div className='flex flex-col'>
      <p className='text-4xl font-bold mb-20 text-center'>Vállalati és sajtómegkeresések, általános kérdések:</p>
      <p className='text-2xl font-normal mb-20 text-center'>lorem ipsum?</p>
      <Link
        href='mailto:konferencia@simonyi.bme.hu'
        className='text-2xl font-semibold text-center hover:text-brand'
        target='blank'
      >
        konferencia@simonyi.bme.hu
      </Link>
    </div>
  );
}
