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
      adSlotSize={[728, 90]}
      adTitle={title}
      bgColor={bgLight}
      adUnitText={unitText}
      adSlotId={esCodes.mob_leaderboard_bottom}
    />
  ))
  .add('Desktop 300x250 Dark', () => (
    <Ads
      adSlotSize={[300, 250]}
      bgColor={bgDark}
      adTitle={title}
      adUnitText={unitText}
      adSlotId={esCodes.mob_leaderboard_mid}
    />
  ));
