import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getGallery } from '@/content/repositories';
import { buildMetadata } from '@/lib/seo';
import { pickLocale } from '@/lib/i18n-helpers';
import type { Locale } from '@/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/gallery',
    namespace: 'meta.gallery',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'gallery' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const items = await getGallery();

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('gallery') }]} />
      <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {items.map((g) => (
          <figure key={g.id} className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src={g.src}
              alt={pickLocale(g.alt, locale)}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {g.caption ? (
              <figcaption className="sr-only">{pickLocale(g.caption, locale)}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </Container>
  );
}
