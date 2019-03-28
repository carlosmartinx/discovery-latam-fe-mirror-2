import React from 'react';
import { storiesOf } from '@storybook/react';
import Ads from '.';

const title = 'Publicidade';
const bgLight = 'ads-light';
const bgDark = 'ads-dark';

storiesOf('Ads', module)
  .add('Desktop 728x90 Light', () => (
    <Ads adSlotSize={[728, 90]} adsTitle={title} bgColor={bgLight} />
  ))
  .add('Desktop 300x250 Dark', () => (
    <Ads adSlotSize={[300, 250]} bgColor={bgDark} />
  ));
