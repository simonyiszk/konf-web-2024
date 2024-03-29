import { QuestionPageBody } from '@/components/questions/question-page-body';
import { getDelayData } from '@/models/get-delay-data';
import { getPresentationData } from '@/models/get-presentation-data';

export default async function questionsPage() {
  const presentations = await getPresentationData();
  const delay = await getDelayData();
  return (
    <div className='flex flex-col px-4 sm:px-6 xl:px-0 max-w-6xl w-full overflow-hidden'>
      <h1 className='mb-16 mt-8'>Kérdezz az elődóktól!</h1>
      <QuestionPageBody presentations={presentations} delay={delay ?? 0} />
    </div>
  );
}
