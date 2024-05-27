/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects()
    {
        return[
            {
                source:'/',
                destination: '/bookmarks',
                permanent:true
            }
        ]
    }
};

export default nextConfig;
