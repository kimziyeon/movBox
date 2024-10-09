/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['file.koreafilm.or.kr', 'i.ytimg.com'], // 외부이미지 허용할 도메인 추가
    },
};

export default nextConfig;