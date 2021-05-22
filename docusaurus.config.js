/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Season 1',
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
      'orbit-cid': ''
    },
    navbar: {
      title: 'Season 1',
      logo: {
        alt: 'Crossed Swords',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/orgs/raid-guild/',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
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
              label: 'GitHub',
              href: 'https://github.com/orgs/raid-guild/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Raid Guild's Season 1. Built with Docusaurus.`,
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
