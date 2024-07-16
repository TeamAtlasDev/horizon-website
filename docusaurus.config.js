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
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AtlasDevGroup', // Usually your GitHub org/user name.
  projectName: 'horizon-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          showReadingTime: true,
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
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'support_us',
      content:
        'Check out the official Horizon APP <a target="_blank" rel="noopener noreferrer" href="https://discord.com/application-directory/1183177251316047983">Discord Discovery</a> Page',
      backgroundColor: '#272728',
      textColor: '#fafbfc',
      isCloseable: true,
    },
    image: 'img/header.jpg',
    navbar: {
      logo: {
        alt: 'Horizon Logo',
        src: 'img/logo.png',
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
              label: 'Twitter',
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
        // New category added to the left
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
      copyright: `© ${new Date().getFullYear()} Horizon. All rights reserved. Not affiliated with Discord Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  },
};



export default config;
