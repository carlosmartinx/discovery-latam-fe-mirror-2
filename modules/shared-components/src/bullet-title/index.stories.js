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
    <BulletTitle barcolor='default' backtheme='dark'></BulletTitle>, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Light Theme Default', () => 
    <BulletTitle barcolor='default' backtheme='light'> </BulletTitle>, {
      backgrounds: [],
    }
  )
  .add('Dark theme - Change color bar', () => 
    <BulletTitle barcolor={text('Color', '#eb122b')} backtheme='dark'> </BulletTitle>, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Light theme - Change color bar', () => 
    <BulletTitle barcolor={text('Color', '#eb122b')} backtheme='light'> </BulletTitle>, {
      backgrounds: [],
    }
  )
