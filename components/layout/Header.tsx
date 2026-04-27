import { Building2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { LanguageToggle } from './LanguageToggle';
import { MobileNav, type NavLink } from './MobileNav';
import type { Locale } from '@/content/types';

const NAV_ROUTES: { href: string; key: string }[] = [
  { href: '/', key: 'home' },
  { href: '/members', key: 'members' },
  { href: '/works', key: 'works' },
  { href: '/notices', key: 'notices' },
  { href: '/schemes', key: 'schemes' },
  { href: '/gram-sabha', key: 'gramSabha' },
  { href: '/rti', key: 'rti' },
  { href: '/contact', key: 'contact' },
];

const DESKTOP_NAV_ROUTES = NAV_ROUTES.filter((r) =>
  ['home', 'members', 'works', 'notices', 'schemes', 'contact'].includes(r.key),
);

export async function Header({ locale }: { locale: Locale }) {
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tVillage = await getTranslations({ locale, namespace: 'village' });

  const links: NavLink[] = NAV_ROUTES.map((r) => ({
    href: r.href,
    label: tNav(r.key),
  }));

  return (
    <header className="bg-[var(--color-card)] shadow-sm sticky top-0 z-30 border-b border-[var(--color-border-soft)]">
      <div
        className="h-1 sm:h-1.5"
        style={{
          background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
        }}
        aria-hidden
      />
      <Container className="py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--color-accent)] rounded-full flex items-center justify-center flex-shrink-0 ring-2 ring-[var(--color-accent-soft)]">
              <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" aria-hidden />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl md:text-2xl font-bold text-[var(--color-primary)] truncate group-hover:text-[var(--color-primary-hover)] transition">
                {tVillage('name')}
              </h1>
              <p className="text-xs sm:text-sm text-[var(--color-ink-secondary)] truncate">
                {tVillage('taluka')} • {tVillage('district')} • {tVillage('state')}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <nav className="hidden lg:flex gap-4 xl:gap-6" aria-label="Main">
              {DESKTOP_NAV_ROUTES.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="text-[var(--color-ink-secondary)] hover:text-[var(--color-accent-strong)] font-medium transition text-sm xl:text-base"
                >
                  {tNav(r.key)}
                </Link>
              ))}
            </nav>
            <LanguageToggle label={tCommon('toggleLanguage')} />
            <MobileNav
              links={links}
              openLabel={tCommon('openMenu')}
              closeLabel={tCommon('closeMenu')}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
