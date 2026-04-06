import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://ultragresion.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/blog/', '/projects/'];
  return routes.map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
