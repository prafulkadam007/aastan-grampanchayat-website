import type { Meeting } from './types';

export const meetings: Meeting[] = [
  {
    id: 'gs-2026-q1',
    date: '2026-02-15',
    type: 'gram-sabha',
    title: {
      mr: 'ग्रामसभा — फेब्रुवारी २०२६',
      en: 'Gram Sabha — February 2026',
    },
    agenda: {
      mr: [
        '२०२५-२६ अंदाजपत्रकाचा आढावा',
        'विकास कामांचा प्रगती अहवाल',
        'जल जीवन मिशन अंमलबजावणी',
        'नागरिकांच्या तक्रारी',
      ],
      en: [
        'Review of 2025-26 budget',
        'Development works progress report',
        'Jal Jeevan Mission implementation',
        'Citizen grievances',
      ],
    },
    attendees: 142,
    resolutions: {
      mr: [
        'अंतर्गत रस्ते दुरुस्तीसाठी ₹१० लाख मंजूर',
        'समुदाय शौचालय बांधण्यास मान्यता',
      ],
      en: [
        'Approved ₹10 lakh for internal road repairs',
        'Sanctioned construction of community toilet',
      ],
    },
  },
  {
    id: 'monthly-2026-03',
    date: '2026-03-05',
    type: 'monthly',
    title: {
      mr: 'मासिक बैठक — मार्च २०२६',
      en: 'Monthly Meeting — March 2026',
    },
    agenda: {
      mr: ['कर वसुली अहवाल', 'नवीन योजना प्रचार', 'स्वच्छता अभियान नियोजन'],
      en: ['Tax collection report', 'New scheme outreach', 'Cleanliness drive planning'],
    },
    attendees: 28,
  },
  {
    id: 'monthly-2026-04',
    date: '2026-04-02',
    type: 'monthly',
    title: {
      mr: 'मासिक बैठक — एप्रिल २०२६',
      en: 'Monthly Meeting — April 2026',
    },
    agenda: {
      mr: ['मे ग्रामसभेची तयारी', 'पाणीपुरवठा देखभाल', 'पीएमएवाय अर्जांची पडताळणी'],
      en: ['Preparation for May Gram Sabha', 'Water supply maintenance', 'PMAY application verification'],
    },
    attendees: 26,
  },
];
