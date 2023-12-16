import Link from 'next/link';

export default function Contact() {
  return (
    <div className='flex flex-col'>
      <h2 className=' mb-20 text-center'>Vállalati és sajtómegkeresések, általános kérdések:</h2>
      <Link
        href='mailto:konferencia@simonyi.bme.hu'
        className='text-xl sm:text-2xl md:text-3xl font-semibold text-center hover:text-brand'
        target='blank'
      >
        konferencia@simonyi.bme.hu
      </Link>
    </div>
  );
}
