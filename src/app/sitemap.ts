import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://varnaprojects.com';

  const routes = [
    '',
    '/about',
    '/projects',
    '/contact',
    '/real-estate',
    '/construction',
    '/gallery',
    '/upcoming'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
