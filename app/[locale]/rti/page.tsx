import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getRtiContacts } from '@/content/repositories';
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
    path: '/rti',
    namespace: 'meta.rti',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function RtiPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'rti' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const contacts = await getRtiContacts();

  return (
    <Container className="py-10 sm:py-14 max-w-4xl">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('rti') }]} />
      <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />

      <section className="mb-10" aria-labelledby="officers-heading">
        <h2 id="officers-heading" className="text-xl font-bold text-[var(--color-primary)] mb-5">
          {t('officersTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {contacts.map((c) => (
            <article key={c.id} className="bg-[var(--color-card)] rounded-xl shadow-sm p-5 border border-[var(--color-border-soft)]">
              <p className="text-xs font-semibold text-[var(--color-ink-muted)] uppercase mb-2">
                {t(`officerTypes.${c.type}`)}
              </p>
              <h3 className="text-base font-bold text-[var(--color-primary)] mb-1">
                {pickLocale(c.designation, locale)}
              </h3>
              <p className="text-sm text-[var(--color-ink-secondary)] mb-3">{pickLocale(c.name, locale)}</p>
              {c.phone ? (
                <a
                  href={`tel:${c.phone}`}
                  className="flex items-center gap-2 text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent-strong)]"
                >
                  <Phone className="w-4 h-4" aria-hidden />
                  <span dir="ltr">{c.phone}</span>
                </a>
              ) : null}
              {c.email ? (
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-2 text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent-strong)] break-all mt-1"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden />
                  {c.email}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="grievance-heading" className="bg-[var(--color-accent-soft)] rounded-xl p-6">
        <h2 id="grievance-heading" className="text-xl font-bold text-[var(--color-primary)] mb-3">
          {t('grievanceTitle')}
        </h2>
        <p className="text-[var(--color-ink)]">{t('grievanceText')}</p>
      </section>
    </Container>
  );
}
