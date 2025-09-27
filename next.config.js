/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/accueil',
        permanent: true, // 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
