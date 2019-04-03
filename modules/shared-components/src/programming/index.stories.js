import React from 'react';
import { storiesOf } from '@storybook/react';

import Programming from '.';

const countries = [
  {
    name: 'Latam',
    code: 'DSLA-SP',
    active: true,
  },
  {
    name: 'Mexico',
    code: 'DCME-SP',
    active: false,
  },
  {
    name: 'Argentina',
    code: 'DCAR-SP',
    active: false,
  },
];

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
    date: '26/3',
    active: false,
  },
  {
    text: 'Miercoles',
    date: '27/3',
    active: false,
  },
  {
    text: 'Jueves',
    date: '28/3',
    active: false,
  },
  {
    text: 'Jueves',
    date: '29/3',
    active: false,
  },
  {
    text: 'Viernes',
    date: '30/3',
    active: false,
  },
  {
    text: 'Sabado',
    date: '31/3',
    active: false,
  },
];

const shows = [
  {
    id: 1,
    title: 'Titulo programa 1',
    episode: 'Nombre del episodio',
    description: 'asdasd ad a d as das',
    time: '1:00',
    date: '23',
    idChannel: 'discovery',
  },
  {
    id: 2,
    title: 'Titulo programa 2',
    episode: 'Nombre del episodio 2',
    description: 'asdasd asdasd asdasd',
    time: '2:00',
    date: '23',
    idChannel: 'discovery',
  },
  {
    id: 3,
    title: 'Titulo programa 3',
    episode: 'Nombre del episodio 3',
    description: 'asdasd asdasd',
    time: '3:00',
    date: '23',
    idChannel: 'discovery',
  },
  {
    id: 4,
    title: 'Titulo programa 4',
    episode: 'Nombre del episodio 4',
    description: 'asdasd asdasd',
    time: '4:00',
    date: '23',
    idChannel: 'discovery',
  },
];

storiesOf('Programming', module)
  .add('Programming', () => (
    <Programming countries={countries} days={days} shows={shows} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  });
