import { Building2, FileText, Home, Users } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { localizeNumber } from '@/lib/i18n-helpers';
import { getVillage } from '@/content/repositories';
import type { Locale } from '@/content/types';

interface StatTileProps {
  icon: React.ReactNode;
  numericValue: number | null;
  fallback?: string;
  locale: Locale;
  label: string;
  accent: string;
  delay: number;
}

function StatTile({ icon, numericValue, fallback, locale, label, accent, delay }: StatTileProps) {
  return (
    <Reveal delay={delay}>
      <div className="text-center p-4 sm:p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border-soft)] shadow-sm relative overflow-hidden lift-on-hover">
        <div className={`absolute top-0 inset-x-0 h-1 ${accent}`} aria-hidden />
        <div className="mx-auto mb-2 flex justify-center">{icon}</div>
        <p className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
          {numericValue !== null ? (
            <AnimatedCounter value={numericValue} locale={locale} />
          ) : (
            fallback ?? '—'
          )}
        </p>
        <p className="text-xs sm:text-sm text-[var(--color-ink-secondary)] mt-1">{label}</p>
      </div>
    </Reveal>
  );
}

export async function StatsSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'stats' });
  const village = await getVillage();

  return (
    <section className="py-10 sm:py-12 bg-[var(--color-card-soft)]" aria-labelledby="village-stats">
      <Container>
        <h2 id="village-stats" className="sr-only">
          Village statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <StatTile
            icon={<Users className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-accent-strong)]" aria-hidden />}
            numericValue={village.population?.total ?? null}
            fallback={localizeNumber(0, locale)}
            locale={locale}
            label={t('population')}
            accent="bg-[var(--color-accent)]"
            delay={0}
          />
          <StatTile
            icon={<Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-success)]" aria-hidden />}
            numericValue={village.households ?? null}
            fallback={localizeNumber(0, locale)}
            locale={locale}
            label={t('households')}
            accent="bg-[var(--color-success)]"
            delay={180}
          />
          <StatTile
            icon={<Home className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-primary)]" aria-hidden />}
            numericValue={village.anganwadiCount}
            locale={locale}
            label={t('anganwadi')}
            accent="bg-[var(--color-primary)]"
            delay={360}
          />
          <StatTile
            icon={<FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-accent-strong)]" aria-hidden />}
            numericValue={village.govtSchoolCount}
            locale={locale}
            label={t('schools')}
            accent="bg-[var(--color-accent-strong)]"
            delay={540}
          />
        </div>
      </Container>
    </section>
  );
}
