---
sidebar_position: 7
---

# Docusaurus

[Docusaurus](https://docusaurus.io/) is an open-source tool for creating content focused sites powered by React, Markdown and MDX. There are several features outside of the box that allow for a smooth content creation experience, letting a team focus more on writing and less on configuration (after the initial setup).

## The Structure

Docusaurus uses page-based routing, and you can create folder structures within this structure. Markdown (.md and .mdx) files inside the `docs` folder are then nested inside `docs` in the page route. For example, this document would be found at `/docs/docusaurus`.

This structure isn't limited to the `docs` folder. To include a `blog` on your site, you would create the `blog` folder and then nest content within it in the same way you do with the documentation.

This extendable page-based routing allows for teams to quickly scaffold a content-based site without needing to worry (as much) about structure.

Docusaurus also uses page-based routing for creating non-documentation pages. This makes your Docusaurus site even more flexible as you can add pages outside of the `docs` and `blog` folders. In the cohort site, we created pages for `apprentices` and `projects` that are built with React.

## The Writing Experience

All of the documents are Markdown (or MDX -- markdown that is able to include and render React components). Through a use of `frontmatter` the team can determine the _sidebar position_ for each item in the `docs` folder.

## Publishing

Docusaurus is similar to other _static site generators_ that convert the site content into static HTML after running a build step. This keeps the site performant and allows for a lot of flexibility in deployment and hosting.

There is a build step `docusaurus build` (`npm build` / `yarn build` depending on how you're personally set up) that builds the content into static pages.

Once the build step completes, the content can be deployed. We went with [ipfs](https://ipfs.io/), but the site can be hosted on other options such as [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/).

## Extending

Coming soon!
