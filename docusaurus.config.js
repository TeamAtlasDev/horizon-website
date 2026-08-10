// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Horizon',
  tagline: 'Horizon offers a variety of space-related commands for your server using real-time data.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://horizonbot.xyz',
  baseUrl: '/',

  organizationName: 'TeamAtlasDev',
  projectName: 'horizon-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: false,
          blogPostsPerPage: 50,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    image: 'img/header.jpg',
    navbar: {
      logo: {
        alt: 'Horizon Logo',
        src: 'img/horizonimg.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://donate.teamatlas.dev',
          label: 'Donate',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Horizon',
          items: [
            {
              label: 'Documentation',
              to: '/docs/welcome',
            },
            {
              label: 'Status Page',
              href: 'https://status.teamatlas.dev',
            },
            {
              label: 'Vote Horizon',
              href: 'https://top.gg/bot/1183177251316047983/vote',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://support.horizonbot.xyz',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.horizonbot.xyz',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              to: '/terms',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Website Policy',
              to: '/web-policy',
            }, 
          ],
        },
        {
          title: 'Top.gg Stats',
          items: [
            {
              html: `
              <a href="https://top.gg/bot/1183177251316047983">
                <img src="https://top.gg/api/widget/upvotes/1183177251316047983.svg" alt="Stats">
              </a> <br>
              <a href="https://top.gg/bot/1183177251316047983">
                <img src="https://top.gg/api/widget/owner/1183177251316047983.svg" alt="Owner">
              </a>
              `,
            },
          ],
        },
      ],
      copyright: `<b>© ${new Date().getFullYear()} Horizon. All rights reserved. Not affiliated with Discord Inc.</b>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
