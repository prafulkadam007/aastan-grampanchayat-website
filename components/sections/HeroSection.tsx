import Image from 'next/image';
import { ChevronRight, Clock } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { formatDate, pickLocale } from '@/lib/i18n-helpers';
import { getVillage } from '@/content/repositories';
import type { Locale } from '@/content/types';

export async function HeroSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'hero' });
  const tInfo = await getTranslations({ locale, namespace: 'info' });
  const village = await getVillage();

  const officeBadge =
    locale === 'mr' ? 'सोम–शुक्र • ९:४५ – ६:१५' : 'Mon–Fri • 9:45 – 6:15';

  return (
    <section
      className="relative pt-6 pb-10 sm:py-16 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #FFE3BC 0%, #FFF1DC 25%, #FFFBF0 50%, #E3F4DC 78%, #C8E6C0 100%)',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <Reveal delay={0}>
              <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-[var(--color-accent-strong)] mb-2">
                {pickLocale(village.name, locale)}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-3 leading-tight">
                {t('title')}
              </h1>
            </Reveal>
            <Reveal delay={440}>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-ink-secondary)] mb-4">
                {t('subtitle')}
              </p>
            </Reveal>
            <Reveal delay={620}>
              <p className="text-xs sm:text-sm text-[var(--color-ink-muted)] mb-6">
                {tInfo('established')}: {formatDate(village.established, locale)}
              </p>
            </Reveal>
            <Reveal delay={820}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/members"
                  className="bg-[var(--color-accent-strong)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent-hover)] transition inline-flex items-center justify-center gap-2 touch-target shadow-lg shadow-[rgba(194,65,12,0.25)] lift-on-hover"
                >
                  {t('meetTeam')}
                  <ChevronRight className="w-5 h-5" aria-hidden />
                </Link>
                <Link
                  href="/works"
                  className="bg-[var(--color-card)] text-[var(--color-primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-soft)] transition border-2 border-[var(--color-primary)] inline-flex items-center justify-center touch-target shadow-sm lift-on-hover"
                >
                  {t('viewWork')}
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal variant="scale-fade" delay={180} className="order-1 md:order-2">
            <div className="relative h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-[var(--color-border)]">
              <Image
                src="/images/office.jpg"
                alt={locale === 'mr' ? 'आस्तान ग्रामपंचायत कार्यालय' : 'Astan Gram Panchayat office'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-md text-xs sm:text-sm font-semibold text-[var(--color-primary)] inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[var(--color-accent-strong)]" aria-hidden />
                <span>{officeBadge}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
      <div
        className="absolute bottom-0 inset-x-0 h-1"
        style={{
          background:
            'linear-gradient(to right, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)',
        }}
        aria-hidden
      />
    </section>
  );
}
