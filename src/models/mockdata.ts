import { IndexPageData, SponsorCategory } from './models';

export const mockData: IndexPageData = {
  previousConferences: {
    sectionTitle: 'Korábbi Konferenciáink',
    conferences: [
      {
        title: 'Test Conference 2022',
        priority: 1,
        imageUrls: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
      },
      {
        title: 'Test Conference 2023',
        priority: 0,
        imageUrls: [''],
      },
    ],
  },
  registration: {
    buttonText: 'Regisztráció',
    url: '65ab9fecdfeb0d8b67dee006',
  },
  mobilApp: {
    description: 'Regisztráció',
    androidUrl: 'https://',
    iosUrl: 'https://',
  },
  giveaway: {
    sectionTitle: 'Nyereményjáték',
    description: 'Nyereményjáték leírása ide jön',
    pictureUrl: 'https://',
  },
  promoVideo: {
    sectionTitle: 'Promóciós Videó',
    youtubeUrl: 'https://youtube.com/xy',
    description: 'Promóciós Videó leírása ide jön',
  },
  sponsors: {
    sectionTitle: 'Szponzoraink',
    companies: [
      {
        name: 'Bosch',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
        url: 'https://www.bosch.hu/',
        category: SponsorCategory.MAIN_SPONSOR,
      },
      {
        name: 'Aliz',
        logoUrl: 'https://i.imgur.com/ZiHu8Wo.png',
        url: 'https://www.aliz.ai/en',
        category: SponsorCategory.FEATURED_SPONSOR,
      },
      {
        name: 'Test Company 3',
        logoUrl: 'https://i.imgur.com/ZiHu8Wo.png',
        url: 'https://example.com',
        category: SponsorCategory.FEATURED_SPONSOR,
      },
      {
        name: 'Test Company',
        logoUrl: 'https://i.imgur.com/ZiHu8Wo.png',
        url: 'https://example.com',
        category: SponsorCategory.SPONSOR,
      },
      {
        name: 'aliz 3',
        logoUrl: 'https://i.imgur.com/ZiHu8Wo.png',
        url: '',
        category: SponsorCategory.SPONSOR,
      },
    ],
  },
  organisers: [
    {
      name: 'Test Organizer 1',
      rank: 'Test Rank 1',
      emailAddress: ' ',
      pictureUrl: 'https://example.com/organizer1.jpg',
      priority: 0,
    },
    {
      name: 'Test Organizer 2',
      rank: 'Test Rank 2',
      emailAddress: ' ',
      pictureUrl: 'https://example.com/organizer2.jpg',
      priority: 1,
    },
  ],
  featuredPresentation: {
    sectionTitle: 'Promóciós Videó',
    description: 'Promóciós Videó leírása ide jön',
    presentation: {
      slug: 'test-presentation-1',
      title: 'Test Presentation 1',
      room: 'IB028',
      language: 'en',
      startTime: '2021-01-01 12:00:00',
      endTime: '2021-01-01 13:00:00',
      description: 'Test Description 1',
      questionsUrl: 'https://example.com',
      presenter: {
        name: 'Test Presenter 1',
        rank: 'Test Rank 1',
        pictureUrl: 'https://example.com/presenter1.jpg',
      },
    },
  },
  presentations: [
    {
      slug: 'test-presentation-1',
      title: 'Test Presentation 1',
      room: 'IB028',
      language: 'en',
      startTime: '2021-01-01 12:00:00',
      endTime: '2021-01-01 13:00:00',
      description: 'Test Description 1',
      questionsUrl: 'https://example.com',
      presenter: {
        name: 'Test Presenter 1',
        rank: 'Test Rank 1',
        pictureUrl: 'https://example.com/presenter1.jpg',
      },
    },
    {
      slug: 'test-presentation-2',
      title: 'Test Presentation 2',
      room: 'IB028',
      language: 'en',
      startTime: '2021-01-01 12:00:00',
      endTime: '2021-01-01 13:00:00',
      description: 'Test Description 2',
      questionsUrl: 'https://example.com',
      presenter: {
        name: 'Test Presenter 2',
        rank: 'Test Rank 2',
        pictureUrl: 'https://example.com/presenter2.jpg',
        company: {
          name: 'Test Company 3',
          logoUrl: 'https://i.imgur.com/ZiHu8Wo.png',
          url: 'https://example.com',
          category: SponsorCategory.FEATURED_SPONSOR,
        },
      },
    },
    {
      slug: 'test-presentation-3',
      title: 'Test Presentation 3',
      room: 'IB025',
      language: 'en',
      startTime: '2021-01-01 12:00:00',
      endTime: '2021-01-01 13:00:00',
      description: 'Test Description 3',
      questionsUrl: 'https://example.com',
      presenter: {
        name: 'Invisible Test Presenter',
        rank: 'Test Rank 3',
        pictureUrl: 'https://example.com/presenter3.jpg',
      },
    },
  ],
};
