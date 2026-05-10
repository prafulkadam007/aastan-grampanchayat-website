import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { MemberCard } from '@/components/cards/MemberCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getMembers } from '@/content/repositories';
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
    path: '/members',
    namespace: 'meta.members',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function MembersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'members' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const leadership = await getMembers('leadership');
  const staff = await getMembers('staff');

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('members') }]} />
      <Reveal>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />
      </Reveal>

      <section className="mb-12" aria-labelledby="leadership-heading">
        <Reveal>
          <h2 id="leadership-heading" className="text-xl font-bold text-[var(--color-primary)] mb-5">
            {t('leadership')}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] p-6">
          {leadership.map((m, idx) => (
            <Reveal key={m.id} delay={idx * 180}>
              <MemberCard member={m} locale={locale} size="lg" />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="staff-heading">
        <Reveal>
          <h2 id="staff-heading" className="text-xl font-bold text-[var(--color-primary)] mb-5">
            {t('staff')}
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[var(--color-card-soft)] rounded-xl border border-[var(--color-border-soft)] p-5">
          {staff.map((m, idx) => (
            <Reveal key={m.id} delay={idx * 120}>
              <MemberCard member={m} locale={locale} size="md" />
            </Reveal>
          ))}
        </div>
      </section>
    </Container>
  );
}
