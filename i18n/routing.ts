import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['mr', 'en'],

  // Used when no locale matches
  defaultLocale: 'mr',

  // Always start in Marathi regardless of browser Accept-Language;
  // users opt into English via the language toggle.
  localeDetection: false,
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);

