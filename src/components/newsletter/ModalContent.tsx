'use client';
import * as EmailValidator from 'email-validator';
import { useState } from 'react';

export function ModalContent() {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  const onSubscribe = async () => {
    if (accepted && email) {
      if (EmailValidator.validate(email)) {
        const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
        switch (res.status) {
          case 200:
            alert('Sikeresen feliratkoztál a hírlevélre!');
            break;
          case 400:
            alert('Érvénytelen email cím!');
            break;
          case 409:
            alert('Ez az email cím már fel van iratkozva a hírlevélre!');
            break;
          default:
            alert('Ismeretlen hiba!');
        }
        setEmail('');
      } else {
        alert('Érvénytelen email cím!');
      }
    }
  };

  return (
    <div>
      <input type='checkbox' id='accept' checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
      <label htmlFor='accept'>
        Beleegyezem, hogy a konferencáig körülbelül havonta két emailt fogok kapni az alábbi email címre.
      </label>
      <div className='flex justify-between items-center gap-2'>
        <input className='text-black' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
        <button disabled={!email || !accepted} onClick={onSubscribe} className='bg-white text-black rounded-md p-3'>
          Feliratkozás
        </button>
      </div>
    </div>
  );
}
