const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/**
 * @type {import('redocusaurus').PresetEntry}
 */
const redocusaurus = [
  'redocusaurus',
  {
    debug: Boolean(process.env.DEBUG || process.env.CI),
    specs: [
      // {
      //   id: 'furo',
      //   spec: 'openapi/furo/v1/openapi.yaml',
      //   route: '/api/furo/',
      // },
    ],
    theme: {
      primaryColor: '#35393d',
      /**
       * Options to pass to redoc
       * @see https://github.com/redocly/redoc#redoc-options-object
       */
      options: { disableSearch: true },
      /**
       * Options to pass to override RedocThemeObject
       * @see https://github.com/Redocly/redoc#redoc-theme-object
       */
      theme: {},
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sushi Docs',
  tagline: 'Documentation Portal',
  url: 'https://docs.sushi.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'sushi-labs',
  projectName: 'docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/sushiswap/sushi-docs/edit/master',
          versions: {
            current: {
              label: 'current',
            },
          },
          lastVersion: 'current',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    // Redocusaurus Config
    redocusaurus,
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Sushi Docs',
        logo: {
          alt: 'Sushiswap Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/concepts/overview',
            label: 'Concepts',
            position: 'left',
          },
          {
            to: '/contracts/overview',
            label: 'Contracts',
            position: 'left',
          },
          {
            to: '/subgraphs/v3',
            label: 'Subgraphs',
            position: 'left',
          },
          {
            href: 'https://app.swaggerhub.com/apis/sushi-labs/sushi/5.0.0',
            label: 'API Reference',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/sushi',
            label: 'SDK',
            position: 'right',
          },
          {
            href: 'https://github.com/sushi-labs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GitHub',
            items: [
              {
                label: 'Sushi Labs',
                href: 'https://github.com/sushi-labs',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Home',
                href: 'https://www.sushi.com',
              },
              {
                label: 'Explore',
                href: 'https://www.sushi.com/explore',
              },
              {
                label: 'Media Kit',
                href: 'https://sushiswap.notion.site/Sushi-2-0-Media-Kit-da7d46dec1bc461e82f1efe47e3efd97',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.sushi.com',
              },
              {
                label: 'Discord',
                href: 'https://www.sushi.com/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/sushiswap',
              },
              {
                label: 'Blog',
                href: 'https://www.sushi.com/blogs',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
