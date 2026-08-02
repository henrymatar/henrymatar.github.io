import dayjs from 'dayjs';
import Image from 'next/image';

import type { Project } from '@/data/projects';
import { PROJECT_IMAGE } from '@/lib/utils';

interface CellProps {
  data: Project;
}

export default function Cell({ data }: CellProps) {
  const { title, subtitle, links, image, date, desc, tech, featured } = data;

  const hasLinks = Boolean(links?.length);

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
          {hasLinks && (
            <span className="project-card-affordance" aria-hidden="true">
              ↗
            </span>
          )}
          {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
        </header>

        <p className="project-card-desc">{desc}</p>

        {tech && tech.length > 0 && (
          <div className="project-card-tech">
            {tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
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
      className={`project-card ${featured ? 'project-card--featured' : ''} ${hasLinks ? 'project-card--linked' : 'project-card--static'}`}
    >
      {hasLinks ? (
        <a
          href={links![0].url}
          className="project-card-link"
          aria-label={title}
        >
          {cardContent}
        </a>
      ) : (
        <div className="project-card-static">{cardContent}</div>
      )}

      {hasLinks && links!.length > 1 && (
        <div className="project-card-reports">
          {links!.slice(1).map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="project-card-report"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label || 'View report'}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
