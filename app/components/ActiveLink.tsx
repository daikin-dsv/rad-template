'use client';

import { ReactNode, HTMLAttributes } from 'react';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export interface ActiveLinkProps extends LinkProps {
    href: string;
    children: ReactNode;
    activeClassName?: string;
}

// Wrap NavLink so that it adds an `active` attribute when its `to` matches the current path
const ActiveLink = ({
    href,
    children,
    className,
    activeClassName,
    ...props
}: ActiveLinkProps & HTMLAttributes<HTMLAnchorElement>) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const classes = [
        className,
        isActive ? activeClassName : undefined
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Link
            href={href}
            className={classes || undefined}
            {...(isActive ? { active: '', 'aria-current': 'page' } : {})}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;
