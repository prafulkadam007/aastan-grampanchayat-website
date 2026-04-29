import { Building2, Phone, Mail } from 'lucide-react';
import { village } from '@/content/village';

export function ComingSoon() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          'linear-gradient(135deg, #FFE3BC 0%, #FFF1DC 25%, #FFFBF0 50%, #E3F4DC 78%, #C8E6C0 100%)',
      }}
    >
      <div
        className="h-1.5"
        style={{
          background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
        }}
        aria-hidden
      />

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 shadow-lg"
            style={{ background: 'var(--color-accent)' }}
          >
            <Building2 className="w-10 h-10 text-white" aria-hidden />
          </div>

          <p
            className="text-sm sm:text-base font-semibold tracking-wide mb-3 font-display"
            style={{ color: 'var(--color-accent-strong)' }}
            lang="mr"
          >
            {village.name.mr}
          </p>
          <p
            className="text-sm sm:text-base font-medium mb-8"
            style={{ color: 'var(--color-ink-secondary)' }}
            lang="en"
          >
            {village.name.en} · {village.taluka.en}, {village.district.en}, {village.state.en}
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-display"
            style={{ color: 'var(--color-primary)' }}
            lang="mr"
          >
            लवकरच येत आहे
          </h1>
          <p
            className="text-2xl sm:text-3xl font-semibold mb-8"
            style={{ color: 'var(--color-primary)' }}
            lang="en"
          >
            Coming Soon
          </p>

          <p
            className="text-base sm:text-lg mb-3 leading-relaxed"
            style={{ color: 'var(--color-ink-secondary)' }}
            lang="mr"
          >
            आस्तान ग्रामपंचायतीचे अधिकृत संकेतस्थळ लवकरच सुरू होत आहे.
            <br />
            गावाच्या सेवा, सूचना आणि माहिती लवकरच एकाच ठिकाणी उपलब्ध होईल.
          </p>
          <p
            className="text-sm sm:text-base mb-10 leading-relaxed"
            style={{ color: 'var(--color-ink-muted)' }}
            lang="en"
          >
            The official website of Astan Gram Panchayat is launching soon. Village services,
            notices, and information will be available here.
          </p>

          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-5 rounded-2xl border shadow-sm"
            style={{
              background: 'var(--color-card)',
              borderColor: 'var(--color-border)',
            }}
          >
            <p
              className="text-xs uppercase tracking-wider font-semibold"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              <span lang="mr">संपर्क</span> · <span lang="en">Contact</span>
            </p>
            <a
              href={`tel:${village.contact.phone}`}
              className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base hover:opacity-80 transition"
              style={{ color: 'var(--color-primary)' }}
            >
              <Phone className="w-4 h-4" aria-hidden />
              {village.contact.phone}
            </a>
            <a
              href={`mailto:${village.contact.email}`}
              className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base hover:opacity-80 transition break-all"
              style={{ color: 'var(--color-primary)' }}
            >
              <Mail className="w-4 h-4" aria-hidden />
              {village.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className="h-1.5"
        style={{
          background:
            'linear-gradient(to right, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)',
        }}
        aria-hidden
      />
    </div>
  );
}
