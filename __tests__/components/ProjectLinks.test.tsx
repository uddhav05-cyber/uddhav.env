import { fireEvent, render, screen, within } from '@testing-library/react';
import { PersonalProjectsShowcase } from '@/features/projects/components/PersonalProjectsShowcase';
import { CommandPalette } from '@/features/tools/components/CommandPalette';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

afterEach(() => jest.restoreAllMocks());

it('shows links to the portfolio owner’s repositories on the Projects page', () => {
  render(<PersonalProjectsShowcase />);

  const links = screen.getAllByRole('link').map((link) => link.getAttribute('href'));
  expect(links).toEqual([
    'https://github.com/uddhav05-cyber/Recover.ai',
    'https://github.com/uddhav05-cyber/autonomous-coding-agent',
    'https://github.com/uddhav05-cyber/Bharat_Setu',
    'https://github.com/uddhav05-cyber/OpsPilot',
    'https://github.com/uddhav05-cyber/uddhav.env',
    'https://github.com/uddhav05-cyber/Breathbudget',
  ]);
  expect(screen.getByRole('link', { name: 'View uddhav.env on GitHub' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Personal Portfolio' })).not.toBeInTheDocument();
});

it('opens each selected project directly by click or Enter', () => {
  const open = jest.spyOn(window, 'open').mockReturnValue(null);
  render(<CommandPalette />);

  const trigger = screen.getByRole('button', { name: 'Open command palette' });
  fireEvent.click(trigger);
  const dialog = screen.getByRole('dialog', { name: 'Command palette' });
  expect(within(dialog).queryByText('PrivGPT Studio (contribution)')).not.toBeInTheDocument();
  expect(within(dialog).getByRole('button', { name: /OpsPilot/ })).toBeInTheDocument();
  fireEvent.click(within(dialog).getByRole('button', { name: /Recover\.ai/ }));
  expect(open).toHaveBeenLastCalledWith('https://github.com/uddhav05-cyber/Recover.ai', '_blank', 'noopener,noreferrer');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

  fireEvent.click(trigger);
  const search = screen.getByRole('textbox', { name: 'Command search' });
  fireEvent.change(search, { target: { value: 'Breathbudget' } });
  fireEvent.keyDown(search, { key: 'Enter' });
  expect(open).toHaveBeenLastCalledWith('https://github.com/uddhav05-cyber/Breathbudget', '_blank', 'noopener,noreferrer');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
