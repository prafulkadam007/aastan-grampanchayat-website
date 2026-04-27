import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NoticeCard } from '@/components/cards/NoticeCard';
import { getNotices } from '@/content/repositories';
import type { Locale } from '@/content/types';

export async function NoticesPreview({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'notices' });
  const notices = await getNotices({ limit: 3 });

  return (
    <section className="py-12 sm:py-16 bg-[var(--color-card-soft)]" id="notices">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {notices.map((n) => (
            <NoticeCard
              key={n.id}
              notice={n}
              locale={locale}
              categoryLabel={t(`categories.${n.category}`)}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/notices"
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
