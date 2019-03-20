import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Footer from '.';

storiesOf('Footer', module)
  .add('in spanish langcode', () => (
    <Footer
      langcode="es"
    />
  ))

  .add('in portuguese langcode', () => (
    <Footer
      langcode="pt"
    />
  ));
