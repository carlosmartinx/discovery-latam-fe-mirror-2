import React from 'react';
import { storiesOf } from '@storybook/react';

import SliderGallery from '.';

const items = [
  {
    key: 1,
    background: 'image',
    title: 'Headline 1',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }, {
    key: 2,
    background: 'image',
    title: 'Headline 2',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }, {
    key: 3,
    background: 'image',
    title: 'Headline 3',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    key: 4,
    background: 'image',
    title: 'Headline 4',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    key: 5,
    background: 'image',
    title: 'Headline 5',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    key: 6,
    background: 'image',
    title: 'Headline 6',
    href: 'http://www.tudiscovery.com',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }];

storiesOf('Gallery', module)
  .add('Default', () => <SliderGallery sliderContent={items} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  });
