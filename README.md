# Raid Guild Season One

We are building a season1 site using [Docusaurus](https://docusaurus.io/) + [IPFS](https://ipfs.io/). This will help us get a feel for the technologies and limitations while providing a better understanding of the requirements for a templating system MVP.

Have a look at [notes.md](notes.md) for more information.

## Future Vision

We hope this project provides a guide that may lead us down two paths:

- Template for future Raid Guild cohorts
- Template for Web3 projects (DAOs, NFTs and DeFi protocols) with an initial focus on DAOs

## Current Project

`seasonone.raidguild.org` is specific to the cohort we are currently in. Which is what we used to narrow the scope of this sprint.

Was hoping to have something that we can move to done before abstracting a more general template and tools for the cohorts that come after us.

`seasons.raidguild.org`

Sounds organic. And feels more in line with the Raid Guild theme and branding. We would like to use this domain to aggregate the different seasons that come through the program. But have not yet started thinking about how to should approach this.

It is a good experience for cohorts to go through the process of figuring some of this stuff out for themselves.

- IPFS
- Docusaurus
- Customizing design
- Adding content

We want to give upcoming seasons liberty in making their site unique to their cohort. We want to build them tools to make it easier but we also want for them to have to put in work. To figure stuff out and come up with ideas for improvements. We could get to a point where it is just fill in the blanks but that is not what we want. We lose some of the value of hacking, hustle and learning if we get to that spot.

Minimizing our scope a good opportunity to get this project to a place that we can ship it and document the steps required to do some of this stuff for future seasons.

Ultimately, we hope each season's site is never done and the different cohorts continue to add content and document their experiences. We would like to get season1 to a point where we can move on and start to focus on the tools for future cohorts and the Web3 template for DAOs which was the the original goal of this project.

## Steps Taken

### Lars

- Configuration of the footer
- Configuartion of the copyright notice
- Research about OrbitDB
- Research about IPNS and CID
- Started building neanderthals
  - Docusaurus OrbitDB Integration
  - https://www.npmjs.com/package/@crunchypie/neanderthals
  - https://github.com/CrunchyPie/neanderthals

### Travis

- Update README
- Update Docusaurus configuration file
- Choose base color: ff3864
- Generate adjustments [Styling and Layout](https://docusaurus.io/docs/styling-layout)
- Replace favicon.ico, logo.svg
- Create "Hello World" blog post

### Jonathan

- Added a Header component that takes title, tagline, and children props so we can reuse per page
- Added some button styles inspired by the Raid Guild site - these are in the global css file and can be imported and used to extend the existing theme styles with `clsx`
  - These styles can eventually be extended into a design system or component library eventually after the MVP
- Added Apprenticeships and Projects (tag-teamed with Travis)

## ToDo

For a list of work in progress please visit [Season1 MVP](https://github.com/raid-guild/cohort-docusaurus-v0/projects/1)
