import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getNotices, getSchemes } from '@/content/repositories';

const STATIC_PATHS = [
  '',
  '/about',
  '/members',
  '/works',
  '/notices',
  '/schemes',
  '/gram-sabha',
  '/rti',
  '/charter',
  '/gallery',
  '/downloads',
  '/contact',
  '/privacy',
];

const LOCALES = ['mr', 'en'] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notices = await getNotices();
  const schemes = await getSchemes();

  const dynamicPaths = [
    ...notices.map((n) => `/notices/${n.slug}`),
    ...schemes.map((s) => `/schemes/${s.slug}`),
  ];

  const allPaths = [...STATIC_PATHS, ...dynamicPaths];

  return allPaths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.7,
      alternates: {
        languages: {
          'mr-IN': `${SITE_URL}/mr${path}`,
          'en-IN': `${SITE_URL}/en${path}`,
        },
      },
    })),
  );
}
