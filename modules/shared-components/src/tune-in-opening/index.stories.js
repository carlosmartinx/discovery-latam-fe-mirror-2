import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';
import get from 'lodash/get';
import TuneInOpening from '.';
import samplevideo from './samplevideo.mp4';
import sampleimage from './sampleimage.jpg';

import Facebook from '../../icons/facebook.svg';
import Twitter from '../../icons/twitter.svg';
import Email from '../../icons/email.svg';

const shareData = [
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


const videoURL = 'https://www.tudiscovery.com/id/madrastras-malignas/video/como-convencer-un-extrano-de-matar-tu-marido';


storiesOf('Tune In Opening', module)
  .addDecorator(withKnobs)
  .add('Tune In Opening Video', () => (
    <TuneInOpening
      background="video"
      videoURL={samplevideo}
      channelLogo="https://cdn.admin-discoverybrasil.com/sites/default/files/logos/turbo.svg"
      videoLink={videoURL}
      label="Label 12"
      duration="30:30"
      headline="Título"
      headline2="segunda línea"
      schedule="Consulta toda la programación"
      scheduleLink="#"
      buttonText="Ver video"
      channelName="turbo"
      shareList={shareData}
      hashtag="#hashtag"
    />
  ), {
  })
  .add('Tune In Opening Image', () => (
    <TuneInOpening
      background="image"
      imageSRC={sampleimage}
      channelLogo="https://cdn.admin-discoverybrasil.com/sites/default/files/logos/hh.svg"
      channelName="hh"
      headline="One line"
      headline2=""
      scheduleLink="#"
      hashtag="#hashtag2"
      shareList={shareData}
    />
  ), {
  });
