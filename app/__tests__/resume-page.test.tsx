import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RESUME_PDF_PATH } from '@/lib/utils';
import ResumePage from '../resume/page';

describe('resume page', () => {
  it('renders a Download Resume button pointing at the PDF', () => {
    render(<ResumePage />);

    const download = screen.getByRole('link', { name: /download resume/i });
    expect(download).toHaveAttribute('href', RESUME_PDF_PATH);
    expect(download).toHaveAttribute('download');
    expect(download).toHaveClass('button');
  });
});
