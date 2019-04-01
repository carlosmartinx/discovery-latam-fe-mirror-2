import React from 'react';
import { storiesOf } from '@storybook/react';
import Ads from '.';
import { esCodes } from '../../config/tagCodes';

const title = 'Publicidad';
const bgLight = 'ads-light';
const bgDark = 'ads-dark';
const unitTextEs = 'discoverylatam/';
const unitText = `${unitTextEs}Mobile_leaderboard_bottom`;

storiesOf('Ads', module)
  .add('Desktop 728x90 Light', () => (
    <Ads
      adTitle={title}
      bgColor={bgLight}
      adSlotConfig={[{
        adSlotSize: [728, 90],
        adUnitText: unitText,
        adSlotId: esCodes.leaderboard_mid,
      }, {
        adSlotSize: [300, 50],
        adUnitText: unitText,
        adSlotId: esCodes.mob_leaderboard_bottom,
      }]}
    />
  ))
  .add('Desktop 300x250 Dark', () => (
    <Ads
      bgColor={bgDark}
      adTitle={title}
      adSlotConfig={[{
        adSlotSize: [300, 250],
        adUnitText: unitText,
        adSlotId: esCodes.mob_leaderboard_mid,
      }]}
    />
  ));
