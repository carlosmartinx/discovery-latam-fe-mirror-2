/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Menu from '.';

storiesOf('Menu', module)
  .add('with text', () => <Menu onClick={action('opened')}></Menu>)
