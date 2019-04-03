import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgrammingSliderItem from '.';

storiesOf('ProgrammingSliderItem', module)
  .add('Programming Slider Item', () => (
    <ProgrammingSliderItem day="Lunes" date="18/03" />
  ))
  .add('Programming Slider Item Active', () => (
    <ProgrammingSliderItem day="Lunes" date="18/03" active />
  ));
