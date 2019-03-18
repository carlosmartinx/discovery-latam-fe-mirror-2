import { configure, addDecorator } from "@storybook/react";
import Theme from '@discovery-web-app/core/src/styles/mainTheme';
import React from 'react';
import { ThemeProvider } from 'styled-components'

// automatically import all files ending in *.stories.js
const req = require.context(
  "../modules/shared-components/src",
  true,
  /.stories.js$/
);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
