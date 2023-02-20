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
    ```js
      
    ```