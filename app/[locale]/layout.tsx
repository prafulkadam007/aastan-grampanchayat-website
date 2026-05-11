import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { inter, notoDevanagari, tiroDevanagari } from '@/lib/fonts';
import { SITE_URL } from '@/lib/seo';
import { ComingSoon } from '@/components/ComingSoon';
import type { Locale } from '@/content/types';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    return {};
  }
  return {
    metadataBase: new URL(SITE_URL),
    title: 'तात्पुरते उपलब्ध नाही · Temporarily Unavailable — आस्तान ग्रामपंचायत',
    description:
      'आस्तान ग्रामपंचायतीचे संकेतस्थळ तात्पुरते उपलब्ध नाही. The Astan Gram Panchayat website is temporarily unavailable.',
    icons: { icon: '/icon.png' },
    robots: { index: false, follow: false },
  };
}

export default async function LocaleLayout({
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${inter.variable} ${notoDevanagari.variable} ${tiroDevanagari.variable}`}
    >
      <body>
        <ComingSoon />
      </body>
    </html>
  );
}
