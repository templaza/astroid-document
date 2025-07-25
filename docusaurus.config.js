// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astroid Framework',
  tagline: 'Powerful framework for designers and developers to create responsive, fast & robust Joomla based websites and templates.',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.astroidframe.work',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'templaza', // Usually your GitHub org/user name.
  projectName: 'astroid-document', // Usually your repo name.
  deploymentBranch: 'deploy',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // List of plugins to load
  plugins: [
    require.resolve('./plugins/lightbox'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/templaza/astroid-document/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Astroid Framework',
        logo: {
          alt: 'Astroid Framework Logo',
          src: 'img/astroid.gif',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Introduction',
          },
          {
            to: '/category/getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            href: 'https://github.com/templaza/astroid-framework/releases/latest',
            label: 'Download',
            position: 'left',
          },
          {
            href: 'https://astroidframe.work/',
            label: 'Home Page',
            position: 'right',
          },
          {
            href: 'https://github.com/templaza/astroid-framework',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Astroid Framework',
            items: [
              {
                html: `
                <p>Powerful framework for designers and developers to create responsive, fast & robust Joomla based websites and templates.</p>
              `,
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'Home Page',
                href: 'https://astroidframe.work',
              },
              {
                label: 'Download',
                href: 'https://github.com/templaza/astroid-framework/releases/latest',
              },
              {
                label: 'Blog',
                href: 'https://astroidframe.work/blog',
              },
              {
                label: 'Go Pro',
                href: 'https://astroidframe.work/pricing',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Documentation',
                to: '/intro',
              },
              {
                label: 'Report an Issue',
                href: 'https://github.com/templaza/astroid-framework/issues',
              },
              {
                label: 'Discussion Forum',
                href: 'https://github.com/templaza/astroid-framework/discussions',
              },
              {
                label: 'Chat on Discord',
                href: 'https://discord.gg/2MwtsAX4Py',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/astroid',
              },
              {
                label: 'Rate Astroid on JED',
                href: 'https://extensions.joomla.org/extension/astroid-framework/',
              },
              {
                label: 'Support Astroid with $10',
                href: 'https://ko-fi.com/astroidframework',
              },
              {
                label: 'YouTube Channel',
                href: 'https://www.youtube.com/@Astroid-Joomla-Seamlessly',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Astroid Framework. Powered by TemPlaza.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'BEJXQ4OCZS',

        // Public API key: it is safe to commit it
        apiKey: 'a46771eac73703c69efd7c7233774bc1',

        indexName: 'astroidframe',

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
      },
    }),
};

export default config;
