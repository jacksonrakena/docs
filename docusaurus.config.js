module.exports = {
  title: 'Abyssal',
  tagline: 'Documentation and how-tos for Abyssal services and libraries',
  url: 'https://docs.abyssal.gg/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'abyssal', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Abyssal API & Libraries',
      logo: {
        alt: 'Abyssal logo',
        src: 'http://d.lu.je/avatar/255950165200994307'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/abyssal',
          label: 'Abyssal on GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'Lament',
              href: 'https://vcs.abyssal.gg/lament'
            },
            {
              label: 'SpotiNET',
              href: 'https://vcs.abyssal.gg/SpotiNET'
            },
          ],
        },
        {
          title: 'Social media',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/abyssalnz',
            },
            {
              label: 'Discord server',
              href: 'https://discord.abyssal.gg'
            },
            {
              label: 'GitHub',
              href: 'https://vcs.abyssal.gg/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `MIT © 2019-${new Date().getFullYear()} Abyssal`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/abyssal/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/abyssal/docs/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
