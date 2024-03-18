import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FaCheckCircle } from 'react-icons/fa';

import { sendQuestion } from '@/app/actions';
import { WhiteButton } from '@/components/white-button';
import { AllowedQuestionCount, getQuestionCount, getUserId, incrementQuestionCount } from '@/utils/questionHelpers';

interface PresentationQuestionFormProps {
  slug: string;
}

export function PresentationQuestionForm({ slug }: PresentationQuestionFormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [questionCount, setQuestionCount] = useState(0);

  const canAskQuestions = questionCount < AllowedQuestionCount;

  useEffect(() => {
    setQuestionCount(getQuestionCount(slug));
  }, []);

  const onSend = async () => {
    if (!executeRecaptcha) return;
    const recaptchaToken = await executeRecaptcha('presentation_question');
    if (question.trim() && canAskQuestions) {
      setIsLoading(true);
      const status = await sendQuestion({ question, slug, recaptchaToken, userId: getUserId() });
      setIsLoading(false);
      switch (status) {
        case 201:
          incrementQuestionCount(slug);
          setQuestionCount(questionCount + 1);
          setIsSuccessOpen(true);
          setQuestion('');
          break;
        case 400:
          setError('Hibás formátum!');
          break;
        default:
          setError('Ismeretlen hiba!');
      }
    }
  };

  return (
    <div className='mt-10 w-full'>
      {canAskQuestions ? (
        <>
          <div className='relative'>
            <textarea
              className='w-full rounded-md p-2 bg-transparent border-white border-[0.5px]'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={4}
              placeholder='Ide írd a kérdésed!'
            />
            <p className='absolute right-0 bottom-0 p-4'>
              {questionCount}/{AllowedQuestionCount} Kérdés feltéve
            </p>
          </div>
          {error && <p className='text-red-500 my-2'>{error}</p>}
          <div className='w-full my-4 flex justify-center'>
            <WhiteButton onClick={onSend} disabled={!question.trim() || isLoading || !executeRecaptcha}>
              Kérdés küldése
            </WhiteButton>
          </div>
        </>
      ) : (
        <div className='w-full my-4 flex justify-center'>
          <WhiteButton disabled={true} onClick={() => {}}>
            Elfogytak a feltehető kérdések!
          </WhiteButton>
        </div>
      )}
      <Dialog open={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} className='relative z-50'>
        <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <Dialog.Panel className='mx-auto max-w-lg rounded bg-[#0f181c] p-8 flex flex-col items-center gap-5'>
            <div className='text-8xl text-white'>
              <FaCheckCircle />
            </div>
            <Dialog.Title className='font-bold text-2xl mb-5 text-center'>
              A kérdésed megkaptuk és moderálás után a felolvasandó kérdések közé kerül. Köszönjük!
            </Dialog.Title>

            <WhiteButton onClick={() => setIsSuccessOpen(false)}>Rendben</WhiteButton>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
