'use client';
import * as EmailValidator from 'email-validator';
import { useState } from 'react';

import { addToGroup } from '@/app/actions';

export function ModalContent() {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');

  const onSubscribe = async () => {
    if (accepted && email) {
      const status = await addToGroup({ email });
      switch (status) {
        case 200:
          alert('Sikeresen feliratkoztál a hírlevélre!');
          setEmail('');
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

  return (
    <div>
      <input
        className='mr-2'
        type='checkbox'
        id='accept'
        checked={accepted}
        onChange={(e) => setAccepted(e.target.checked)}
      />
      <label htmlFor='accept'>
        Beleegyezem, hogy a konferenciáig havonta maximum két emailt fogok kapni az alábbi email címre.
      </label>
      <div className='flex justify-center items-center gap-2'>
        <input
          placeholder='valami@email.com'
          className='text-black p-1 rounded-md'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          type='email'
        />
        {error && <p className='text-red-600'>{error}</p>}
        <button
          disabled={!EmailValidator.validate(email) || !accepted || !!error}
          onClick={onSubscribe}
          className='bg-white text-black rounded-md p-3 disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          Feliratkozás
        </button>
      </div>
    </div>
  );
}
