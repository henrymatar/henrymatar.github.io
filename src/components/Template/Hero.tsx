import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            I&apos;m an Electrical Engineering student at{' '}
            <a href="https://www.colorado.edu" className="hero-highlight">
              CU Boulder
            </a>
            . I&apos;m currently the post-processing technical lead on a{' '}
            <a href="https://www.baesystems.com" className="hero-highlight">
              BAE Systems
            </a>
            -sponsored capstone building a drone-based bistatic RF radar system
            for 2D imaging and object localization. This past summer I worked as
            a {profile.role} at{' '}
            <a href="https://www.lockheedmartin.com" className="hero-highlight">
              {profile.employer}
            </a>
            . I have a Secret clearance and am interested in hardware/PCB
            design, RF, and embedded systems.
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              About Me
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
