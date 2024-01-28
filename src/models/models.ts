export interface Conference {
  title: string;
  priority: number;
  imageUrls: string[];
}

export enum SponsorCategory {
  MAIN_SPONSOR = 'MAIN_SPONSOR',
  FEATURED_SPONSOR = 'FEATURED_SPONSOR',
  SPONSOR = 'SPONSOR',
}

export interface Company {
  logoUrl: string;
  name: string;
  url: string;
  category: SponsorCategory;
}

export interface Organiser {
  name: string;
  rank: string;
  emailAddress: string;
  pictureUrl: string;
  priority: number;
}

export interface Presenter {
  name: string;
  rank: string;
  pictureUrl: string;
  company?: Company;
}

export interface Presentation {
  slug: string;
  title: string;
  presenter: Presenter;
  room: 'IB028' | 'IB025';
  language: 'en' | 'hu';
  startTime: string;
  endTime: string;
  description: string;
  questionsUrl: string; // még kérdéses, hogy így lesz-e
}

export interface RegistraionData {
  buttonText: string;
  cooltixEventId: string;
}

export interface MobilAppData {
  description: string;
  androidUrl: string;
  iosUrl: string;
}

export interface GiveawayData {
  sectionTitle: string;
  description: string;
  pictureUrl: string;
  rules: string;
}

export interface PromoVideoData {
  sectionTitle: string;
  youtubeUrl: string;
  description: string;
}

export interface IndexPageData {
  previousConferences: {
    sectionTitle: string;
    conferences: Conference[];
  };
  registration: RegistraionData;
  mobilApp: MobilAppData;
  giveaway: GiveawayData;
  promoVideo: PromoVideoData;
  sponsors: {
    sectionTitle: string;
    companies: Company[];
  };
  organisers: Organiser[];
  featuredPresentation: {
    sectionTitle: string;
    description: string;
    presentation: Presentation;
  };
  presentations: Presentation[];
}
