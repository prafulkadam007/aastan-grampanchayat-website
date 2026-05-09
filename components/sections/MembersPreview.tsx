import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { MemberCard } from '@/components/cards/MemberCard';
import { getMembers } from '@/content/repositories';
import type { Locale } from '@/content/types';

export async function MembersPreview({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'members' });
  const leadership = await getMembers('leadership');

  return (
    <section className="py-10 sm:py-12 bg-[var(--color-bg)]" aria-labelledby="members-heading">
      <Container>
        <Reveal>
          <SectionHeading
            title={<span id="members-heading">{t('title')}</span>}
            subtitle={t('subtitle')}
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 p-6">
              {leadership.map((m, idx) => (
                <div
                  key={m.id}
                  className={
                    idx < leadership.length - 1
                      ? 'border-b sm:border-b-0 sm:border-r border-[var(--color-border-soft)] pb-4 sm:pb-0 sm:pr-4'
                      : ''
                  }
                >
                  <MemberCard member={m} locale={locale} size="md" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-6 text-center">
          <Link
            href="/members"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-strong)] hover:text-[var(--color-accent-hover)]"
          >
            {t('viewAll')}
            <ChevronRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
