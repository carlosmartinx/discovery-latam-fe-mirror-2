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
  .add('Default', () => 
    <CookieBar langcode={text('language', 'es')}> </CookieBar>
  )
  .add('Brasil', () => 
    <CookieBar langcode='br'> </CookieBar>
  )
