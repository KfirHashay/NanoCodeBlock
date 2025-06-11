import createMDX from '@next/mdx';

const withMDX = createMDX();

const nextConfig = {
  experimental: { appDir: true }
};

export default withMDX(nextConfig);
