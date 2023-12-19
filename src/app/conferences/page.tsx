import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Conferences() {
  return (
    <div className='flex flex-col'>
      <h2 className='mb-20 text-center'>Tekintsd meg korábbi konferenciáinkat:</h2>
      <div className='flex justify-between flex-col md:flex-row gap-10'>
        <Link href='https://2023.konferencia.simonyi.bme.hu' target='_blank'>
          <div className='flex flex-col justify-center items-center'>
            <Image src={'/img/xx.svg'} alt='XX. Simonyi Konferencia' width={200} height={96} />
            <div className='flex gap-2 items-center'>
              <p className='text-4xl font-bold'>2023</p>
              <FaExternalLinkAlt />
            </div>
          </div>
        </Link>
        <Link href='https://2022.konferencia.simonyi.bme.hu' target='_blank'>
          <div className='flex flex-col justify-center items-center'>
            <Image src={'/img/xix.svg'} alt='XIX. Simonyi Konferencia' width={225} height={96} />
            <div className='flex gap-2 items-center'>
              <p className='text-4xl font-bold'>2022</p>
              <FaExternalLinkAlt />
            </div>
          </div>
        </Link>
        <Link href='https://2021.konferencia.simonyi.bme.hu' target='_blank'>
          <div className='flex flex-col justify-center items-center'>
            <Image src={'/img/18.svg'} alt='18. Simonyi Konferencia' width={100} height={96} />
            <div className='flex gap-2 items-center'>
              <p className='text-4xl font-bold'>2021</p>
              <FaExternalLinkAlt />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
