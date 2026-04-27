import type { DownloadItem } from './types';

export const downloads: DownloadItem[] = [
  {
    id: 'birth-cert-form',
    title: { mr: 'जन्म दाखला अर्ज', en: 'Birth Certificate Application' },
    description: {
      mr: 'नवजात बाळाच्या जन्म नोंदणीसाठी अर्ज नमुना.',
      en: 'Application form for newborn birth registration.',
    },
    href: '/downloads/birth-certificate-form.pdf',
    category: 'form',
    sizeKB: 0,
    updatedAt: '2026-01-15',
  },
  {
    id: 'death-cert-form',
    title: { mr: 'मृत्यू दाखला अर्ज', en: 'Death Certificate Application' },
    description: {
      mr: 'मृत्यू नोंदणीसाठी अर्ज नमुना.',
      en: 'Application form for death registration.',
    },
    href: '/downloads/death-certificate-form.pdf',
    category: 'form',
    sizeKB: 0,
    updatedAt: '2026-01-15',
  },
  {
    id: 'income-cert-form',
    title: { mr: 'उत्पन्न दाखला अर्ज', en: 'Income Certificate Application' },
    href: '/downloads/income-certificate-form.pdf',
    category: 'form',
    sizeKB: 0,
    updatedAt: '2026-01-15',
  },
  {
    id: 'residence-cert-form',
    title: { mr: 'रहिवासी दाखला अर्ज', en: 'Residence Certificate Application' },
    href: '/downloads/residence-certificate-form.pdf',
    category: 'form',
    sizeKB: 0,
    updatedAt: '2026-01-15',
  },
  {
    id: 'budget-2025-26',
    title: { mr: '२०२५-२६ अंदाजपत्रक', en: '2025-26 Annual Budget' },
    description: {
      mr: 'ग्रामपंचायतचे २०२५-२६ वार्षिक अंदाजपत्रक.',
      en: 'Gram Panchayat annual budget for 2025-26.',
    },
    href: '/downloads/budget-2025-26.pdf',
    category: 'report',
    sizeKB: 0,
    updatedAt: '2025-04-10',
  },
];
