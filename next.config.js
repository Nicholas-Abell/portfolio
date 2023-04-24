// next.config.js

const nextConfig = {
  experimental: {
    images: true,
  },
};

module.exports = nextConfig;

module.exports = {
  // Other Next.js configurations...
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const paths = await defaultPathMap();
    delete paths['/api/*']; // Exclude API routes
    return paths;
  },
};
