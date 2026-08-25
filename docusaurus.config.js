import {themes as prismThemes} from 'prism-react-renderer';
import fs from 'fs';
import path from 'path';

function getRecentBlogPosts() {
  const blogDir = path.join(process.cwd(), 'blog');
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
  
  // Sort reverse alphabetically (by date in filename)
  files.sort((a, b) => b.localeCompare(a));
  
  const recentFiles = files.slice(0, 3);
  const items = [];
  
  for (const file of recentFiles) {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    
    let title = 'Blog Post';
    let slug = '';
    
    // Extract frontmatter
    const titleMatch = content.match(/^title:\s*(.*)$/m);
    if (titleMatch) title = titleMatch[1].replace(/['"]/g, '');
    
    const slugMatch = content.match(/^slug:\s*(.*)$/m);
    if (slugMatch) {
      slug = slugMatch[1].replace(/['"]/g, '');
    } else {
      const nameWithoutDate = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx?$/, '');
      slug = nameWithoutDate;
    }
    
    // Shorten title if it's too long
    const displayTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;

    items.push({
      type: 'html',
      value: `<a href="/blog/${slug}" class="dropdown-custom-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">${displayTitle}</span><span class="dropdown-custom-subtitle">Read our latest update</span></div></a>`,
    });
  }
  
  // Add "View All" link
  items.push({
    type: 'html',
    value: '<a href="/blog" class="dropdown-custom-item" style="border-top: 1px solid rgba(255,255,255,0.05); margin-top: 0.5rem; padding-top: 1rem;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">All Articles</span><span class="dropdown-custom-subtitle">View the entire blog archive</span></div></a>',
  });
  
  return items;
}

// Generate latestBlog.json for the homepage banner
function generateLatestBlogJson() {
  const blogDir = path.join(process.cwd(), 'blog');
  if (!fs.existsSync(blogDir)) return;
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
  files.sort((a, b) => b.localeCompare(a));
  
  if (files.length > 0) {
    const file = files[0];
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    
    let title = 'Blog Post';
    let slug = '';
    
    const titleMatch = content.match(/^title:\s*(.*)$/m);
    if (titleMatch) title = titleMatch[1].replace(/['"]/g, '');
    
    const slugMatch = content.match(/^slug:\s*(.*)$/m);
    if (slugMatch) {
      slug = slugMatch[1].replace(/['"]/g, '');
    } else {
      slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx?$/, '');
    }
    
    const outputPath = path.join(process.cwd(), 'src', 'latestBlog.json');
    fs.writeFileSync(outputPath, JSON.stringify({ title, url: `/blog/${slug}` }, null, 2));
  }
}
generateLatestBlogJson();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Horizon',
  tagline: 'Horizon offers a variety of space-related commands for your server using real-time data.',
  favicon: 'img/favicon.ico',
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

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
        rel: 'stylesheet',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#5865F2',
      },
    },
  ],

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
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'discord astronomy bot, space discord bot, NASA APOD bot, rocket launch tracker discord, space news bot, real time astronomy data, JWST discord bot, SpaceX launch notifications, horizon discord bot, astronomy community, science discord bot'},
        {name: 'description', content: 'Horizon is the premier space and astronomy bot for Discord. Track live rocket launches, fetch NASA APODs, explore planets, and receive real-time cosmic news directly in your server.'},
        {property: 'og:title', content: 'Horizon | The Ultimate Discord Astronomy Bot'},
        {property: 'og:description', content: 'Bring the universe to your Discord server! Track live rocket launches, NASA APODs, and real-time astronomy news with Horizon.'},
        {property: 'og:site_name', content: 'Horizon'},
        {property: 'og:image:alt', content: 'Horizon Discord Astronomy Bot Banner'},
        {property: 'og:type', content: 'website'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:image:alt', content: 'Horizon Discord Astronomy Bot Banner'},
        {name: 'twitter:site', content: '@horizonbyatlas'},
        {name: 'twitter:title', content: 'Horizon | Discord Astronomy & Space Bot'},
        {name: 'twitter:description', content: 'Track live rocket launches, NASA APODs, and real-time astronomy news with Horizon. The ultimate space bot for Discord.'},
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/header.jpg',
      navbar: {
        logo: {
          alt: 'Horizon Logo',
          src: 'img/horizonimg.png', 
        },
        items: [
          {
            type: 'dropdown',
            label: 'Features',
            position: 'left',
            className: 'navbar-blog-dropdown',
            items: [
              {
                type: 'html',
                value: '<a href="/features/automations" class="dropdown-custom-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">Automated Notifications</span><span class="dropdown-custom-subtitle">Get notified about upcoming launches and events</span></div></a>',
              },
              {
                type: 'html',
                value: '<a href="/#features-section" class="dropdown-custom-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">Core Features</span><span class="dropdown-custom-subtitle">Explore everything Horizon can do</span></div></a>',
              },
              {
                type: 'html',
                value: '<a href="/#discord-demo-section" class="dropdown-custom-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">Interactive Demo</span><span class="dropdown-custom-subtitle">Try out the Discord UI in your browser</span></div></a>',
              },
            ],
          },
          {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          className: 'navbar-blog-dropdown',
          items: [
            {
              type: 'html',
              value: '<a href="/docs/welcome" class="dropdown-custom-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">Docs</span><span class="dropdown-custom-subtitle">Helpful guides and answers to your questions</span></div></a>',
            },
            {
              type: 'html',
              value: '<a href="https://support.teamatlas.dev" target="_blank" class="dropdown-custom-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">Support</span><span class="dropdown-custom-subtitle">Join our Discord Server for 24/7 Support</span></div></a>',
            },
            {
              type: 'html',
              value: '<a href="/terms" class="dropdown-custom-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">Terms of Service</span><span class="dropdown-custom-subtitle">The rules of using Horizon</span></div></a>',
            },
            {
              type: 'html',
              value: '<a href="/privacy" class="dropdown-custom-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><div class="dropdown-custom-text"><span class="dropdown-custom-title">Privacy Policy</span><span class="dropdown-custom-subtitle">How we protect your data</span></div></a>',
            },
          ],
        },
          {
          type: 'dropdown',
          label: 'Blog',
          position: 'left',
          className: 'navbar-blog-dropdown',
          items: getRecentBlogPosts(),
        },
          {
            href: 'https://donate.teamatlas.dev',
            label: 'Donate',
            position: 'right',
          },
        ],
      },
      footer: {
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
                href: 'https://top.gg/bot/1183177251316047983/vote', // Placeholder ID
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://support.teamatlas.dev',
              },
              {
                label: 'X (Twitter)',
                href: 'https://twitter.com/horizonbyatlas',
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
            ],
          },
          {
            title: 'Top.gg Stats',
            items: [
              {
                html: '<a href="https://top.gg/bot/1183177251316047983" target="_blank" rel="noopener noreferrer"><img src="https://top.gg/api/widget/status/1183177251316047983.svg" alt="Top.gg Status" style="display:block; margin-bottom: 8px; border-radius: 4px;" /></a>',
              },
              {
                html: '<a href="https://top.gg/bot/1183177251316047983" target="_blank" rel="noopener noreferrer"><img src="https://top.gg/api/widget/owner/1183177251316047983.svg" alt="Top.gg Owner" style="display:block; border-radius: 4px;" /></a>',
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
    }),
};

export default config;
