/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
} from '@storybook/addon-knobs';

import TuneInOpening from '.';

storiesOf('TuneInOpening', module)
  .addDecorator(withKnobs)
  .add('Dark Theme Default', () => 
    <TuneInOpening background='video'></TuneInOpening>, {
    }
  )
  .add('Light Theme Default', () => 
    <TuneInOpening background='image'> </TuneInOpening>, {
    }
  )
