import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/content/types';

export async function SkipToContent({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'common' });
  return (
    <a href="#main-content" className="skip-link">
      {t('skipToContent')}
    </a>
  );
}
