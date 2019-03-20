/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import {
//   withKnobs,
//   text,
// } from '@storybook/addon-knobs';

import ProgrammingTabs from '.';

storiesOf('ProgrammingTabs', module)
  .add('Programming Tabs', () => 
    <ProgrammingTabs day="Lunes" date="18/03" />
  )