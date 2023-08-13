/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['127.0.0.1', 'localhost'],
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '127.0.0.1',
  //       port: '1337',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'http',
  //       hostname: 'localhost',
  //       port: '1337',
  //       pathname: '/**',
  //     }
  //   ]
  }
};

module.exports = nextConfig;
