import Image from 'next/image';
import { Phone } from 'lucide-react';
import type { Locale, Member } from '@/content/types';
import { pickLocale } from '@/lib/i18n-helpers';

export function MemberCard({
  member,
  locale,
  size = 'md',
}: {
  member: Member;
  locale: Locale;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dim = size === 'lg' ? 96 : size === 'sm' ? 56 : 80;
  const wrapper =
    size === 'lg' ? 'w-24 h-24' : size === 'sm' ? 'w-14 h-14' : 'w-20 h-20';

  return (
    <div className="text-center">
      <div className={`${wrapper} rounded-md overflow-hidden bg-[var(--color-card-soft)] mx-auto mb-3 ring-1 ring-[var(--color-border)]`}>
        <Image
          src={member.photo}
          alt={pickLocale(member.name, locale)}
          width={dim}
          height={dim}
          className="w-full h-full object-cover"
          sizes={`${dim}px`}
        />
      </div>
      <p className="text-[11px] sm:text-xs font-semibold text-[var(--color-ink-muted)] uppercase tracking-wide mb-1">
        {pickLocale(member.roleLabel, locale)}
      </p>
      <p className="text-sm sm:text-base font-semibold text-[var(--color-primary)] mb-1 break-words px-1">
        {pickLocale(member.name, locale)}
      </p>
      {member.tenureStart && member.tenureEnd ? (
        <p className="text-xs text-[var(--color-ink-muted)] mb-2">
          {new Date(member.tenureStart).getFullYear()}–{new Date(member.tenureEnd).getFullYear()}
        </p>
      ) : null}
      {member.phone ? (
        <a
          href={`tel:${member.phone}`}
          className="text-xs sm:text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-accent-strong)] transition inline-flex items-center justify-center gap-1 touch-target"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden />
          <span dir="ltr">{member.phone}</span>
        </a>
      ) : null}
    </div>
  );
}
