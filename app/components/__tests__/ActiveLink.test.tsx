import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';

import { usePathname } from 'next/navigation';

import ActiveLink from '../ActiveLink';

describe('ActiveLink Component', () => {
    const mockedUsePathname = vi.mocked(usePathname);

    beforeEach(() => {
        mockedUsePathname.mockReturnValue('/');
    });

    // Clean up after each test to avoid DOM conflicts
    afterEach(() => {
        cleanup();
    });

    it('marks the link as active when the current pathname matches the href', () => {
        mockedUsePathname.mockReturnValue('/page2');
        render(
            <ActiveLink href="/page2" activeClassName="is-active">
                Page 2
            </ActiveLink>
        );

        const link = screen.getByRole('link', { name: 'Page 2' });
        expect(link.getAttribute('href')).toBe('/page2');
        expect(link).toHaveAttribute('active');
        expect(link).toHaveClass('is-active');
    });

    it('does not add the active attribute when the pathname differs', () => {
        render(<ActiveLink href="/page2">Page 2</ActiveLink>);

        const link = screen.getByRole('link', { name: 'Page 2' });
        expect(link).not.toHaveAttribute('active');
        expect(link).toHaveAttribute('href', '/page2');
    });

    it('forwards additional anchor props', () => {
        render(
            <ActiveLink href="/page2" className="nav-link">
                Page 2
            </ActiveLink>
        );

        const link = screen.getByRole('link', { name: 'Page 2' });
        expect(link).toHaveClass('nav-link');
    });
});
