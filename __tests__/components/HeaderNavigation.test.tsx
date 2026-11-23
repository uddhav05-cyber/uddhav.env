import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { HeaderNavigation } from '@/components/navigation/HeaderNavigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe('HeaderNavigation', () => {
  let desktopMedia: EventTarget & { matches: boolean };

  beforeEach(() => {
    jest.clearAllMocks();
    desktopMedia = Object.assign(new EventTarget(), { matches: false });
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: jest.fn(() => desktopMedia),
    });
    // jsdom does not implement the native dialog APIs.
    HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
    HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
    document.body.style.overflow = '';
  });

  it('should render without crashing', () => {
    render(<HeaderNavigation />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should have navigation landmark', () => {
    render(<HeaderNavigation />);
    const navs = screen.getAllByRole('navigation');
    expect(navs.length).toBeGreaterThan(0);
  });

  it('should render logo/brand', () => {
    render(<HeaderNavigation />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<HeaderNavigation />);
    // Select the main navigation
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toHaveAttribute('aria-label');
  });

  it('should be sticky positioned', () => {
    render(<HeaderNavigation />);
    const header = screen.getByRole('banner');
    expect(header.className).toContain('fixed');
  });

  it('should have z-index for layering', () => {
    render(<HeaderNavigation />);
    const header = screen.getByRole('banner');
    expect(header.className).toContain('z-');
  });

  it('should be responsive', () => {
    render(<HeaderNavigation />);
    const header = screen.getByRole('banner');
    // Check for the inner div that has padding classes
    const innerDiv = header.querySelector('div');
    expect(innerDiv?.className).toMatch(/px-|py-/);
  });

  it('keeps the closed menu inaccessible and restores scrolling after closing', () => {
    document.body.style.overflow = 'auto';
    render(<HeaderNavigation />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    expect(screen.getByRole('dialog', { name: 'Navigation menu' })).toBeVisible();
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.click(screen.getByRole('button', { name: 'Close navigation menu' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('closes the mobile menu after choosing an anchor link', () => {
    render(<HeaderNavigation />);
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    const menu = screen.getByRole('dialog');
    fireEvent.click(within(menu).getByRole('link', { name: 'About' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
  });

  it('releases the scroll lock when switching to the desktop layout', () => {
    render(<HeaderNavigation />);
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    act(() => {
      desktopMedia.matches = true;
      desktopMedia.dispatchEvent(new Event('change'));
    });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
  });

  it('handles native Escape cancellation and unlocks scrolling', () => {
    render(<HeaderNavigation />);
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    fireEvent(screen.getByRole('dialog'), new Event('cancel'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
  });
});
