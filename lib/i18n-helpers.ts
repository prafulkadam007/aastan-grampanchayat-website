import type { Locale, Localized } from '@/content/types';

export function pickLocale<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

const DEVANAGARI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export function toDevanagariNumerals(input: string | number): string {
  return String(input).replace(/\d/g, (d) => DEVANAGARI_DIGITS[Number(d)]);
}

export function formatDate(iso: string, locale: Locale): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === 'mr' ? 'mr-IN' : 'en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatINR(amount: number, locale: Locale): string {
  if (amount >= 10_000_000) {
    const crore = amount / 10_000_000;
    const num = crore.toLocaleString(locale === 'mr' ? 'mr-IN' : 'en-IN', {
      maximumFractionDigits: 2,
    });
    return locale === 'mr' ? `₹ ${num} कोटी` : `₹ ${num} Cr`;
  }
  if (amount >= 100_000) {
    const lakh = amount / 100_000;
    const num = lakh.toLocaleString(locale === 'mr' ? 'mr-IN' : 'en-IN', {
      maximumFractionDigits: 2,
    });
    return locale === 'mr' ? `₹ ${num} लाख` : `₹ ${num} Lakh`;
  }
  const num = amount.toLocaleString(locale === 'mr' ? 'mr-IN' : 'en-IN');
  return `₹ ${num}`;
}

export function localizeNumber(n: number, locale: Locale): string {
  return n.toLocaleString(locale === 'mr' ? 'mr-IN' : 'en-IN');
}
