import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

const PREVIEW_KEY = process.env.PREVIEW_KEY ?? 'astan2026';
const PREVIEW_COOKIE = 'gp_preview';

export default function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const previewParam = url.searchParams.get('preview');

  if (previewParam !== null) {
    const cleanUrl = url.clone();
    cleanUrl.searchParams.delete('preview');
    const response = NextResponse.redirect(cleanUrl);
    if (previewParam === PREVIEW_KEY) {
      response.cookies.set(PREVIEW_COOKIE, '1', {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
        sameSite: 'lax',
      });
    } else {
      response.cookies.delete(PREVIEW_COOKIE);
    }
    return response;
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
