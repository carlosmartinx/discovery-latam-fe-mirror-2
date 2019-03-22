/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Content from '.';
import { withKnobs } from '@storybook/addon-knobs';

const logo = 'https://drive.google.com/uc?export=view&id=1T7ocXEbZ459fX8x_WM5cer7h6xJ77hxm';
const link = 'https://www.tudiscovery.com/discovery';
const title = 'Discovery';
const description = 'En su viaje por México, Frank descubre y persigue varios animales que encuentra en el camino. ¡Míralo en acción!';

storiesOf('Content', module)
  .addDecorator(withKnobs)
  .add('Content', () =>
    <Content logo={logo} link={link} title={title} description={description} />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
