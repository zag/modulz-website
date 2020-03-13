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

module.exports = withMdxEnhanced({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
