# Raid Guild Cohort Docusaurus v0

We are building a season1 site using [Docusaurus](https://docusaurus.io/) + [IPFS](https://ipfs.io/). This will help us get a feel for the technologies and limitations while providing a better understanding of the requirements for a templating system MVP.

Have a look at [notes.md](notes.md) for more information.

### Steps taken by Lars

- Configuration of the footer
- Configuartion of the copyright notice
- Research about OrbitDB
- Research about IPNS and CID
- Started building neanderthals
  - Docusaurus OrbitDB Integration
  - https://www.npmjs.com/package/@crunchypie/neanderthals
  - https://github.com/CrunchyPie/neanderthals

## Steps Taken by Travis

### Phase 1

- clone GitHub repository: https://github.com/jonathanprozzi/raid-guild-cohort-docusaurus-v0
- add folder to workspace in VS Code
- Make updates to README
- Test making an initial commit

### Phase 2

#### Update Configuration

- NPM install
- Update Docusaurus configuration file

#### Update Styles

- Choose base color: ff3864
- Generate adjustments [Styling and Layout](https://docusaurus.io/docs/styling-layout)
- Replace favicon.ico, logo.svg
- npm run build

## ToDo

### Update Content

- Add Apprentices page
- Add Projects page
- Create "Hello World" blog post
- Update top navigation

### Add [Search](https://docusaurus.io/docs/search)

---

### Jonathan Update (5/23)

- Added a Header component that takes title, tagline, and children props so we can reuse per page
- Added some button styles inspired by the Raid Guild site - these are in the global css file and can be imported and used to extend the existing theme styles with `clsx`
  - These styles can eventually be extended into a design system or component library eventually after the MVP
- Added Apprenticeships and Projects (tagteamed with Travis)

**Questions and Considerations**

- What do we think about showing a table in the apprenticeships page and have it display people who signed up for the Notion page? We could link out to folks socials if they consent to it, or we can just have it display names/roles.
  - We'd likely want this to come from our eventual database, but we can figure something out for the MVP
  - I also think this could be a valuable template addition for a web3 template for DAOs, as they may want to display folks with roles?
- I wonder if our Projects page can pull some of the ones from the Internal Projects page, especially once folks complete it?
- What do we think about documenting our steps and processes (as we're doing here) in a section of the docs? I also think the docs section could contain notes and info about the Season 1 Cohort process?
