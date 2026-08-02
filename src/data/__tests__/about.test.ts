import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('Electrical Engineering');
    expect(aboutMarkdown).toContain('University of Colorado Boulder');
  });

  it('contains the reading section', () => {
    expect(aboutMarkdown).toContain('# Follow my Reading');
    expect(aboutMarkdown).toContain('**Previously Read:** Red Rising');
    expect(aboutMarkdown).toContain('**Currently Reading:** Golden Son');
    expect(aboutMarkdown).toContain('**Reading Next:** Morning Star');
  });

  it('contains the likes section', () => {
    expect(aboutMarkdown).toContain('# I Like');
    expect(aboutMarkdown).toContain('Snowboarding');
    expect(aboutMarkdown).toContain('Space');
  });

  it('contains the travel section', () => {
    expect(aboutMarkdown).toContain('# Travel / Geography');
    expect(aboutMarkdown).toContain('Manhattan, New York');
  });

  it('contains the fun facts section', () => {
    expect(aboutMarkdown).toContain('# Fun Facts');
  });

  it('contains the favorite restaurants section', () => {
    expect(aboutMarkdown).toContain('# Favorite restaurants');
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(5);
  });
});
