import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgrammingCard from '.';

const getShow = (idChannel) => {
  const show = {
    title: 'Titulo programa',
    episode: 'Nombre del episodio',
    description: 'asdasd ad a d as das',
    time: '11:00',
    date: '23',
    idChannel,
  };

  return show;
};

storiesOf('ProgrammingCard', module)
  .add('Discovery', () => (
    <ProgrammingCard show={getShow('discovery')} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('TLC', () => (
    <ProgrammingCard show={getShow('tlc')} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Kids', () => (
    <ProgrammingCard show={getShow('kids')} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Animal Planet', () => (
    <ProgrammingCard show={getShow('animalPlanet')} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Discovery Home & Health', () => (
    <ProgrammingCard show={getShow('discoveryhh')} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Turbo', () => (
    <ProgrammingCard show={getShow('turbo')} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Science', () => (
    <ProgrammingCard show={getShow('science')} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('ID', () => (
    <ProgrammingCard show={getShow('id')} />
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  });
