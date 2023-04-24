/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  // other Next.js configurations...
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const paths = await defaultPathMap();
    delete paths['/api/*']; // exclude API routes
    return paths;
  },
};

