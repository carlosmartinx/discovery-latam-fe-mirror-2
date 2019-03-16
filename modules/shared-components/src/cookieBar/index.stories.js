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
  .add('Cookies', () => 
    <CookieBar language={text('language', 'es')}> </CookieBar>
  )
  .add('latam', () => 
    <CookieBar language='es'> </CookieBar>
  )

  .add('brasil', () => 
  <CookieBar language='br'> </CookieBar>
  )
