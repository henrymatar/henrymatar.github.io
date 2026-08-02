import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Cell from '../../Projects/Cell';

describe('Cell', () => {
  const mockProject = {
    title: 'Test Project',
    subtitle: 'A test subtitle',
    slug: 'test-project',
    image: '/images/test.jpg',
    date: '2023-01-01',
    desc: 'This is a test project description',
    categories: ['Test'],
    links: [{ label: 'Example', url: 'https://example.com' }],
  };

  it('renders project as a clickable card with link', () => {
    render(<Cell data={mockProject} />);
    const link = screen.getByRole('link', { name: mockProject.title });
    expect(link).toHaveAttribute('href', mockProject.links[0].url);
    expect(link).toHaveClass('project-card-link');
    expect(
      document.querySelector('.project-card-affordance'),
    ).toHaveTextContent('↗');
  });

  it('renders project description', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText(mockProject.desc)).toBeInTheDocument();
  });

  it('renders project date in correct format', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText('2023')).toBeInTheDocument();
  });

  it('treats the thumbnail as decorative beside its matching heading', () => {
    render(<Cell data={mockProject} />);
    const image = document.querySelector('.project-card-image img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', '');
    expect(image).toHaveAttribute('src', expect.stringContaining('test.jpg'));
  });

  it('does not imply that a static archive card is clickable', () => {
    render(<Cell data={{ ...mockProject, links: [] }} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(document.querySelector('.project-card--static')).toBeInTheDocument();
    expect(
      document.querySelector('.project-card-affordance'),
    ).not.toBeInTheDocument();
  });

  it('renders additional links outside the main project link', () => {
    render(
      <Cell
        data={{
          ...mockProject,
          links: [
            { label: 'Example', url: 'https://example.com' },
            { label: 'Final report', url: '/reports/test-project.pdf' },
            { label: '', url: '/reports/test-project-appendix.pdf' },
          ],
        }}
      />,
    );

    const projectLink = screen.getByRole('link', { name: mockProject.title });
    const reportLinks = screen.getAllByRole('link', { name: /report/i });

    expect(projectLink).toHaveAttribute('href', 'https://example.com');
    expect(reportLinks).toHaveLength(2);
    expect(reportLinks[0]).toHaveAttribute('href', '/reports/test-project.pdf');
    expect(reportLinks[0]).toHaveAttribute('target', '_blank');
    expect(reportLinks[1]).toHaveTextContent('View report');
    expect(projectLink).not.toContainElement(reportLinks[0]);
  });
});
