import { getTranslations } from 'next-intl/server';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { getVillage } from '@/content/repositories';
import { pickLocale } from '@/lib/i18n-helpers';
import type { Locale } from '@/content/types';

const QUICK_LINKS: { href: string; key: string }[] = [
  { href: '/members', key: 'members' },
  { href: '/works', key: 'works' },
  { href: '/notices', key: 'notices' },
  { href: '/schemes', key: 'schemes' },
  { href: '/rti', key: 'rti' },
  { href: '/charter', key: 'charter' },
  { href: '/downloads', key: 'downloads' },
  { href: '/privacy', key: 'privacy' },
];

export async function Footer({ locale }: { locale: Locale }) {
  const village = await getVillage();
  const t = await getTranslations({ locale, namespace: 'footer' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white py-10 mt-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">{pickLocale(village.name, locale)}</h2>
            <p className="text-sm text-white/80">{t('mission')}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/85 hover:text-[var(--color-accent)] transition">
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
              {t('contactInfo')}
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-accent)] flex-shrink-0" aria-hidden />
                <span className="whitespace-pre-line">{village.contact.addressLines[locale].join('\n')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" aria-hidden />
                <a href={`tel:${village.contact.phone}`} className="hover:text-[var(--color-accent)] transition" dir="ltr">
                  {village.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" aria-hidden />
                <a
                  href={`mailto:${village.contact.email}`}
                  className="hover:text-[var(--color-accent)] transition break-all"
                >
                  {village.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="h-0.5 my-6"
          style={{
            background:
              'linear-gradient(to right, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)',
          }}
          aria-hidden
        />
        <p className="text-center text-sm text-white/70">
          © {year} {t('copyright')}
        </p>
      </Container>
    </footer>
  );
}
