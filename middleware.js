import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Headers de segurança adicionais
  response.headers.set('X-DNS-Prefetch-Control', 'off');
  response.headers.set('X-Download-Options', 'noopen');
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none');

  // Bloquear acesso a arquivos sensíveis
  const pathname = request.nextUrl.pathname;
  const sensitiveFiles = [
    '/.env',
    '/.env.local',
    '/.env.production',
    '/.git/',
    '/package.json',
    '/package-lock.json',
    '/.next/',
    '/node_modules/'
  ];

  if (sensitiveFiles.some(file => pathname.startsWith(file))) {
    return new Response('Access Denied', { status: 403 });
  }

  // Bloquear user agents suspeitos
  const userAgent = request.headers.get('user-agent') || '';
  const suspiciousPatterns = [
    'sqlmap',
    'nikto',
    'nmap',
    'masscan',
    'nessus',
    'openvas',
    'w3af',
    'dirbuster',
    'gobuster',
    'wfuzz'
  ];

  if (suspiciousPatterns.some(pattern =>
    userAgent.toLowerCase().includes(pattern.toLowerCase())
  )) {
    return new Response('Access Denied', { status: 403 });
  }

  // API-specific rules
  if (pathname.startsWith('/api/')) {
    // Scanners often omit User-Agent; block them at the API boundary
    if (!userAgent) {
      return new Response('Access Denied', { status: 403 });
    }

    if (!['GET', 'POST', 'HEAD', 'OPTIONS'].includes(request.method)) {
      return new Response('Method Not Allowed', { status: 405 });
    }

    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};