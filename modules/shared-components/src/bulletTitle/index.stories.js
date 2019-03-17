/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';

import BulletTitle from '.';

storiesOf('BulletTile', module)
  .addDecorator(withKnobs)
  .add('Dark Theme Default', () => 
    <BulletTitle barcolor='default' bgtheme='dark' text={text('Title', 'Recomendados')}></BulletTitle>, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Light Theme Default', () => 
    <BulletTitle barcolor='default' text={text('Title', 'Recomendados')}> </BulletTitle>, {
      backgrounds: [],
    }
  )
  .add('Dark theme - Change color bar', () => 
    <BulletTitle barcolor={text('Color', '#eb122b')} bgtheme='dark' text={text('Title', 'Recomendados')}> </BulletTitle>, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Light theme - Change color bar', () => 
    <BulletTitle barcolor={text('Color', '#eb122b')} text={text('Title', 'Recomendados')}> </BulletTitle>, {
      backgrounds: [],
    }
  )
