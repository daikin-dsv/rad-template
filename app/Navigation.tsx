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
        <aside className="relative flex h-full w-72 flex-shrink-0 bg-slate-950 text-white shadow-xl">
            <NavigationMenu
                user={session.user}
                userManagementLink={userManagementLink}
                links={links}
                userText={userText}
            />
        </aside>
    );
}
