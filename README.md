# Astan Gram Panchayat Website

Official bilingual (Marathi default + English) website for Astan Gram Panchayat, Khed taluka, Ratnagiri district, Maharashtra.

Built with Next.js 16 App Router, React 19, Tailwind v4, next-intl v4. Server-rendered, statically generated, GIGW-aligned.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 — middleware redirects to `/mr` (Marathi) by default. Switch to English at `/en`.

## Project layout

```
app/[locale]/        # all pages, server components, locale-prefixed
components/          # layout / sections / cards / ui / seo
content/             # typed TS data files (single source of truth)
content/repositories.ts  # async functions used by pages — never import data files directly
lib/                 # fonts, seo helpers, i18n helpers
messages/{mr,en}.json    # UI chrome strings only (nav, button labels, page metadata)
public/images/       # member, dev-works, gallery, og images
public/downloads/    # PDF forms
```

## Editing content

All real content lives in `/content/`. Each item carries both Marathi and English values inline:

```ts
title: { mr: 'विकास प्रकल्प', en: 'Development Project' }
```

To add or update items:
- **Notices**: edit `content/notices.ts`
- **Schemes**: edit `content/schemes.ts`
- **Members**: edit `content/members.ts`
- **Works**: edit `content/works.ts`
- **Meetings / Gram Sabha**: edit `content/meetings.ts`
- **Citizens' Charter**: edit `content/charter.ts`
- **RTI contacts**: edit `content/rti.ts`
- **Downloads**: edit `content/downloads.ts` (also drop the PDF in `public/downloads/`)
- **Gallery**: edit `content/gallery.ts` (drop image in `public/images/gallery/`)
- **Village identity** (population, contact, address): edit `content/village.ts`

`messages/*.json` only holds UI chrome strings (nav labels, "View all", "Read more", page metadata titles). Don't put real content there.

After edits, the dev server auto-reloads. Slugs in `notices.ts` and `schemes.ts` become URLs (`/notices/<slug>`, `/schemes/<slug>`) — keep them stable.

## Image guidelines

| Category | Aspect / size              | Max file | Notes                       |
|----------|----------------------------|----------|-----------------------------|
| Members  | 4:5 portrait, 800×1000     | 200 KB   | Headshot                    |
| Works    | 16:9 landscape, 1600×900   | 350 KB   | Carousel / cards            |
| Gallery  | square or 16:9, 1600×       | 350 KB   |                             |
| Office   | 1920×1280                   | 500 KB   | Hero (used on home)         |

Save as JPG or WebP, sRGB. Compress with squoosh.app or similar before committing.

## Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL (used in canonical/OG tags + sitemap).

## Build & deploy

```bash
npm run lint
npm run build
```

Deploy to Vercel: connect the GitHub repo, no config needed (Next.js auto-detected). Set `NEXT_PUBLIC_SITE_URL` in Vercel project env vars.

## Architecture notes

- **Server components everywhere except 3 islands**: `LanguageToggle`, `MobileNav`, `WorksCarousel`. The site is fully SSG.
- **i18n routing**: `next-intl` middleware handles `/mr` and `/en` prefixes; default locale is `mr`.
- **Repository pattern**: pages read content via `content/repositories.ts` async functions. Swapping to a CMS later replaces only those function bodies.
- **SEO**: per-page `generateMetadata`, `app/sitemap.ts` covers both locales + dynamic notice/scheme slugs, `app/robots.ts`, JSON-LD `GovernmentOrganization` in the locale layout, `NewsArticle` on notice detail, `GovernmentService` on scheme detail. hreflang alternates emitted via `lib/seo.ts`.
- **Accessibility**: skip link, `<main id="main-content">`, focus-visible outlines, `aria-*` on carousel and mobile nav, semantic table on Citizens' Charter, `prefers-reduced-motion` honored.
- **Fonts**: Noto Sans Devanagari for Marathi, Inter for Latin. Switched per `<html lang>` via CSS variable.

## Common tasks

- **Add a notice**: append to `notices` array in `content/notices.ts` with a unique `id` and `slug`. Build will re-prerender automatically.
- **Add a member photo**: drop the image in `public/images/members/`, then update `photo:` path in `content/members.ts`.
- **Update village info**: edit `content/village.ts` — that's the single source of truth for stats and contact.
