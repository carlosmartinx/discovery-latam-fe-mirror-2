import React from 'react';
import { storiesOf } from '@storybook/react';

import SliderContentCard from '.';

const data = {
  name: 'Discovery',
  circular_logo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
  url: 'https://tudiscovery.com/',
};

const items = [
  {
    key: 1,
    background: 'image',
    backtheme: 'dark',
    title: 'Headline 1',
    description: 'Description',
    sponsor: data,
    variation: 'short',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }, {
    key: 2,
    backtheme: 'ligh',
    title: 'Headline 2',
    description: 'Description',
    sponsor: data,
    variation: 'short',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
  }, {
    key: 3,
    background: 'image',
    title: 'Headline 3',
    description: 'Description',
    sponsor: data,
    variation: 'short',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }];

const oneItem = [
  {
    key: 1,
    background: 'image',
    backtheme: 'dark',
    title: 'Headline 1',
    description: 'Description',
    sponsor: data,
    variation: 'short',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
];

storiesOf('Slider Content Card Big', module)
  .add('Slider multiple items', () => <SliderContentCard sliderContent={items} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Slider One Item', () => <SliderContentCard sliderContent={oneItem} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  });
