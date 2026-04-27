import type { GalleryItem } from './types';

export const gallery: GalleryItem[] = [
  {
    id: 'office-1',
    src: '/images/office.jpg',
    alt: { mr: 'ग्रामपंचायत कार्यालय', en: 'Gram Panchayat office' },
    album: 'office',
  },
  {
    id: 'work-1',
    src: '/images/dev-works/work1.jpg',
    alt: { mr: 'रस्ता बांधकाम प्रकल्प', en: 'Road construction project' },
    album: 'works',
  },
  {
    id: 'work-2',
    src: '/images/dev-works/work2.jpg',
    alt: { mr: 'पाणीपुरवठा सुधारणा', en: 'Water supply upgrade' },
    album: 'works',
  },
  {
    id: 'work-3',
    src: '/images/dev-works/work3.jpg',
    alt: { mr: 'समाजमंदिर बांधकाम', en: 'Community hall construction' },
    album: 'works',
  },
  {
    id: 'work-4',
    src: '/images/dev-works/work4.jpg',
    alt: { mr: 'गटार यंत्रणा', en: 'Drainage system' },
    album: 'works',
  },
  {
    id: 'work-5',
    src: '/images/dev-works/work5.jpg',
    alt: { mr: 'शाळा नूतनीकरण', en: 'School renovation' },
    album: 'works',
  },
];
