import React from 'react';
import { storiesOf } from '@storybook/react';

import PanoramicSlider from '.';

const items = [
  {
    key: 1,
    background: 'image',
    backtheme: 'dark',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    title: 'Headline 1',
    description: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }, {
    key: 2,
    backtheme: 'ligh',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    title: 'Headline 2',
    description: 'Description',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
  }, {
    key: 3,
    background: 'image',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    title: 'Headline 3',
    description: 'Description',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }];

const oneItem = [
  {
    key: 1,
    background: 'image',
    backtheme: 'dark',
    title: 'Headline 1',
    description: 'Description',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
];

storiesOf('Panoramic Slider', module)
  .add('Slider', () => <PanoramicSlider sliderContent={items} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Slider One Item', () => <PanoramicSlider sliderContent={oneItem} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  });
