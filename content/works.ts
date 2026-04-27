import type { Work } from './types';

export const works: Work[] = [
  {
    id: 'work-1',
    slug: 'road-construction-2024',
    title: { mr: 'अंतर्गत रस्ता बांधकाम', en: 'Internal Road Construction' },
    description: {
      mr: 'गावातील मुख्य रस्त्यांचे काँक्रिटीकरण आणि सुधारणा.',
      en: 'Concretization and upgrade of main internal roads in the village.',
    },
    status: 'completed',
    budgetINR: 2_500_000,
    year: 2024,
    completionDate: '2024-11-15',
    category: { mr: 'पायाभूत सुविधा', en: 'Infrastructure' },
    images: [
      {
        src: '/images/dev-works/work1.jpg',
        alt: { mr: 'रस्ता बांधकाम', en: 'Road construction work' },
      },
    ],
    featured: true,
  },
  {
    id: 'work-2',
    slug: 'water-supply-upgrade',
    title: { mr: 'पाणीपुरवठा यंत्रणा सुधारणा', en: 'Water Supply System Upgrade' },
    description: {
      mr: 'नवीन पाण्याची टाकी आणि वितरण नेटवर्क बांधकाम.',
      en: 'New water tank and distribution network installation.',
    },
    status: 'completed',
    budgetINR: 2_000_000,
    year: 2024,
    completionDate: '2024-08-20',
    category: { mr: 'पाणी', en: 'Water' },
    images: [
      {
        src: '/images/dev-works/work2.jpg',
        alt: { mr: 'पाणीपुरवठा प्रकल्प', en: 'Water supply project' },
      },
    ],
    featured: true,
  },
  {
    id: 'work-3',
    slug: 'community-hall',
    title: { mr: 'समाजमंदिर बांधकाम', en: 'Community Hall Construction' },
    description: {
      mr: 'गावातील सामाजिक कार्यक्रम आणि बैठकांसाठी समाजमंदिर.',
      en: 'Community hall for village social events and meetings.',
    },
    status: 'completed',
    budgetINR: 1_800_000,
    year: 2023,
    completionDate: '2023-12-10',
    category: { mr: 'सामुदायिक', en: 'Community' },
    images: [
      {
        src: '/images/dev-works/work3.jpg',
        alt: { mr: 'समाजमंदिर', en: 'Community hall' },
      },
    ],
  },
  {
    id: 'work-4',
    slug: 'drainage-system',
    title: { mr: 'गटार यंत्रणा बांधकाम', en: 'Drainage System Construction' },
    description: {
      mr: 'गावातील स्वच्छतेसाठी गटार आणि पावसाळी पाणी निचरा यंत्रणा.',
      en: 'Drainage and stormwater disposal system for village sanitation.',
    },
    status: 'in-progress',
    budgetINR: 1_500_000,
    year: 2024,
    startDate: '2024-09-01',
    category: { mr: 'स्वच्छता', en: 'Sanitation' },
    images: [
      {
        src: '/images/dev-works/work4.jpg',
        alt: { mr: 'गटार बांधकाम', en: 'Drainage construction' },
      },
    ],
    featured: true,
  },
  {
    id: 'work-5',
    slug: 'school-renovation',
    title: { mr: 'जिल्हा परिषद शाळा नूतनीकरण', en: 'ZP School Renovation' },
    description: {
      mr: 'जिल्हा परिषद शाळेच्या इमारतीचे नूतनीकरण व डिजिटल वर्गखोली.',
      en: 'Renovation of ZP school building and digital classroom setup.',
    },
    status: 'completed',
    budgetINR: 2_200_000,
    year: 2024,
    completionDate: '2024-06-30',
    category: { mr: 'शिक्षण', en: 'Education' },
    images: [
      {
        src: '/images/dev-works/work5.jpg',
        alt: { mr: 'शाळा नूतनीकरण', en: 'School renovation' },
      },
    ],
  },
];
