const nextConfig = {
  experimental: {
    appDir: true,
  },
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

module.exports = nextConfig;
