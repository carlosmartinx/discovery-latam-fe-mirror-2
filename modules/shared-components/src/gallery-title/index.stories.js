import React from 'react';
import { storiesOf } from '@storybook/react';

import GalleryTitle from '.';

storiesOf('Gallery Title', module)
  .add('Dark Theme', () => <GalleryTitle backtheme="dark" description="Some description text" />, {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Light Theme', () => <GalleryTitle backtheme="light" description="Some description text" />, {
    backgrounds: [],
  });
