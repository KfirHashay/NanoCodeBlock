import createMDX from '@next/mdx';

const withMDX = createMDX();

const nextConfig = {
  appDir: true,
};

export default withMDX(nextConfig);
