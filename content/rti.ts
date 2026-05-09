import type { RtiContact } from './types';

export const rtiContacts: RtiContact[] = [
  {
    id: 'pio',
    type: 'pio',
    designation: { mr: 'जन माहिती अधिकारी (ग्रामपंचायत अधिकारी)', en: 'Public Information Officer (Gram Panchayat Officer)' },
    name: { mr: 'श्री. मयूरेश नितीन वाकडे', en: 'Shri. Mayuresh Nitin Wakade' },
    phone: '+919881154658',
    email: 'grampanchayatastan@gmail.com',
  },
  {
    id: 'apio',
    type: 'apio',
    designation: { mr: 'सहाय्यक जन माहिती अधिकारी (लिपिक)', en: 'Assistant PIO (Clerk)' },
    name: { mr: 'सौ. ममता मंगेश जाधव', en: 'Smt. Mamta Mangesh Jadhav' },
    phone: '+919325565747',
  },
  {
    id: 'appellate',
    type: 'appellate',
    designation: { mr: 'प्रथम अपीलीय अधिकारी (सरपंच)', en: 'First Appellate Authority (Sarpanch)' },
    name: { mr: 'सौ. ज्योती विलास निकम', en: 'Smt. Jyoti Vilas Nikam' },
    phone: '+917822029166',
  },
];
