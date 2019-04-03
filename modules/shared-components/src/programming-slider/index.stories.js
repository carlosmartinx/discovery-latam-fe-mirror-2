import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgrammingSlider from '.';

const days = [
  {
    text: 'Lunes',
    date: '18/3',
    active: true,
  },
  {
    text: 'Martes',
    date: '19/3',
    active: false,
  },
  {
    text: 'Miercoles',
    date: '20/3',
    active: false,
  },
  {
    text: 'Jueves',
    date: '21/3',
    active: false,
  },
  {
    text: 'Viernes',
    date: '22/3',
    active: false,
  },
  {
    text: 'Sabado',
    date: '23/3',
    active: false,
  },
  {
    text: 'Domingo',
    date: '24/3',
    active: false,
  },
  {
    text: 'Lunes',
    date: '25/3',
    active: false,
  },
  {
    text: 'Martes',
    date: '25/3',
    active: false,
  },
  {
    text: 'Miercoles',
    date: '26/3',
    active: false,
  },
];

storiesOf('ProgrammingSlider', module)
  .add('Programming Slider', () => (
    <ProgrammingSlider days={days} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  });
