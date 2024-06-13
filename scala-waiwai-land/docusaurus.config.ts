import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Scalaわいわいランド',
  tagline: '日本語のScalaコミュニティ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scala-waiwai-land.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scala-waiwai-land', // Usually your GitHub org/user name.
  projectName: 'scala-waiwai-land.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scala-waiwa-land/scala-waiwai-land.github.io/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Scalaわいわいランド',
      logo: {
        alt: 'Scalaわいわいランドのロゴ',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Scalaわいわいランドとは？',
        },
        {
          href: 'https://scalawaiwai.hatenablog.com',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://scrapbox.io/scala-waiwai/',
          label: 'Wiki (Scrapbox)',
          position: 'left',
        },
        {
          href: 'https://www.linen.dev/s/scala-waiwai-land',
          label: 'Discord archive',
          position: 'left',
        },
        {
          href: 'https://github.com/scala-waiwai-land/scala-waiwai-land.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Scalaわいわいランドとは？',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/6ptpjjSsSQ',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Scalaわいわいブログ',
              href: 'https://scalawaiwai.hatenablog.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Scalaわいわいランド Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
