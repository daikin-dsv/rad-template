import type { Session } from 'next-auth';

import NavigationMenu from './NavigationMenu';
import type { UserText } from './locale/types';

type NavigationLink = {
    href: string;
    label: string;
};

type NavigationProps = {
    session: Session;
    links: NavigationLink[];
    userText: UserText;
};

export default function Navigation({ session, links, userText }: NavigationProps) {
    if (!session?.user) {
        return null;
    }

    const { RAD_URL, AUTH_KEYCLOAK_ID, AUTH_KEYCLOAK_ISSUER } = process.env;
    const userManagementLink =
        AUTH_KEYCLOAK_ISSUER && AUTH_KEYCLOAK_ID && RAD_URL
            ? `${AUTH_KEYCLOAK_ISSUER}/account?referrer=${AUTH_KEYCLOAK_ID}&referrer_uri=${RAD_URL}`
            : '';

    return (
        <header className="border-b border-slate-200 bg-white text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <div className="mx-auto flex w-full max-w-screen-2xl items-center px-4 py-3 sm:px-6 lg:px-8">
                <NavigationMenu
                    user={session.user}
                    userManagementLink={userManagementLink}
                    links={links}
                    userText={userText}
                />
            </div>
        </header>
    );
}
