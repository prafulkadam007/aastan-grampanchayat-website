import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Reveal } from '@/components/ui/Reveal';
import { Badge, type BadgeTone } from '@/components/ui/Badge';
import { getSchemeBySlug, getSchemes } from '@/content/repositories';
import { canonicalFor, alternatesFor, SITE_URL } from '@/lib/seo';
import { pickLocale } from '@/lib/i18n-helpers';
import type { Locale, SchemeCategory } from '@/content/types';

const TONE: Record<SchemeCategory, BadgeTone> = {
  central: 'accent',
  state: 'success',
  panchayat: 'primary',
};

export async function generateStaticParams() {
  const schemes = await getSchemes();
  return schemes.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const scheme = await getSchemeBySlug(slug);
  if (!scheme) return {};
  const path = `/schemes/${slug}`;
  return {
    title: pickLocale(scheme.title, locale),
    description: pickLocale(scheme.shortDescription, locale),
    alternates: { canonical: canonicalFor(locale, path), ...alternatesFor(path) },
  };
}

export default async function SchemeDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const scheme = await getSchemeBySlug(slug);
  if (!scheme) notFound();

  const t = await getTranslations({ locale, namespace: 'schemes' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    name: pickLocale(scheme.title, locale),
    description: pickLocale(scheme.shortDescription, locale),
    serviceType: pickLocale(scheme.title, locale),
    inLanguage: locale === 'mr' ? 'mr-IN' : 'en-IN',
    url: `${SITE_URL}/${locale}/schemes/${slug}`,
  };

  return (
    <Container className="py-10 sm:py-14 max-w-4xl">
      <Breadcrumbs
        items={[
          { label: tNav('home'), href: '/' },
          { label: tNav('schemes'), href: '/schemes' },
          { label: pickLocale(scheme.title, locale) },
        ]}
      />
      <article>
        <Reveal>
          <Badge tone={TONE[scheme.category]} className="mb-3">
            {t(`categories.${scheme.category}`)}
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
            {pickLocale(scheme.title, locale)}
          </h1>
          <p className="text-lg text-[var(--color-ink-secondary)] mb-6">{pickLocale(scheme.shortDescription, locale)}</p>
          <div className="prose max-w-none text-[var(--color-ink)] mb-8 whitespace-pre-line">
            {pickLocale(scheme.body, locale)}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <section className="mb-6 bg-[var(--color-accent-soft)] rounded-xl p-5">
            <h2 className="text-lg font-bold text-[var(--color-primary)] mb-3">{t('eligibility')}</h2>
            <ul className="list-disc pl-5 space-y-1 text-[var(--color-ink)]">
              {pickLocale(scheme.eligibility, locale).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={240}>
          <section className="mb-6 bg-[var(--color-success-soft)] rounded-xl p-5">
            <h2 className="text-lg font-bold text-[var(--color-primary)] mb-3">{t('documentsRequired')}</h2>
            <ul className="list-disc pl-5 space-y-1 text-[var(--color-ink)]">
              {pickLocale(scheme.documentsRequired, locale).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={360}>
          <section className="mb-6 bg-[var(--color-primary-soft)] rounded-xl p-5">
            <h2 className="text-lg font-bold text-[var(--color-primary)] mb-3">{t('applicationProcess')}</h2>
            <p className="text-[var(--color-ink)] whitespace-pre-line">
              {pickLocale(scheme.applicationProcess, locale)}
            </p>
          </section>
        </Reveal>

        {scheme.authorityLink ? (
          <Reveal delay={480}>
            <a
              href={scheme.authorityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-accent-strong)] hover:text-[var(--color-accent-hover)] font-semibold"
            >
              <ExternalLink className="w-4 h-4" aria-hidden />
              {scheme.authorityLink}
            </a>
          </Reveal>
        ) : null}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Container>
  );
}
