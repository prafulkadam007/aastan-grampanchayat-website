import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';

export default async function NotFound() {
  const t = await getTranslations('common');
  return (
    <Container className="py-20 text-center">
      <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">404</h1>
      <p className="text-lg text-[var(--color-ink-secondary)] mb-8">{t('noResults')}</p>
      <Link
        href="/"
        className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        {t('backToHome')}
      </Link>
    </Container>
  );
}
