import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import profile from '@/data/profile.json';
import work from '@/data/resume/work';
import { AUTHOR_NAME } from '@/lib/utils';
import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(AUTHOR_NAME);
  });

  it('describes the current work and employer', () => {
    const { container } = render(<Hero />);

    const employerLink = screen.getByRole('link', {
      name: new RegExp(work[0].name, 'i'),
    });
    expect(employerLink).toHaveAttribute('href', work[0].url);
    expect(employerLink).toHaveClass('hero-highlight');

    expect(container.querySelector('.hero-tagline')).toHaveTextContent(
      `I'm an Electrical Engineering student at CU Boulder, currently a ${profile.role} at ${profile.employer}, focused on hardware/PCB design and embedded systems. Previously a Corporate Strategy Intern at LCRA.`,
    );
  });

  it('keeps personal stats and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.telemetry')).not.toBeInTheDocument();
    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
    expect(screen.queryByText('Computing since')).not.toBeInTheDocument();
    expect(screen.queryByText('Based in')).not.toBeInTheDocument();
    expect(screen.queryByText('YC Alum')).not.toBeInTheDocument();
    expect(screen.queryByText('Stanford ICME')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one quieter resume link', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
