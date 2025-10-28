import { auth as nextAuthMiddleware, isAuthBypassEnabled } from '@/lib/auth';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    if (isAuthBypassEnabled) {
        return NextResponse.next();
    }

    // Workaround for making nextauth logout work on Netlify
    // https://github.com/nextauthjs/next-auth/issues/12909

    // @ts-expect-error the type that auth returns is NOT a NextResponse but a plain Response
    const response: Response = await nextAuthMiddleware(request);

    if (request.nextUrl.pathname.startsWith('/api/auth/signout')) {
        // remove all session cookies, then re-add one explicitly
        const nonSessionCookies = response.headers.getSetCookie().filter((cookie) => {
            return !cookie.startsWith('authjs.session-token');
        });
        response.headers.delete('Set-Cookie');
        for (const cookie of nonSessionCookies) {
            response.headers.append('Set-Cookie', cookie);
        }
        response.headers.set(
            'Set-Cookie',
            'authjs.session-token=; Path=/; Max-Age=0; Secure; HttpOnly; SameSite=lax'
        );
    }

    return response;
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)'
    ]
};
