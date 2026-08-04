import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/data/projects';
import { PROJECT_IMAGE } from '@/lib/utils';

interface DetailProps {
  data: Project;
}

/**
 * Generic project detail page template. Renders the full write-up for a single
 * project: header, description, bullets, attachments, and tech tags.
 *
 * Attachments: one button per entry in `links`. When a project has more than
 * four links, the milestone-style links are laid out in a compact 3-column
 * grid, and any "final"/primary link (the last one) is styled distinctly with
 * an accented border so it doesn't blend in.
 */
export default function Detail({ data }: DetailProps) {
  const {
    title,
    subtitle,
    image,
    date,
    desc,
    bullets,
    tech,
    categories,
    links,
  } = data;

  const hasManyLinks = links.length > 4;
  // The "final"/primary link is the last one (e.g. the presentation).
  const primaryLink = hasManyLinks ? links[links.length - 1] : undefined;
  const milestoneLinks = hasManyLinks ? links.slice(0, -1) : links;

  return (
    <article className="project-detail">
      <Link href="/projects" className="project-detail-back">
        ← Back to projects
      </Link>

      <header className="project-detail-header">
        {image && (
          <div className="project-detail-image">
            <Image
              src={image}
              alt=""
              width={PROJECT_IMAGE.width}
              height={PROJECT_IMAGE.height}
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </div>
        )}

        {categories && categories.length > 0 && (
          <div className="project-detail-categories">
            {categories.map((category) => (
              <span key={category} className="tech-tag">
                {category}
              </span>
            ))}
          </div>
        )}

        <h1 className="project-detail-title">{title}</h1>
        {subtitle && <p className="project-detail-subtitle">{subtitle}</p>}

        <time className="project-detail-date" dateTime={date}>
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </header>

      <p className="project-detail-desc">{desc}</p>

      {bullets && bullets.length > 0 && (
        <ul className="project-detail-bullets">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {links.length > 0 && (
        <section className="project-detail-attachments">
          <h2 className="project-detail-section-title">Attachments</h2>

          {hasManyLinks ? (
            <>
              <div className="project-detail-links-grid">
                {milestoneLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    className="project-detail-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                ))}
              </div>
              {primaryLink && (
                <a
                  href={primaryLink.url}
                  className="project-detail-link project-detail-link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryLink.label}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
            </>
          ) : (
            <div className="project-detail-links">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="project-detail-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      {tech && tech.length > 0 && (
        <div className="project-detail-tech">
          {tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
