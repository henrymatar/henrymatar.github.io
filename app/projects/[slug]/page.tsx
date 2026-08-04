import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Detail from '@/components/Projects/Detail';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import data, { PROJECT_DETAIL_SLUGS } from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Statically build each project detail page at deploy time. Only the slugs
 * returned here are generated; any other slug falls through to the 404.
 */
export function generateStaticParams() {
  // Only projects whose slug is listed here are generated; any other slug
  // falls through to the 404 (`dynamicParams` is false).
  return data
    .filter((project) => PROJECT_DETAIL_SLUGS.has(project.slug))
    .map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = data.find((p) => p.slug === slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.title,
    description: project.desc,
    path: `/projects/${project.slug}/`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = data.find((p) => p.slug === slug);
  if (!project) return notFound();

  const projectUrl = `${SITE_URL}/projects/${project.slug}/`;

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: projectUrl,
            name: project.title,
            description: project.desc,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(projectUrl, [
            { name: 'Home', url: HOME_URL },
            { name: 'Projects', url: `${SITE_URL}/projects/` },
            { name: project.title, url: projectUrl },
          ]),
        ]}
      />
      <Detail data={project} />
    </PageWrapper>
  );
}
