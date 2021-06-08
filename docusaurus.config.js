/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Raid Guild Season 1 Cohort',
  tagline: 'Slaying Web3 Product Demons',
  url: 'https://bafybeieqwggeehqd6croo6mwafxc75zpeaq4h2vrzylkoitrtoqo6pyjai.ipfs.infura-ipfs.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Raid Guild', // Usually your GitHub org/user name.
  projectName: 'raid-guild-cohort-docusaurus-v0', // Usually your repo name.
  plugins: ['@crunchypie/neanderthals'],
  themeConfig: {
    neanderthals: {
      orbitAddress: '',
    },
    navbar: {
      title: 'Season 1',
      logo: {
        alt: 'Crossed Swords',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/apprentices', label: 'Apprentices', position: 'left' },
        { to: '/projects', label: 'Projects', position: 'left' },
        { to: '/memes', label: 'Memes', position: 'right' },
        { to: '/blog', label: 'Blog', position: 'right' },
        { to: '/community', label: 'Community', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/raid-guild',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/rGFpfQf',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/RaidGuild',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/orgs/raid-guild/',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} <a href='https://raidguild.org/'>Raid Guild</a> Season 1. Built with <a href='https://docusaurus.io/'>Docusaurus</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
