import { MetadataRoute } from 'next';

import data, { PROJECT_DETAIL_SLUGS } from '@/data/projects';
import { SITE_URL } from '@/lib/utils';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/resume/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/stats/`,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact/`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Only projects with a generated detail page are listed.
    ...data
      .filter((project) => PROJECT_DETAIL_SLUGS.has(project.slug))
      .map((project) => ({
        url: `${SITE_URL}/projects/${project.slug}/`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
  ];
}
