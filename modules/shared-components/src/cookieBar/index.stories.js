/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';

import CookieBar from '.';

storiesOf('CookieBar', module)
  .addDecorator(withKnobs)
  .add('Brasil', () => 
    <CookieBar langcode={text('language', 'pt')}> </CookieBar>
  )
  .add('Latam', () => 
    <CookieBar langcode='es'> </CookieBar>
  )
