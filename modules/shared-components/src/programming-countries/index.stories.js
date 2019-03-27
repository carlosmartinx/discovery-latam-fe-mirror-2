import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgrammingCountries from '.';

const countries = [
  {
    name: 'Latam',
    code: 'DSLA-SP',
    active: true
  },
  {
    name: 'Mexico',
    code: 'DCME-SP'
  },
  {
    name: 'Argentina',
    code: 'DCAR-SP'
  }
];

storiesOf('ProgrammingCountries', module)
  .add('Programming Countries', () =>
    <ProgrammingCountries countries={countries} />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  );
