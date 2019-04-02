import React from 'react';
import { storiesOf } from '@storybook/react';
import { esCodes } from '../../config/tagCodes';

import ContentCardAds from '.';

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

const adsData = [{
  bgColor: 'ads-dark',
  adTitle: 'Publicidad',
  adSlotConfig: [{
    adSlotSize: [300, 250],
    adUnitText: 'discoverylatam/Box_bottom',
    adSlotId: esCodes.box_bottom,
  }],
}];

storiesOf('Slider Content Card with Ad', module)
  .add('Content Cards', () => <ContentCardAds dataSliderContent={items} adsData={adsData} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  });
