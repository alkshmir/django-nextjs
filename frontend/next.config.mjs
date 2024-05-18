/** @type {import('next').NextConfig} */

const nextConfig = {
    // 他の設定オプションがあればここに追加
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://host.docker.internal:8000/api/:path*/',
            }
        ];
    }
};

export default nextConfig;