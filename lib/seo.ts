import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/content/types';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://astan-grampanchayat.vercel.app';

export const DEFAULT_LOCALE: Locale = 'mr';

export function canonicalFor(locale: Locale, path = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const trimmed = cleanPath === '/' ? '' : cleanPath;
  return `${SITE_URL}/${locale}${trimmed}`;
}

export function alternatesFor(path = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const trimmed = cleanPath === '/' ? '' : cleanPath;
  return {
    languages: {
      'mr-IN': `${SITE_URL}/mr${trimmed}`,
      'en-IN': `${SITE_URL}/en${trimmed}`,
      'x-default': `${SITE_URL}/${DEFAULT_LOCALE}${trimmed}`,
    },
  };
}

interface BuildMetadataOpts {
  locale: Locale;
  path?: string;
  titleKey: string;
  descriptionKey: string;
  namespace?: string;
}

export async function buildMetadata({
  locale,
  path = '',
  titleKey,
  descriptionKey,
  namespace,
}: BuildMetadataOpts): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const title = t(titleKey);
  const description = t(descriptionKey);
  const canonical = canonicalFor(locale, path);

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      ...alternatesFor(path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: locale === 'mr' ? 'आस्तान ग्रामपंचायत' : 'Astan Gram Panchayat',
      locale: locale === 'mr' ? 'mr_IN' : 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
