/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import ArticleImage from '.';

const image = {
  image_file: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg',
  image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacado_articulo/public/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg?itok=HHNA3Oyc',
  image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacado_articulo_mobile/public/2018-11/son_adictivos_los_tatuajes_imagen_1.jpg?itok=aBKuAD8J',
  image_alt: '¿Son adictivos los tatuajes?',
  image_title: 'Para algunos, hacerse un tatuaje es todo un evento.',
}

storiesOf('ArticleImage', module)
  .addDecorator(withKnobs)
  .add('Dark Theme Default', () => 
    <ArticleImage imageData={image} />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  );
