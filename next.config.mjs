/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{
            protocol: 'https',
            hostname: 'gulabithreads.com'
        }]
    }
};

export default nextConfig;
