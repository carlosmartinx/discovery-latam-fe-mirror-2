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
---
## StyleGuide
Styled-components structure through [***rebassjs***](https://rebassjs.org/). 

Every component must have the following ***CamelCase*** structure

```
|-ComponentName
|-- index.js              # Main component
|-- index.stories.js      # Storybook File
|-- index.spec.js         # Test file
|-- SubComponentName.js   # If any
|-- styled.js             # If needed extend any component styles
```
---
## Development Mode

1st for all, u need install lerna globally `npm install -g lerna`.

Run `yarn` for download all *node_modules* for all ***modules*** and link the among them.

Then run `yarn transpile` for build all the components in ther respective dist folders.

All main commands must be executed in root app folder.

***IMPORTANT***: everytime that u make changes in ***modules*** make sure update the version in `package.json`. Is needed update only the last number and run `yarn` in app root folder again.

## Working in *core*

For run `core` module, just run `yarn start` in app root folder.

## Working in *shared-components*

If u are working in common components, there are 2 ways

- **via storybook**: run `yarn storybook`, work and check changes in storybook page

- **via core**: run `yarn start` and work in **shared-components** folder. For check changes u must run `yarn transpile` in app root folder for apply changes.

## Storybook

```sh
$ yarn storybook
```
---
## Internationalization **(Intl)**

- Only ***core module*** handle this.
- All the shared-components must receive the translation functionality  as `string` or `element`. Ensure to validate this on **propTypes** definitions. Also use a *defaultProp*.
- The default language in *intl* is **en**. Further this will help us to do an ***english*** translation if needed.

Use `FormatedMessage` component for this. Is needed pass 2 props:
- *id*: Unique identifier for the translation.
- *defaultMessage*: Text for the default language.

```
...
import { FormattedMessage } from 'react-intl';
...
...
  <FormattedMessage
    id="Home.Hello"
    defaultMessage="Hello"
  />
...
```

Once the translations are finished, u need run `yarn build:intl --lang=[lang]` where `[lang]` is the expected lang (pt for brazil) in app root folder. 

This will create 2 folders in `*root*/modules/core/public`: 
- *locale*: contains n files:
  - *data.json*: group all the lang translations.
  - *[lang].json*: translations for specific lang.
- *messages*: tree of translations in **src** folder. 

U need to edit *[lang].json* which has the new translate ids. Once tranlated, run `yarn build:int` to add the *[lang].json* tranlations to *data.json* translate file.

## Build to Prod

```sh
$ yarn build
```

You need to have serve installed globally to start it with a static server `npm install -g serve`.

```sh
$ yarn serve
```

Furthermore, you could start it with SSR

```sh
$ yarn serve:ssr
```

-----
For more information please visit:

## Learn More

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
