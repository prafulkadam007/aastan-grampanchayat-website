import { FileText, Landmark, MessageSquareWarning, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { getMemberById } from '@/content/repositories';
import type { Locale } from '@/content/types';

interface ActionTileProps {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
  iconBg: string;
  iconColor: string;
}

function ActionTile({
  href,
  external,
  icon,
  title,
  description,
  bg,
  iconBg,
  iconColor,
}: ActionTileProps) {
  const className = `group flex flex-col items-center justify-center text-center gap-2 sm:gap-3 p-5 sm:p-6 rounded-2xl ${bg} border border-[var(--color-border-soft)] shadow-sm transition active:scale-[0.98] touch-target min-h-[140px] lift-on-hover`;

  const content = (
    <>
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm sm:text-base font-bold text-[var(--color-ink)] leading-tight">{title}</p>
        <p className="text-xs sm:text-sm text-[var(--color-ink-secondary)] mt-1">{description}</p>
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export async function QuickActionsSection({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'quickActions' });
  const sarpanch = await getMemberById('sarpanch');

  return (
    <section
      className="py-8 sm:py-12 bg-[var(--color-bg)]"
      aria-labelledby="quick-actions-heading"
    >
      <Container>
        <Reveal>
          <div className="text-center mb-6 sm:mb-8">
            <h2
              id="quick-actions-heading"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-primary)]"
            >
              {t('title')}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-ink-secondary)] mt-1">
              {t('subtitle')}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <Reveal delay={0}>
            <ActionTile
              href={sarpanch?.phone ? `tel:${sarpanch.phone}` : '/contact'}
              external={Boolean(sarpanch?.phone)}
              icon={<Phone className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />}
              title={t('callSarpanch')}
              description={t('callSarpanchDesc')}
              bg="bg-[var(--color-accent-soft)]"
              iconBg="bg-[var(--color-accent)]"
              iconColor="text-white"
            />
          </Reveal>
          <Reveal delay={120}>
            <ActionTile
              href="/downloads"
              icon={<FileText className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />}
              title={t('applyCertificate')}
              description={t('applyCertificateDesc')}
              bg="bg-[var(--color-primary-soft)]"
              iconBg="bg-[var(--color-primary)]"
              iconColor="text-white"
            />
          </Reveal>
          <Reveal delay={240}>
            <ActionTile
              href="/rti"
              icon={<MessageSquareWarning className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />}
              title={t('fileGrievance')}
              description={t('fileGrievanceDesc')}
              bg="bg-[var(--color-danger-soft)]"
              iconBg="bg-[var(--color-danger)]"
              iconColor="text-white"
            />
          </Reveal>
          <Reveal delay={360}>
            <ActionTile
              href="/schemes"
              icon={<Landmark className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />}
              title={t('viewSchemes')}
              description={t('viewSchemesDesc')}
              bg="bg-[var(--color-success-soft)]"
              iconBg="bg-[var(--color-success)]"
              iconColor="text-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
