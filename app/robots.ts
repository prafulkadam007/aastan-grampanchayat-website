import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_COMING_SOON === 'true') {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
      host: SITE_URL,
    };
  }
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
