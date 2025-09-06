/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/bio.html', destination: '/a-propos', permanent: true },
      { source: '/cv.html', destination: '/cv', permanent: true },
      { source: '/videos.html', destination: '/videos', permanent: true },
      { source: '/liens.html', destination: '/liens', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;