import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response(
      'Sitemap is generated after PUBLIC_SITE_URL is configured.',
      {
        status: 404,
      },
    );
  }

  const homeUrl = new URL(import.meta.env.BASE_URL, site);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${homeUrl}</loc>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
