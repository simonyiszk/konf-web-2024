'use client';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { WhiteButton } from './white-button';

export function RegisterModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WhiteButton onClick={() => setIsOpen(true)}>Regisztráció</WhiteButton>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
        <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

        <div className='fixed  inset-0 flex w-screen items-center justify-center p-4'>
          <Dialog.Panel className='mx-auto h-full w-full max-w-6xl rounded bg-[#0f181c] py-4 md:p-8'>
            <div className='px-4 md:px-0 flex justify-between items-center mb-5'>
              <Dialog.Title className='font-bold text-2xl '>Regisztráció</Dialog.Title>
              <div className='hover:text-gray-400 hover:cursor-pointer text-xl' onClick={() => setIsOpen(false)}>
                <FaTimes />
              </div>
            </div>

            <iframe
              src='https://cooltix.com/widget/event-products/65ab9fecdfeb0d8b67dee006?theme=dark&primaryColorHex=D45B7E'
              width='100%'
              height='90%'
              frameBorder='0'
            ></iframe>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
