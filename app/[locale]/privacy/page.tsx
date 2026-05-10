import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/privacy',
    namespace: 'meta.privacy',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  const isMr = locale === 'mr';

  return (
    <Container className="py-10 sm:py-14 max-w-3xl">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('privacy') }]} />
      <Reveal>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />
      </Reveal>
      <Reveal delay={120}>
      <div className="prose max-w-none text-[var(--color-ink)] space-y-4">
        <h2 className="text-xl font-bold text-[var(--color-primary)] mt-6">
          {isMr ? '१. माहिती संकलन' : '1. Information Collection'}
        </h2>
        <p>
          {isMr
            ? 'ही वेबसाइट साधारण सर्व्हर लॉग वगळता वैयक्तिक माहिती संकलित करत नाही. कोणतेही अर्ज किंवा संपर्क फॉर्म ग्रामपंचायत कार्यालयात ऑफलाइन सादर केले जातात.'
            : 'This website does not collect personal information beyond standard server logs. Any application or contact forms are submitted offline at the Gram Panchayat office.'}
        </p>
        <h2 className="text-xl font-bold text-[var(--color-primary)] mt-6">
          {isMr ? '२. कुकीज' : '2. Cookies'}
        </h2>
        <p>
          {isMr
            ? 'ही वेबसाइट केवळ आवश्यक तांत्रिक कुकीज (जसे की भाषा निवड) वापरते. ट्रॅकिंग किंवा जाहिरात कुकीज वापरल्या जात नाहीत.'
            : 'This website uses only essential technical cookies (such as language preference). No tracking or advertising cookies are used.'}
        </p>
        <h2 className="text-xl font-bold text-[var(--color-primary)] mt-6">
          {isMr ? '३. बाह्य दुवे' : '3. External Links'}
        </h2>
        <p>
          {isMr
            ? 'या वेबसाइटवरून बाह्य सरकारी पोर्टल्सकडे (जसे pmayg.nic.in, nrega.nic.in) दुवे असू शकतात. त्या पोर्टल्सच्या स्वतःच्या गोपनीयता धोरणांवर आम्ही जबाबदार नाही.'
            : 'This website may link to external government portals (e.g., pmayg.nic.in, nrega.nic.in). We are not responsible for the privacy practices of those external sites.'}
        </p>
        <h2 className="text-xl font-bold text-[var(--color-primary)] mt-6">
          {isMr ? '४. संपर्क' : '4. Contact'}
        </h2>
        <p>
          {isMr
            ? 'गोपनीयतेविषयी प्रश्नांसाठी, ग्रामपंचायत कार्यालयाशी संपर्क साधा.'
            : 'For privacy questions, contact the Gram Panchayat office.'}
        </p>
      </div>
      </Reveal>
    </Container>
  );
}
