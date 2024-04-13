import { getIndexData } from '@/models/get-index-data';
import { breaksData } from '@/models/static/breaksData';

import { Presentation, PresentationWithDates } from './models';

export async function getPresentationData(): Promise<PresentationWithDates[] | undefined> {
  const indexData = getIndexData();
  if (!indexData || !indexData.presentations) {
    return;
  }
  const breaks = breaksData as Presentation[];
  if (!breaks) {
    return;
  }
  const placeholders = breaks.map((presentation) => ({ ...presentation, placeholder: true }));
  const allPresentations: Presentation[] = [...indexData.presentations, ...placeholders];
  const merged = allPresentations.map((presentation) => ({
    ...presentation,
    startDate: new Date(presentation.startTime),
    endDate: new Date(presentation.endTime),
  }));
  merged.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  return merged;
}
