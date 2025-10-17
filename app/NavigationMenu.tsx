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
        <div className="flex h-full flex-col">
            <div className="px-6 pb-6 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    RAD
                </p>
                <h1 className="mt-2 text-2xl font-semibold text-white">RAD Template</h1>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 pb-6">
                <div className="space-y-1">
                    {links.map(({ href, label }) => (
                        <ActiveLink
                            key={href}
                            href={href}
                            className="block rounded-lg px-4 py-2 text-sm font-semibold text-slate-300 transition-colors duration-150 hover:bg-slate-700/70 hover:text-white"
                            activeClassName="bg-slate-900 text-white shadow-inner"
                        >
                            {label}
                        </ActiveLink>
                    ))}
                </div>
            </nav>
            <div className="border-t border-slate-700/60 px-4 py-6">
                <user-profile
                    ref={userProfileRef}
                    class="block"
                    logoutLink="/api/auth/signout"
                    accountManagementLink={userManagementLink}
                    text={userText}
                ></user-profile>
            </div>
        </div>
    );
}
