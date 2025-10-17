'use client';

import { ReactNode, HTMLAttributes } from 'react';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

export interface ActiveLinkProps extends LinkProps {
    href: string;
    children: ReactNode;
}

// Wrap NavLink so that it adds an `active` attribute when its `to` matches the current path
const ActiveLink = ({
    href,
    children,
    className,
    activeClassName,
    ...props
}: ActiveLinkProps &
    HTMLAttributes<HTMLAnchorElement> & {
        activeClassName?: string;
    }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const classes = [className, isActive ? activeClassName : null]
        .filter(Boolean)
        .join(' ');

    return (
        <Link
            href={href}
            className={classes || undefined}
            {...(isActive ? { active: '' } : {})}
            {...props}
        >
            {children}
        </Link>
    );
};

export default ActiveLink;
