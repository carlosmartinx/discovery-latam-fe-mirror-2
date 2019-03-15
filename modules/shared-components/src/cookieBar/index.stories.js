/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button2 from '.';

storiesOf('Button2', module)
  .add('with text', () => <Button2 onClick={action('clicked')}>Button</Button2>)

  .add('with some emoji', () => (
    <Button2 onClick={action('clicked')}>😀 😎 👍 💯</Button2>
  ))

  .add('with a theme provider', () => (
    <Button2 onClick={action('clicked')}>Button</Button2>
  ));
