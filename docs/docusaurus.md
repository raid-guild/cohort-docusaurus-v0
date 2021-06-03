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

### Frontmatter

If you're new to Markdown, `frontmatter` is written (usually) in YAML. It appears at the very top of a document and is started and stopped with three dashes such as "---". The frontmatter often contains metadata about the document and useful information for static site generators such as categories, tags, or sidebar position for Docusaurus documentation. Here is an example of frontmatter:

```yaml
---
sidebar_position: 7
---
```

This frontmatter snippet appears at the top of this document even before the top-level heading. Other common fields are `tags`, `categories`, `title`, and `author`, but the possibilities are endless. This is a way for content creators writing with Markdown to add additional relevant information to their content.

### Markdown

*Markdown* is a markup language created by [John Gruber](https://daringfireball.net/projects/markdown/) in 2004 with the goal of creating a markup language that was clear to read while also being highly flexible. Many writing tools are able to either export to Markdown or even support direct copy-and-pasting. If you were to write a document in Notion and then copy and paste it into a `.md` or `.mdx` file, the Markdown syntax and formatting will (usually) transfer.

You can also copy *from* Markdown *to* Google Docs or Notion. While this works fairly well these days there still may be some slight variations in style due to "flavors" of Markdown.

If you prefer to use a text editor, [VS Code](https://code.visualstudio.com/) supports Markdown without additional configuration. While the "out of the box" editing experience is positive, there are several extensions that are useful for leveling up the Markdown writing experience. Here are some suggestions to help get you started:

- [Markdown All-in-One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)


You can split your editor so that you have your Markdown file and the preview side-by-side within VS Code. This provides a writing experience similar to [HackMD](https://hackmd.io/).

## Publishing

Docusaurus is similar to other _static site generators_ that convert the site content into static HTML after running a build step. This keeps the site performant and allows for a lot of flexibility in deployment and hosting.

There is a build step `docusaurus build` (`npm build` / `yarn build` depending on how you're personally set up) that builds the content into static pages.

Once the build step completes, the content can be deployed. We went with [ipfs](https://ipfs.io/), but the site can be hosted on other options such as [Netlify](https://www.netlify.com/) and [Vercel](https://vercel.com/).

## Extending

Coming soon!
