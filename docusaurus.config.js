// @ts-check
const config = {
  title: 'Astroid Document',
  tagline: 'Tài liệu cho Astroid Framework',
  url: 'https://templaza.github.io',
  baseUrl: '/astroid-document/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'templaza',
  projectName: 'astroid-document',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};
module.exports = config;
