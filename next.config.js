/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const csp = isDev
  ? "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' ws: wss:; frame-ancestors 'none';"
  : "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://images.unsplash.com data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',                value: 'DENY' },
          { key: 'X-Content-Type-Options',          value: 'nosniff' },
          { key: 'Referrer-Policy',                 value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',              value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=()' },
          { key: 'Strict-Transport-Security',       value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy',         value: csp },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
