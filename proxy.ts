import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

// Sustav traži eksplicitnu funkciju, a ne objekt
export default function proxy(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Matcher ostaje isti, on je u redu
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
