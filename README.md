This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Discovery Web App

React Based Front-End Layer for Discovery Latam

Stack:

- React
- PWA
- Webpack 4
- Web Components

## Structure

This repository is based on monorepo architecture

- **modules/core:** CRA Based application
- **modules/shared-components:** Reusable components for the web app
- **modules/tu-discovery:** TODO

## Development Mode

1st for all, u need install lerna globally `npm install -g lerna`.

Then run `lerna boostrap` for download all node_modulels forr all *modules* and link the among them

All main commands must be executed in root app folder

***IMPORTANT***: everytime that u make changes in ***modules*** make sure update the version in `package.json`. Is needed update only the last number

## Working in *tu-discovery*

/* *TODO* */

## Working in *core*

For run `core` module, just run `yarn start` in app root folder.

## Working in *shared-components*

If u are working in common components, there are 2 ways

- **via storybook**: run `yarn storybook`, work and check changes in storybook page

- **via core**: run `yarn start` and work in **shared-components** folder. For check changes u must run `yarn transpile` in root folder.

## Storybook

```sh
$ yarn storybook
```

For more information please visit:

## Learn More

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
