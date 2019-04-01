import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from 'rebass';
import get from 'lodash/get';
import Share from '.';

import Facebook from '../../icons/facebook.svg';
import Twitter from '../../icons/twitter.svg';
import Email from '../../icons/email.svg';
import Whatsapp from '../../icons/whatsapp.svg';

const shareDesktop = [
  {
    id: 1,
    icon: Facebook,
    color: 'blue',
    url: '',
    background: props => get(props, 'theme.colors.facebook', ''),
    title: 'Comparte',
  },
  {
    id: 2,
    icon: Twitter,
    color: 'bluetw',
    url: '',
    background: props => get(props, 'theme.colors.twitter', ''),
    title: '',
  },
  {
    id: 4,
    icon: Email,
    color: 'red',
    url: '',
    background: props => get(props, 'theme.colors.mail', ''),
    title: '',
  }];

const shareMobile = [
  {
    id: 1,
    icon: Facebook,
    color: 'white',
    url: '',
    background: props => get(props, 'theme.colors.facebook', ''),
    title: '',
  },
  {
    id: 2,
    icon: Twitter,
    color: 'white',
    url: '',
    background: props => get(props, 'theme.colors.twitter', ''),
    title: '',
  },
  {
    id: 3,
    icon: Whatsapp,
    color: 'white',
    url: '',
    background: props => get(props, 'theme.colors.whatsApp', ''),
    title: '',
  },
  {
    id: 4,
    icon: Email,
    color: 'white',
    url: '',
    background: props => get(props, 'theme.colors.mail', ''),
    title: '',
  }];

storiesOf('Share', module)
  .addDecorator(withKnobs)
  .add('Desktop', () => (
    <Box>
      <Share shareList={shareDesktop} />
    </Box>
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Desktop Light', () => (
    <Box>
      <Share backTheme="light" shareList={shareDesktop} />
    </Box>
  ), {
    backgrounds: [],
  })
  .add('Mobile', () => (
    <Box>
      <Share shareList={shareMobile} mobile />
    </Box>
  ), {
    backgrounds: [{
      name: 'black', value: 'rgba(0,14,38)', default: true,
    }],
  });
