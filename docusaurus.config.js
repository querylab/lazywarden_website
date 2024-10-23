// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lazywarden',
  tagline: 'Lazywarden',
  favicon: 'img/favicon.ico',
  baseUrl: "/",

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'querylab', // Usually your GitHub org/user name.
  projectName: 'lazywarden', // Usually your repo name.

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
    {
      docs: {
        routeBasePath: '/', // Establece la raíz para los documentos
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/querylab/lazywarden',
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/querylab/lazywarden',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    },
  ],
],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        logo: {
          alt: 'Lazywarden Logo',
          src: 'img/lazywarden_official_logo.svg',
          href: '/',
        },
        items: [
          ...require("./socials.js"),
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Issues",
                href: "https://github.com/querylab/lazywarden/issues",
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/querylab/lazywarden',
              },
            ],
          },
        ],
        copyright: `Made with ❤️ by querylab`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
