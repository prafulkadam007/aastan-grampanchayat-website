import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ContactSection } from '@/components/sections/ContactSection';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/contact',
    namespace: 'meta.contact',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactSection locale={locale} />;
}
