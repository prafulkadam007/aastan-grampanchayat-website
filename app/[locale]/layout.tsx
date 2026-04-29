import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { inter, notoDevanagari, tiroDevanagari } from '@/lib/fonts';
import { alternatesFor, canonicalFor, SITE_URL } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { StickyCallBar } from '@/components/layout/StickyCallBar';
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd';
import { ComingSoon } from '@/components/ComingSoon';
import { getMemberById } from '@/content/repositories';
import type { Locale } from '@/content/types';
import '../globals.css';

const COMING_SOON = process.env.NEXT_PUBLIC_COMING_SOON === 'true';
const PREVIEW_COOKIE = 'gp_preview';

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

  if (COMING_SOON) {
    return {
      metadataBase: new URL(SITE_URL),
      title: 'लवकरच येत आहे · Coming Soon — आस्तान ग्रामपंचायत',
      description:
        'आस्तान ग्रामपंचायतीचे अधिकृत संकेतस्थळ लवकरच सुरू होत आहे. The official website of Astan Gram Panchayat is launching soon.',
      icons: { icon: '/icon.png' },
      robots: { index: false, follow: false },
    };
  }

  const t = await getTranslations({ locale, namespace: 'meta.home' });
  const canonical = canonicalFor(locale as Locale, '');
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t('title'), template: '%s' },
    description: t('description'),
    alternates: { canonical, ...alternatesFor('') },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonical,
      type: 'website',
      locale: locale === 'mr' ? 'mr_IN' : 'en_IN',
    },
    icons: { icon: '/icon.png' },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
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

  if (COMING_SOON) {
    const cookieStore = await cookies();
    const hasPreview = cookieStore.get(PREVIEW_COOKIE)?.value === '1';
    if (!hasPreview) {
      return (
        <html lang={locale} className={`scroll-smooth ${inter.variable} ${notoDevanagari.variable} ${tiroDevanagari.variable}`}>
          <body>
            <ComingSoon />
          </body>
        </html>
      );
    }
  }

  const messages = await getMessages();
  const typedLocale = locale as Locale;
  const sarpanch = await getMemberById('sarpanch');
  const tQuick = await getTranslations({ locale, namespace: 'quickActions' });

  return (
    <html lang={locale} className={`scroll-smooth ${inter.variable} ${notoDevanagari.variable} ${tiroDevanagari.variable}`}>
      <body>
        <SkipToContent locale={typedLocale} />
        <OrganizationJsonLd locale={typedLocale} />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header locale={typedLocale} />
          <main id="main-content" tabIndex={-1} className="min-h-screen pb-24 lg:pb-0">
            {children}
          </main>
          <Footer locale={typedLocale} />
          {sarpanch?.phone ? (
            <StickyCallBar phone={sarpanch.phone} label={tQuick('stickyCallLabel')} />
          ) : null}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
