/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['file.koreafilm.or.kr', 'i.ytimg.com'], // 외부 도메인 허용할 도메인추가
    },
};

export default nextConfig;