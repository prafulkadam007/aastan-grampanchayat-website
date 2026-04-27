import { Mail, MapPin, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getVillage } from '@/content/repositories';
import { pickLocale } from '@/lib/i18n-helpers';
import type { Locale } from '@/content/types';

export async function ContactSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'contact' });
  const village = await getVillage();

  return (
    <section className="py-12 sm:py-16 bg-[var(--color-bg)]" id="contact">
      <Container>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-5">
              {t('office.title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent-strong)] flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">{t('office.address')}</p>
                  <p className="text-[var(--color-ink-secondary)] whitespace-pre-line">
                    {pickLocale(village.contact.addressLines, locale).join('\n')}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-accent-strong)] flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">{t('office.phone')}</p>
                  <a
                    href={`tel:${village.contact.phone}`}
                    className="text-[var(--color-ink-secondary)] hover:text-[var(--color-accent-strong)] transition"
                    dir="ltr"
                  >
                    {village.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-accent-strong)] flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">{t('office.email')}</p>
                  <a
                    href={`mailto:${village.contact.email}`}
                    className="text-[var(--color-ink-secondary)] hover:text-[var(--color-accent-strong)] transition break-all"
                  >
                    {village.contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)] mb-5">
              {t('hours.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center py-2 border-b border-[var(--color-border-soft)]">
                <span className="text-[var(--color-ink)] font-medium">{t('hours.weekdays')}</span>
                <span className="text-[var(--color-ink-secondary)]" dir="ltr">
                  {village.officeHours.weekdays}
                </span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-[var(--color-border-soft)]">
                <span className="text-[var(--color-ink)] font-medium">{t('hours.saturday')}</span>
                <span className="text-[var(--color-ink-secondary)]" dir="ltr">
                  {village.officeHours.saturday}
                </span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-[var(--color-ink)] font-medium">{t('hours.sunday')}</span>
                <span className="text-[var(--color-ink-secondary)]">{t('hours.closed')}</span>
              </li>
            </ul>
            <p className="mt-5 p-4 bg-[var(--color-accent-soft)] rounded-lg text-sm text-[var(--color-accent-strong)]">
              {t('hours.note')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
