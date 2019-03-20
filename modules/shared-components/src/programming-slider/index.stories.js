/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import {
//   withKnobs,
//   text,
// } from '@storybook/addon-knobs';

import ProgrammingSlider from '.';

const days = [
  {
      day: 'Lunes',
      date: '18/3'
  },
  {
      day: 'Martes',
      date: '19/3'
  },
  {
      day: 'Miercoles',
      date: '20/3'
  },
  {
      day: 'Jueves',
      date: '21/3'
  },
  {
      day: 'Viernes',
      date: '22/3'
  },
  {
      day: 'Sabado',
      date: '23/3'
  },
  {
      day: 'Domingo',
      date: '24/3'
  }
];

storiesOf('ProgrammingSlider', module)
  .add('Programming Slider', () => 
    <ProgrammingSlider days={days} />
  )