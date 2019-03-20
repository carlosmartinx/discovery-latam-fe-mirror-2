/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import {
//   withKnobs,
//   text,
// } from '@storybook/addon-knobs';

import ProgrammingCard from '.';

storiesOf('ProgrammingCard', module)
  .add('Programming Card', () => 
    <ProgrammingCard
        title="Titulo programa"
        episode="Nombre del episodio"
        description="asdasd ad a d as das"
        time="11:00"
        date="23"
    />
  )