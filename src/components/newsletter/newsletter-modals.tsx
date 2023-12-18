'use client';
import { Dialog } from '@headlessui/react';
import * as EmailValidator from 'email-validator';
import { useState } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

import { addToGroup } from '@/app/actions';
import { Checkbox } from '@/components/checkbox';

import { WhiteButton } from '../white-button';

export function NewsletterModals() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  const onSubscribe = async () => {
    if (accepted && email) {
      setIsLoading(true);
      const status = await addToGroup({ email });
      setIsLoading(false);
      switch (status) {
        case 200:
          onSubscribeClose();
          setIsSuccessOpen(true);
          break;
        case 400:
          setError('Érvénytelen email cím!');
          break;
        case 409:
          setError('Ez az email cím már fel van iratkozva a hírlevélre!');
          break;
        default:
          setError('Ismeretlen hiba!');
      }
    }
  };

  const onSubscribeClose = () => {
    setEmail('');
    setError('');
    setAccepted(false);
    setIsSubscribeOpen(false);
  };

  return (
    <>
      <WhiteButton onClick={() => setIsSubscribeOpen(true)}>Feliratkozás a hírlevélre</WhiteButton>
      <Dialog open={isSubscribeOpen} onClose={onSubscribeClose} className='relative z-50'>
        <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <Dialog.Panel className='mx-auto max-w-lg rounded bg-[#0f181c] p-8'>
            <div className='flex justify-between items-center mb-5'>
              <Dialog.Title className='font-bold text-2xl '>Hírlevél</Dialog.Title>
              <div className='hover:text-gray-400 hover:cursor-pointer text-xl' onClick={onSubscribeClose}>
                <FaTimes />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='mb-2'>
                Ha szeretnél értesülni a legfontosabb hírekről, mint például előadások és nyereményjáték, iratkozz fel a
                hírlevelünkre!
              </p>
              <div>
                <Checkbox
                  className='mr-2'
                  type='checkbox'
                  id='accept'
                  checked={accepted}
                  label='Elfogadom, hogy a konferenciáig havonta maximum két emailt fogok kapni az itt megadott e-mail címre.'
                  onChange={(e) => setAccepted(e.target.checked)}
                />
              </div>

              <input
                placeholder='valami@email.com'
                className='text-black p-2 rounded-md mb-2'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                type='email'
              />
              {error && <p className='text-red-500'>{error}</p>}
              <WhiteButton
                disabled={!EmailValidator.validate(email) || !accepted || !!error || isLoading}
                onClick={onSubscribe}
              >
                {isLoading ? 'Kérjük várj...' : 'Feliratkozás'}
              </WhiteButton>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <Dialog open={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} className='relative z-50'>
        <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <Dialog.Panel className='mx-auto max-w-lg rounded bg-[#0f181c] p-8 flex flex-col items-center gap-5'>
            <div className='text-8xl text-white'>
              <FaCheckCircle />
            </div>
            <Dialog.Title className='font-bold text-2xl mb-5'>Sikeresen feliratkoztál a hírlevélre!</Dialog.Title>

            <WhiteButton onClick={() => setIsSuccessOpen(false)}>Rendben</WhiteButton>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
