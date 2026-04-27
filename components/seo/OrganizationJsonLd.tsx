import { getVillage } from '@/content/repositories';
import { pickLocale } from '@/lib/i18n-helpers';
import { SITE_URL } from '@/lib/seo';
import type { Locale } from '@/content/types';

export async function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const village = await getVillage();

  const data = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: pickLocale(village.name, locale),
    alternateName: pickLocale(village.name, locale === 'mr' ? 'en' : 'mr'),
    url: `${SITE_URL}/${locale}`,
    telephone: village.contact.phone,
    email: village.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: pickLocale(village.shortName, locale),
      addressLocality: pickLocale(village.taluka, locale),
      addressRegion: pickLocale(village.state, locale),
      postalCode: village.pin,
      addressCountry: 'IN',
    },
    areaServed: pickLocale(village.shortName, locale),
    parentOrganization: {
      '@type': 'GovernmentOrganization',
      name: locale === 'mr' ? 'खेड पंचायत समिती' : 'Khed Panchayat Samiti',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
