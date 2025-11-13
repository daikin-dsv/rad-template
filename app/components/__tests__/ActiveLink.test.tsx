import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

import ActiveLink from '../ActiveLink';

describe('ActiveLink Component', () => {
    // Clean up after each test to avoid DOM conflicts
    afterEach(() => {
        cleanup();
    });

    it('marks the link as active when the current pathname matches the href', () => {
        render(<ActiveLink href="/component-gallery">Component Gallery</ActiveLink>);

        const link = screen.getByRole('link', { name: 'Component Gallery' });
        expect(link.getAttribute('href')).toBe('/component-gallery');
    });

    it('does not add the active attribute when the pathname differs', () => {
        render(<ActiveLink href="/component-gallery">Component Gallery</ActiveLink>);

        const link = screen.getByRole('link', { name: 'Component Gallery' });
        expect(link).not.toHaveAttribute('active');
        expect(link).toHaveAttribute('href', '/component-gallery');
    });

    it('forwards additional anchor props', () => {
        render(
            <ActiveLink href="/component-gallery" className="nav-link">
                Component Gallery
            </ActiveLink>
        );

        const link = screen.getByRole('link', { name: 'Component Gallery' });
        expect(link).toHaveClass('nav-link');
    });
});
