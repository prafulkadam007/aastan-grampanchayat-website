import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { inter, notoDevanagari, tiroDevanagari } from '@/lib/fonts';
import { alternatesFor, canonicalFor, SITE_URL } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd';
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
  const messages = await getMessages();
  const typedLocale = locale as Locale;

  return (
    <html lang={locale} className={`scroll-smooth ${inter.variable} ${notoDevanagari.variable} ${tiroDevanagari.variable}`}>
      <body>
        <SkipToContent locale={typedLocale} />
        <OrganizationJsonLd locale={typedLocale} />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header locale={typedLocale} />
          <main id="main-content" tabIndex={-1} className="min-h-screen">
            {children}
          </main>
          <Footer locale={typedLocale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
