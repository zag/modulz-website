const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withPlugins(
  [
    withMdxEnhanced({
      layoutPath: 'layouts',
      defaultLayout: true,
      rehypePlugins: [require('@mapbox/rehype-prism')],
      extendFrontMatter: {
        process: (mdxContent, frontMatter) => {
          return {
            wordCount: mdxContent.split(/\s+/g).length,
            readingTime: readingTime(mdxContent),
          };
        },
      },
    })({
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
    withOptimizedImages,
  ],
  {
    // Next.js config
  }
);
