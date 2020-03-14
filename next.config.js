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
          const sansFrontMatter = mdxContent.replace(/^(---\n.+?\n---\n)?/s, '');
          return {
            wordCount: sansFrontMatter.split(/\s+/g).length,
            readingTime: readingTime(sansFrontMatter),
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
