import { conferenceData } from '@/models/static/conferenceData';

import { IndexPageData } from './models';

export function getIndexData(): IndexPageData {
  return conferenceData;
}
