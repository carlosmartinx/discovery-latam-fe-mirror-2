import React from 'react';
import { storiesOf } from '@storybook/react';

import Carousel from '.';

const items = [
  {
    background: 'image',
    backtheme: 'dark',
    title: 'Headline 1',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }, {
    backtheme: 'ligh',
    background: 'video',
    title: 'Headline 2',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
  }, {
    background: 'image',
    title: 'Headline 3',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'gallery',
    title: 'Headline 4',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'image',
    title: 'Headline 5',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'image',
    title: 'Headline 6',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'image',
    title: 'Headline 7',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'image',
    title: 'Headline 8',
    href: 'http://www.tudiscovery.com',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  }];

const threeItems = [
  {
    background: 'image',
    backtheme: 'dark',
    title: 'Headline 1',
    description: 'Description',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'video',
    backtheme: 'dark',
    title: 'Headline 1',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'gallery',
    backtheme: 'dark',
    title: 'Headline 1',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
];

const fourItems = [
  {
    background: 'video',
    backtheme: 'dark',
    title: 'Headline 1',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'video',
    backtheme: 'dark',
    title: 'Headline 1',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'video',
    backtheme: 'dark',
    title: 'Headline 1',
    channelLogo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/discovery.svg',
    channelAlt: 'Discovery Channel',
    label: 'label',
    duration: '30:30',
    totalTime: '10:10',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
  {
    background: 'gallery',
    backtheme: 'dark',
    title: 'Headline 1',
    headerSource: 'https://lkfsbnqnmjwfhf6vwa5w3wf47g.gcdn.anvato.net/anv-iupl/FAF/50B/FAF50BC43B504B748967A9C44CF5A337.jpg?Expires=1642437024&KeyName=mcpkey1&Signature=03OBysNVWH9wUS6IIC9VlaL5Bto',
  },
];

storiesOf('Carousel', module)
  .add('Carousel 8 Items', () => <Carousel sliderContent={items} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Carousel 4 items', () => <Carousel sliderContent={fourItems} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Carousel 3 items', () => <Carousel sliderContent={threeItems} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  });
