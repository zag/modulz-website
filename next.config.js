const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withMdxEnhanced = require('next-mdx-enhanced')({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  rehypePlugins: [require('@mapbox/rehype-prism')],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
});

module.exports = withPlugins(
  [
    withMdxEnhanced({
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
    withOptimizedImages,
  ],
  {
    // Next.js config
  }
);
