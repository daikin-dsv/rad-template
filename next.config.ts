import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        // This makes it so that caching data fetching operations is opt-in
        // Only available in canary as of now
        cacheComponents: true
    }
};

export default nextConfig;
