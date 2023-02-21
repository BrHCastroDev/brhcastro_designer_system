# BRHcastro - Design System

### #Components
- [ ] | #Text <small>`Ensures consistency and standardization for all texts in a project`</small>.
- [ ] | #Heading <small>`Ensures consistency and standardization for all titles in a project`</small>.
- [ ] | #Box
- [ ] | #Button
- [ ] | #TextInput
- [ ] | #CheckBox
- [ ] | #Avatar
- [ ] | #MultiStep

----------
### Tools
- [x] | #[tsup](https://tsup.egoist.dev/) <small>`Bundle your TypeScript library with no config, powered by esbuild`</small>.
- [x] | #[StoryBook](https://storybook.js.org/) `npx sb init --builder @storybook/builder-vite --type react --use-npm`.
- [x] | #[Turbo Repo](https://turbo.build/repo).
- [x] | #[Addon a11y](https://storybook.js.org/addons/@storybook/addon-a11y)
    ```js
    // docs/.storybook/main.js
      module.exports = {
        addons: ['@storybook/addon-a11y'],
      };
    ```
- [x] | #[StoryBook Deployer](https://github.com/storybook-eol/storybook-deployer)
- [x] | #[Changesets](https://turbo.build/repo/docs/handbook/publishing-packages/versioning-and-publishing#understanding-changesets)
    ```sh
       # Helps control versioning of the monorepo since git hub takes care of versioning the entire repository the changeset helps control the versioning of each individual package;
       # We have several packages inside this monorepo and each of them will be served as a separate package in npm;
       # These packages may have different versions and even different changelogs;
       
       # Install
       npm i @changesets/cli -D
       # Initialize
       npx changeset init
    ```
- [x] | #[Remote Caching](https://vercel.com/docs/concepts/monorepos/remote-caching)