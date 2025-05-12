import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the list items', () => {
    render(<Home />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent(
      'Get started by editing src/app/page.tsx.'
    );
    expect(listItems[1]).toHaveTextContent(
      'Save and see your changes instantly.'
    );
  });

  it('renders the primary CTA link', () => {
    render(<Home />);
    const primaryLink = screen.getByRole('link', { name: /Deploy now/i });
    expect(primaryLink).toBeInTheDocument();
    expect(primaryLink).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/new')
    );
  });

  it('renders the secondary CTA link', () => {
    render(<Home />);
    const secondaryLink = screen.getByRole('link', { name: /Read our docs/i });
    expect(secondaryLink).toBeInTheDocument();
    expect(secondaryLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/docs')
    );
  });

  it('renders the footer links', () => {
    render(<Home />);
    const footerLinks = screen.getAllByRole('link');
    expect(footerLinks).toHaveLength(5);
    expect(footerLinks[2]).toHaveTextContent('Learn');
    expect(footerLinks[3]).toHaveTextContent('Examples');
    expect(footerLinks[4]).toHaveTextContent('Go to nextjs.org →');
  });
});
