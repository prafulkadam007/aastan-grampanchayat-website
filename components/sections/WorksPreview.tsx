import { ChevronRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { WorksCarousel, type CarouselSlide } from './WorksCarousel';
import { getWorks } from '@/content/repositories';
import { formatINR, pickLocale } from '@/lib/i18n-helpers';
import type { Locale } from '@/content/types';

export async function WorksPreview({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'works' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const works = await getWorks({ featured: true });

  const slides: CarouselSlide[] = works.map((w) => {
    const cover = w.images[0];
    const statusKey = w.status === 'in-progress' ? 'inProgress' : w.status;
    return {
      id: w.id,
      src: cover?.src ?? '',
      alt: cover ? pickLocale(cover.alt, locale) : pickLocale(w.title, locale),
      title: pickLocale(w.title, locale),
      description: pickLocale(w.description, locale),
      category: pickLocale(w.category, locale),
      statusLabel: t(statusKey),
      statusTone: w.status,
      budget: w.budgetINR ? formatINR(w.budgetINR, locale) : undefined,
      year: w.year,
    };
  });

  return (
    <section className="py-12 sm:py-16 bg-[var(--color-bg)]" id="works">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={locale === 'mr' ? 'ग्रामविकास' : 'Village Development'}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </Reveal>
        <Reveal delay={120}>
          <WorksCarousel
            slides={slides}
            prevLabel={locale === 'mr' ? 'मागील स्लाइड' : 'Previous slide'}
            nextLabel={locale === 'mr' ? 'पुढील स्लाइड' : 'Next slide'}
          />
        </Reveal>
        <div className="mt-8 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-1 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-lg font-semibold transition touch-target lift-on-hover"
          >
            {t('viewAll')}
            <ChevronRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
        <p className="sr-only">{tCommon('loading')}</p>
      </Container>
    </section>
  );
}
