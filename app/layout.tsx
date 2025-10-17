import { Suspense, type ReactNode } from 'react';

import { getAppSession } from '@/lib/auth';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { redirect } from 'next/navigation';

import BreadcrumbNav from './BreadcrumbNav';
import Navigation from './Navigation';
import { DaikinLoadingReact } from './components/dds-wrappers';
import './globals.css';
import { loadTexts } from './locale';
import type { TextBundle } from './locale';
import './webcomponents';

const webComponentsScript = (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script src="/webcomponents.js"></script>
);
const layoutScript = (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script src="/layout.js"></script>
);

export const metadata: Metadata = {
    title: 'RAD Template',
    description: 'A modern Daikin application built with RAD'
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {webComponentsScript}
                {layoutScript}
            </head>
            <body className="font-daikin-serif antialiased">
                <Suspense
                    fallback={
                        <div className="flex h-screen items-center justify-center">
                            <DaikinLoadingReact />
                        </div>
                    }
                >
                    <AuthenticatedApp>{children}</AuthenticatedApp>
                </Suspense>
            </body>
        </html>
    );
}

async function AuthenticatedApp({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    const session = await getAppSession();

    if (!session) {
        redirect('/api/auth/signin');
    }

    const locale = session.user?.locale;
    const texts = await loadTexts(locale);

    const navigationLinks = getNavigationLinks(texts);
    const breadcrumbConfig = getBreadcrumbConfig(texts);

    return (
        <SessionProvider session={session}>
            <div className="flex min-h-screen bg-slate-100">
                <Navigation
                    session={session}
                    links={navigationLinks}
                    userText={texts.user}
                />
                <div className="flex min-h-screen flex-1 flex-col overflow-hidden">
                    <main className="flex flex-1 flex-col gap-6 overflow-x-auto overflow-y-auto bg-white p-8 shadow-[0_-1px_0_0_rgba(15,23,42,0.08)_inset]">
                        <BreadcrumbNav config={breadcrumbConfig} />
                        {children}
                    </main>
                    <div className="border-t border-slate-200 bg-white px-8 py-4 text-sm text-slate-500">
                        <app-footer copyright={texts.footer.copyright}></app-footer>
                    </div>
                </div>
            </div>
        </SessionProvider>
    );
}

type NavigationLink = {
    href: string;
    label: string;
};

function getNavigationLinks(texts: TextBundle): NavigationLink[] {
    return [
        { href: '/', label: texts.appRoutes.home },
        { href: '/page2', label: texts.appRoutes.page2 }
    ];
}

type BreadcrumbItem = NavigationLink;

type BreadcrumbConfig = Record<string, BreadcrumbItem[]>;

function getBreadcrumbConfig(texts: TextBundle): BreadcrumbConfig {
    const home: BreadcrumbItem = { href: '/', label: texts.appRoutes.home };
    const page2: BreadcrumbItem = {
        href: '/page2',
        label: texts.appRoutes.page2
    };

    return {
        '/': [home],
        '/page2': [home, page2]
    };
}
