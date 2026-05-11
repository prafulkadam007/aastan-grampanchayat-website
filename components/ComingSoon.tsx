import { Building2 } from 'lucide-react';
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
        style={{ background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)' }}
        aria-hidden
      />

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full text-center">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 shadow-lg"
            style={{ background: 'var(--color-accent)' }}
          >
            <Building2 className="w-10 h-10 text-white" aria-hidden />
          </div>

          <p
            className="text-sm sm:text-base font-semibold tracking-wide mb-8 font-display"
            style={{ color: 'var(--color-accent-strong)' }}
            lang="mr"
          >
            {village.name.mr}
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 font-display"
            style={{ color: 'var(--color-primary)' }}
            lang="mr"
          >
            तात्पुरते उपलब्ध नाही
          </h1>
          <p
            className="text-xl sm:text-2xl font-semibold"
            style={{ color: 'var(--color-primary)' }}
            lang="en"
          >
            Temporarily Unavailable
          </p>
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
