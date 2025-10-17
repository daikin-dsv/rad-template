'use client';

import { useEffect, useRef } from 'react';

import type { Session } from 'next-auth';

import ActiveLink from './components/ActiveLink';
import type { UserText } from './locale/types';

type SessionUser = NonNullable<Session['user']>;

type NavigationLink = {
    href: string;
    label: string;
};

type NavigationMenuProps = {
    user: SessionUser;
    userManagementLink: string;
    links: NavigationLink[];
    userText: UserText;
};

interface UserProfileElement extends HTMLElement {
    user?: SessionUser;
}

export default function NavigationMenu({
    user,
    userManagementLink,
    links,
    userText
}: NavigationMenuProps) {
    const userProfileRef = useRef<UserProfileElement | null>(null);

    useEffect(() => {
        if (userProfileRef.current && user) {
            userProfileRef.current.user = user;
        }
    }, [user]);

    return (
        <div className="flex w-full items-center gap-6">
            <nav aria-label="Primary" className="flex flex-1 items-center gap-1">
                {links.map(({ href, label }) => (
                    <ActiveLink
                        key={href}
                        href={href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:outline-slate-500"
                        activeClassName="bg-slate-900 text-white hover:bg-slate-900 hover:text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-100"
                    >
                        {label}
                    </ActiveLink>
                ))}
            </nav>
            <user-profile
                ref={userProfileRef}
                logoutLink="/api/auth/signout"
                accountManagementLink={userManagementLink}
                text={userText}
                className="ml-auto"
            ></user-profile>
        </div>
    );
}
