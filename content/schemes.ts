import type { Scheme } from './types';

export const schemes: Scheme[] = [
  {
    id: 'pmay-g',
    slug: 'pradhan-mantri-awas-yojana-gramin',
    title: {
      mr: 'प्रधानमंत्री आवास योजना (ग्रामीण)',
      en: 'Pradhan Mantri Awas Yojana — Gramin',
    },
    shortDescription: {
      mr: 'गरीब व बेघर ग्रामीण कुटुंबांना पक्के घर बांधण्यासाठी आर्थिक सहाय्य.',
      en: 'Financial assistance for permanent housing for poor and homeless rural families.',
    },
    body: {
      mr: 'पीएमएवाय-ग्रामीण अंतर्गत पात्र कुटुंबांना घर बांधकामासाठी ₹१.२० लाख ते ₹१.३० लाख अनुदान दिले जाते. हप्त्यांमध्ये थेट लाभार्थ्याच्या बँक खात्यात जमा.',
      en: 'Under PMAY-G, eligible families receive ₹1.20-1.30 lakh subsidy in instalments directly transferred to their bank account.',
    },
    eligibility: {
      mr: [
        'SECC २०११ यादीतील पात्र कुटुंबे',
        'बेघर किंवा कच्चे घर असलेले कुटुंब',
        'इतर सरकारी आवास योजनेचा लाभ न घेतलेले',
      ],
      en: [
        'Families listed in SECC 2011 database',
        'Homeless or living in kutcha houses',
        'Not benefited from other government housing schemes',
      ],
    },
    documentsRequired: {
      mr: ['आधार कार्ड', 'बँक खाते तपशील', 'जॉब कार्ड (असल्यास)', 'जातीचा दाखला (आरक्षित प्रवर्गासाठी)'],
      en: [
        'Aadhaar card',
        'Bank account details',
        'Job card (if any)',
        'Caste certificate (for reserved category)',
      ],
    },
    applicationProcess: {
      mr: 'ग्रामपंचायत कार्यालयात अर्ज भरून आवश्यक कागदपत्रे सादर करा. ग्रामसभेद्वारे पात्रता पडताळणी केली जाते.',
      en: 'Submit application at the Gram Panchayat office with required documents. Eligibility is verified through Gram Sabha.',
    },
    category: 'central',
    authorityLink: 'https://pmayg.nic.in',
  },
  {
    id: 'mgnrega',
    slug: 'mgnrega',
    title: {
      mr: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना (MGNREGA)',
      en: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
    },
    shortDescription: {
      mr: 'प्रत्येक ग्रामीण कुटुंबाला वर्षात किमान १०० दिवस रोजगाराची हमी.',
      en: 'Guaranteed minimum 100 days of wage employment per year to rural households.',
    },
    body: {
      mr: 'अकुशल कामासाठी प्रति दिन निश्चित मजुरी. कामाचे ठिकाण घरापासून ५ किमीच्या आत. महिलांसाठी किमान ३३% आरक्षण.',
      en: 'Fixed daily wage for unskilled work. Work site within 5 km of home. Minimum 33% reservation for women.',
    },
    eligibility: {
      mr: ['गावातील प्रौढ नागरिक (१८+)', 'अकुशल काम करण्यास इच्छुक', 'जॉब कार्ड असणे आवश्यक'],
      en: [
        'Adult residents (18+) of the village',
        'Willing to do unskilled manual work',
        'Must have a job card',
      ],
    },
    documentsRequired: {
      mr: ['आधार कार्ड', 'रहिवासी प्रमाणपत्र', 'पासपोर्ट साइज फोटो'],
      en: ['Aadhaar card', 'Residence proof', 'Passport-size photograph'],
    },
    applicationProcess: {
      mr: 'जॉब कार्डसाठी ग्रामपंचायत कार्यालयात अर्ज द्या. कामाची मागणी लेखी स्वरूपात सादर करा.',
      en: 'Apply at the Gram Panchayat office for a job card. Submit work demand in writing.',
    },
    category: 'central',
    authorityLink: 'https://nrega.nic.in',
  },
  {
    id: 'ujjwala',
    slug: 'pradhan-mantri-ujjwala-yojana',
    title: {
      mr: 'प्रधानमंत्री उज्ज्वला योजना',
      en: 'Pradhan Mantri Ujjwala Yojana',
    },
    shortDescription: {
      mr: 'गरीब कुटुंबातील महिलांना मोफत एलपीजी कनेक्शन.',
      en: 'Free LPG connections for women from poor households.',
    },
    body: {
      mr: 'पात्र कुटुंबांना ठेव शुल्क माफ करून एलपीजी कनेक्शन दिले जाते. प्रथम सिलिंडर व रेग्युलेटर मोफत.',
      en: 'Eligible households receive LPG connection with deposit waiver. First cylinder and regulator free.',
    },
    eligibility: {
      mr: ['SECC २०११ यादीतील पात्र कुटुंबे', 'अनुसूचित जाती/जमाती', 'अंत्योदय कुटुंबे', 'PMAY ग्रामीण लाभार्थी'],
      en: [
        'SECC 2011 listed families',
        'SC/ST households',
        'Antyodaya families',
        'PMAY-G beneficiaries',
      ],
    },
    documentsRequired: {
      mr: ['आधार कार्ड (अर्जदाराचे)', 'बँक खाते तपशील', 'रेशन कार्ड', 'पासपोर्ट साइज फोटो'],
      en: [
        'Aadhaar card (of applicant)',
        'Bank account details',
        'Ration card',
        'Passport-size photograph',
      ],
    },
    applicationProcess: {
      mr: 'जवळच्या एलपीजी वितरकाकडे किंवा ग्रामपंचायत कार्यालयात अर्ज सादर करा.',
      en: 'Submit application at the nearest LPG distributor or Gram Panchayat office.',
    },
    category: 'central',
    authorityLink: 'https://pmuy.gov.in',
  },
  {
    id: 'jal-jeevan',
    slug: 'jal-jeevan-mission',
    title: {
      mr: 'जल जीवन मिशन',
      en: 'Jal Jeevan Mission',
    },
    shortDescription: {
      mr: 'प्रत्येक ग्रामीण कुटुंबाला नळाद्वारे शुद्ध पिण्याचे पाणी.',
      en: 'Functional household tap connection providing safe drinking water to every rural home.',
    },
    body: {
      mr: 'प्रत्येक घरात कार्यरत नळ कनेक्शन उपलब्ध करून देणे हे मिशनचे उद्दिष्ट आहे. ग्रामपंचायत कार्यान्वयन भागीदार.',
      en: 'The mission aims to provide functional tap connections to every household. Gram Panchayat is the implementation partner.',
    },
    eligibility: {
      mr: ['गावातील सर्व कुटुंबे'],
      en: ['All village households'],
    },
    documentsRequired: {
      mr: ['आधार कार्ड', 'मालमत्ता तपशील'],
      en: ['Aadhaar card', 'Property details'],
    },
    applicationProcess: {
      mr: 'ग्रामपंचायत कार्यालयात संपर्क साधा.',
      en: 'Contact the Gram Panchayat office.',
    },
    category: 'central',
    authorityLink: 'https://jaljeevanmission.gov.in',
  },
];
