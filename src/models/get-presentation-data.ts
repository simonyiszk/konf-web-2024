import { getIndexData } from '@/models/get-index-data';
import { breaksData } from '@/models/static/breaksData';

import { Break, BreakWithDates, Presentation, PresentationWithDates } from './models';

export async function getPresentationData(): Promise<(PresentationWithDates | BreakWithDates)[] | undefined> {
  const indexData = getIndexData();
  if (!indexData || !indexData.presentations) {
    return;
  }
  const breaks = breaksData as Break[];
  if (!breaks) {
    return;
  }
  const placeholders = breaks.map((presentation) => ({ ...presentation, placeholder: true }));
  const allPresentations: (Presentation | Break)[] = [...indexData.presentations, ...placeholders];
  const merged = allPresentations.map((presentation) => ({
    ...presentation,
    startDate: new Date(presentation.startTime),
    endDate: new Date(presentation.endTime),
  }));
  merged.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  return merged;
}
