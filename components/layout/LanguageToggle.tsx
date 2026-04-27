'use client';

import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export function LanguageToggle({ label }: { label: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const target = locale === 'mr' ? 'en' : 'mr';
  const targetLabel = locale === 'mr' ? 'English' : 'मराठी';

  return (
    <button
      type="button"
      onClick={() =>
        startTransition(() => {
          router.replace(pathname, { locale: target });
        })
      }
      className="flex items-center gap-1.5 sm:gap-2 bg-[var(--color-accent-soft)] hover:bg-[var(--color-accent)] hover:text-white active:bg-[var(--color-accent-hover)] text-[var(--color-accent-strong)] px-3 sm:px-4 py-2 rounded-lg font-semibold transition text-xs sm:text-sm touch-target disabled:opacity-60"
      aria-label={label}
      lang={target}
      disabled={isPending}
    >
      <Globe className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
      <span className="hidden sm:inline">{targetLabel}</span>
    </button>
  );
}
