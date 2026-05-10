import type { VillageIdentity } from './types';

export const village: VillageIdentity = {
  name: { mr: 'आस्तान ग्रामपंचायत', en: 'Astan Gram Panchayat' },
  shortName: { mr: 'आस्तान', en: 'Astan' },
  taluka: { mr: 'खेड', en: 'Khed' },
  district: { mr: 'रत्नागिरी', en: 'Ratnagiri' },
  state: { mr: 'महाराष्ट्र', en: 'Maharashtra' },
  pin: '415730',
  established: '1958-04-11',
  area: { hectares: 3521.77 },
  population: { total: 2185, male: 1042, female: 1143 },
  households: 548,
  anganwadiCount: 5,
  govtSchoolCount: 6,
  privateSchoolCount: 2,
  contact: {
    phone: '+918080789174',
    email: 'grampanchayatastan@gmail.com',
    addressLines: {
      mr: ['ग्रामपंचायत कार्यालय', 'आस्तान, खेड तालुका', 'रत्नागिरी जिल्हा, महाराष्ट्र - ४१५७३०'],
      en: [
        'Gram Panchayat Office',
        'Astan, Khed Taluka',
        'Ratnagiri District, Maharashtra - 415730',
      ],
    },
  },
  officeHours: {
    weekdays: '9:45 AM - 6:15 PM',
    saturday: 'closed',
    sunday: 'closed',
  },
};
