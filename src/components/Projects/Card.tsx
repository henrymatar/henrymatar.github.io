import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/data/projects';
import { PROJECT_DETAIL_SLUGS } from '@/data/projects';
import { PROJECT_IMAGE } from '@/lib/utils';

interface CardProps {
  data: Project;
}

/**
 * Generic project grid card. The whole card is a single link to the project's
 * detail page — no sub-links at grid level. Featured projects get an accent
 * border to stand out.
 *
 * Only projects whose slug is in `PROJECT_DETAIL_SLUGS` link to a detail page;
 * the rest render as static cards until their detail page is rolled out.
 */
export default function Card({ data }: CardProps) {
  const { title, subtitle, slug, image, date, desc, categories, featured } =
    data;

  const hasDetail = PROJECT_DETAIL_SLUGS.has(slug);

  const cardContent = (
    <>
      {image && (
        <div className="project-card-image">
          <Image
            src={image}
            alt=""
            width={PROJECT_IMAGE.width}
            height={PROJECT_IMAGE.height}
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="project-card-content">
        <header className="project-card-header">
          <h3 className="project-card-title">{title}</h3>
          {hasDetail && (
            <span className="project-card-affordance" aria-hidden="true">
              ↗
            </span>
          )}
          {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
        </header>

        <p className="project-card-desc">{desc}</p>

        {categories && categories.length > 0 && (
          <div className="project-card-tech">
            {categories.map((category) => (
              <span key={category} className="tech-tag">
                {category}
              </span>
            ))}
          </div>
        )}

        <time className="project-card-date" dateTime={date}>
          {dayjs(date).format('YYYY')}
        </time>
      </div>
    </>
  );

  return (
    <article
      className={`project-card ${hasDetail ? 'project-card--linked' : 'project-card--static'} ${featured ? 'project-card--featured' : ''}`}
    >
      {hasDetail ? (
        <Link
          href={`/projects/${slug}`}
          className="project-card-link"
          aria-label={title}
        >
          {cardContent}
        </Link>
      ) : (
        <div className="project-card-static">{cardContent}</div>
      )}
    </article>
  );
}
