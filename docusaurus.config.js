/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Raid Guild Season 1 Cohort",
  tagline: "Slaying Web3 Product Demons",
  // url: 'https://bafybeieqwggeehqd6croo6mwafxc75zpeaq4h2vrzylkoitrtoqo6pyjai.ipfs.infura-ipfs.io/',
  url: "https://lucky-frost-0893.on.fleek.co/",
  // baseUrl: "/ipfs/QmbezGequPwcsWo8UL4wDF6a8hYwM1hmbzYv2mnKkEWaUp/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Raid Guild", // Usually your GitHub org/user name.
  projectName: "raid-guild-cohort-docusaurus-v0", // Usually your repo name.
  plugins: ["@crunchypie/neanderthals"],
  themeConfig: {
    neanderthals: {
      orbitAddress: "",
    },
    navbar: {
      title: "Season 1",
      logo: {
        alt: "Crossed Swords",
        src: "/img/logo.svg",
      },
      items: [
        { to: "/apprentices", label: "Apprentices", position: "left" },
        { to: "/projects", label: "Projects", position: "left" },
        { to: "/memes", label: "Memes", position: "right" },
        { to: "/blog", label: "Blog", position: "right" },
        { to: "/community", label: "Community", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Content",
          items: [
            {
              label: "Apprentices",
              to: "/apprentices",
            },
            {
              label: "Projects",
              to: "/projects",
            },
            {
              label: "Memes",
              to: "/memes",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "DAO",
              href: "https://app.daohaus.club/dao/0x64/0x10e31c10fb4912bc408ce6c585074bd8693f2158",
            },
            {
              label: "Discord",
              href: "https://discord.gg/ent9Gxs2UB",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/i/lists/1395786573682257921",
            },
            {
              label: "GitHub",
              href: "https://github.com/orgs/raid-guild/",
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} <a href='https://raidguild.org/'>Raid Guild</a> Season 1`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
