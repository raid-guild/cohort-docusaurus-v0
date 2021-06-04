---
sidebar_position: 5
---

# Features

As we were building the cohort site we built some additional features. The goal is to continue to build more additional components and features that amplify and enhance content creators using these site templates.

We were aware of scope creep so we didn't add all of our ideas for the MVP, but we have additional features mainly focused on supporting content creation and helping more folks contribrute to the site documentation. These will be added in as we evaluate the usefulness in a template since we want to ensure that a template stays flexibile and relatively bare bones.

## Icons

We added the `react-icons` package.

## Adding Custom Fonts

We wanted to include the Raid Guild font stack that is used on the org site. The fonts used are *Uncial Antiqua* for headers and *Mirza* for copy. These are Google Fonts, so we were able to include with an import statement for each:

- `@import url("https://fonts.googleapis.com/css2?family=Uncial+Antiqua&display=swap");`
- `@import url("https://fonts.googleapis.com/css2?family=Mirza&family=Uncial+Antiqua&display=swap");`

We placed these imports in the `custom.css` file. Once these imports are included, they can be used in the `custom.css` file as CSS variables on the `:root` selector:

```css
:root {
  --ifm-color-primary: #ff3864;
  --ifm-color-primary-dark: #ff194c;
  --ifm-color-primary-darker: #ff0940;
  --ifm-color-primary-darkest: #da0030;
  --ifm-color-primary-light: #ff577c;
  --ifm-color-primary-lighter: #ff6788;
  --ifm-color-primary-lightest: #ff95ad;
  --ifm-code-font-size: 95%;
  --font-header: "Uncial Antiqua", serif;
  --font-copy: "Mirza", serif;
}
```

The variables for `--font-header` and ``--font-copy` can now be used throughout the site. If the goal is for these fonts to be used throughout the site, consider adding them into the `custom.css` file for headings and copy.

## Content Components

We added some components that allowed for flexibility and reusability. Eventually these components will be further extended, focusing on additional tools for content creators.

### Header

---

We modified the initial `Header` component to allow for more resusability. We noticed that we kept including slight variations of the `Header` across pages. We changed the component to accept the following props: `title`, `tagline`, `children`, and `primary`. These props allowed us to use a modified version of this on the main page, as well as on the _Apprentices_ and _Projects_ pages.

Here are the available props:

- `title`: The _hero title_ for the page. This is an `<h1>` element.
- `tagline`: The `hero subtitle` for the page. This is a `<p>` element (though should maybe be a `<span>`)
- `children`: Wrap elements with the `<Header>`to have them rendered as children. See the example below.
- `primary`: True or false. If true, this renders with the primary color background and black foreground. If false, the colors are inverted. This allows for a basic style variety.

Here is an example of how to use this component without the `children` prop:

```js
import Header from "../../components/Header";

<Header
  title='The Apprentices'
  tagline='The brave and true apprentices of Season 1 who aspire to slay web3 product demons.'
  primary={false}
/>
```

Here is an example of how to use this component with the `children` prop:

```js
import Header from "../../components/Header";

<Header title={siteConfig.title} tagline={siteConfig.tagline}>
  <div className={styles.buttons}>
    <Link
      // className='button button--secondary button--lg'
      className={clsx("button button--lg", styles.buttonRgCTA)}
      to='/docs/intro'
    >
      Docusaurus Tutorial - 5min ⏱️
    </Link>
  </div>
</Header>
```

### Raid Icons

We wanted to use the iconic art found on the [Raid Guild homepage](https://raidguild.org/). We created a reusable `<RaidIcons/>` component that wraps these SVGs and accepts a `color` prop for greater customization. This let us import and use these SVGs throughout the site without needing to paste in the same SVG code into each page.

Here is an example of how to use this component:

```js
import { CrossedAxes } from "./RaidIcons";

<CrossedAxes color='var(--ifm-color-primary)' />
```

The component accepts the site theme variables set in the `custom.css` file used across the Docusaurus site.

[To be continued!]
