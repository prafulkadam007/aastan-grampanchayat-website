import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuickActionsSection } from '@/components/sections/QuickActionsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { MembersPreview } from '@/components/sections/MembersPreview';
import { WorksPreview } from '@/components/sections/WorksPreview';
import { NoticesPreview } from '@/components/sections/NoticesPreview';
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
    path: '',
    namespace: 'meta.home',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection locale={locale} />
      <QuickActionsSection locale={locale} />
      <StatsSection locale={locale} />
      <MembersPreview locale={locale} />
      <WorksPreview locale={locale} />
      <NoticesPreview locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
