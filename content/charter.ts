import type { CharterCommitment } from './types';

export const charter: CharterCommitment[] = [
  {
    id: 'birth-cert',
    service: { mr: 'जन्म दाखला', en: 'Birth Certificate' },
    responsibleOfficer: { mr: 'लिपिक', en: 'Clerk' },
    timeline: { mr: '७ कार्यदिवस', en: '7 working days' },
    fee: { mr: '₹ ५०', en: '₹ 50' },
  },
  {
    id: 'death-cert',
    service: { mr: 'मृत्यू दाखला', en: 'Death Certificate' },
    responsibleOfficer: { mr: 'लिपिक', en: 'Clerk' },
    timeline: { mr: '७ कार्यदिवस', en: '7 working days' },
    fee: { mr: '₹ ५०', en: '₹ 50' },
  },
  {
    id: 'income-cert',
    service: { mr: 'उत्पन्न दाखला', en: 'Income Certificate' },
    responsibleOfficer: { mr: 'ग्रामपंचायत अधिकारी', en: 'Gram Panchayat Officer' },
    timeline: { mr: '१५ कार्यदिवस', en: '15 working days' },
    fee: { mr: '₹ १००', en: '₹ 100' },
  },
  {
    id: 'residence-cert',
    service: { mr: 'रहिवासी दाखला', en: 'Residence Certificate' },
    responsibleOfficer: { mr: 'ग्रामपंचायत अधिकारी', en: 'Gram Panchayat Officer' },
    timeline: { mr: '१० कार्यदिवस', en: '10 working days' },
    fee: { mr: '₹ ५०', en: '₹ 50' },
  },
  {
    id: 'property-tax',
    service: { mr: 'मालमत्ता कर पावती', en: 'Property Tax Receipt' },
    responsibleOfficer: { mr: 'लिपिक', en: 'Clerk' },
    timeline: { mr: 'त्याच दिवशी', en: 'Same day' },
    fee: { mr: 'देय कराप्रमाणे', en: 'As per tax due' },
  },
  {
    id: 'rti-response',
    service: { mr: 'माहिती अधिकार अर्ज प्रतिसाद', en: 'RTI Application Response' },
    responsibleOfficer: { mr: 'जन माहिती अधिकारी', en: 'Public Information Officer' },
    timeline: { mr: '३० दिवस', en: '30 days' },
    fee: { mr: '₹ १० (अर्ज शुल्क)', en: '₹ 10 (application fee)' },
  },
  {
    id: 'grievance',
    service: { mr: 'तक्रार निवारण', en: 'Grievance Redressal' },
    responsibleOfficer: { mr: 'सरपंच', en: 'Sarpanch' },
    timeline: { mr: '३० दिवस (नियोजित)', en: '30 days (target)' },
  },
];
