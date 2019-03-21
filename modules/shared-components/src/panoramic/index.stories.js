/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Panoramic from '.';
import { withKnobs } from '@storybook/addon-knobs';

const sliders = [
  {
    sponsor: [
      {
        logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Bitmap%20Copy.svg',
        url: '/milo',
      },
      {
        logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Rectangle.svg',
        url: '/champsquad',
      },
    ],
    channel: {
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
      name: 'DiscoveryHH',
      url: '/discoveryhh',
    },
    description: 'Buddy muestra cómo decorar un pastel de boda de tres pisos y propone un desafío que exigirá mucha técnica y concentración de los participantes.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2D74D45B700F407CA2918A1BF052F8DA.jpg?itok=o1IS0wIE',
      image_alt: '45 minutos para decorar un pastel de boda',
      image_file: '2D74D45B700F407CA2918A1BF052F8DA.jpg',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider/public/2D74D45B700F407CA2918A1BF052F8DA.jpg?itok=COusl5XD',
    },
    region: ['Latam'],
    title: '45 minutos para decorar un pastel de boda',
    type: 'video',
    url: '/discoveryhh/el-desafio-de-buddy/video/45-minutos-para-decorar-un-pastel-de-boda',
  },
  {
    sponsor: [
      {
        logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Bitmap%20Copy.svg',
        url: '/milo',
      },
      {
        logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Rectangle.svg',
        url: '/champsquad',
      },
    ],
    channel: {
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/id.svg',
      name: 'ID',
      url: '/id',
    },
    description: 'Después de 23 años, el asesino en serie que intentó matar a Enietra Washington fue arrestado.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/414B052D03C64CECB54E0B0A2C767015.jpg?itok=9Xlkqfjg',
      image_alt: 'Asesino en serie queda libre por 23 años',
      image_file: '414B052D03C64CECB54E0B0A2C767015.jpg',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider/public/414B052D03C64CECB54E0B0A2C767015.jpg?itok=ATYAFeiS',
    },
    region: ['Latam'],
    title: 'Asesino en serie queda libre por 23 años',
    type: 'video',
    url: '/id/revista-people-investiga/video/asesino-en-serie-queda-libre-por-23-anos',
  },
  {
    sponsor: [
      {
        logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Bitmap%20Copy.svg',
        url: '/milo',
      },
      {
        logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Rectangle.svg',
        url: '/champsquad',
      },
    ],
    channel: {
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/ap.svg',
      name: 'Animal Planet',
      url: '/animal-planet',
    },
    description: 'En su viaje por México, Frank descubre y persigue varios animales que encuentra en el camino. ¡Míralo en acción!',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/3454FE10C2AE43C59199A1F287C7C115.jpg?itok=gOWVp7b0',
      image_alt: 'Aventuras con Wild Frank: Correteando animales en las ruinas',
      image_file: '3454FE10C2AE43C59199A1F287C7C115.jpg',
      image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider/public/3454FE10C2AE43C59199A1F287C7C115.jpg?itok=KIa0yH2q',
    },
    region: ['Latam'],
    title: 'Aventuras con Wild Frank: Correteando animales en las ruinas',
    type: 'video',
    url: '/animal-planet/wild-frank-en-mexico/video/aventuras-con-wild-frank-correteando-animales-en-las',
  },
];

storiesOf('BulletTile', module)
  .addDecorator(withKnobs)
  .add('Slider Langcode es', () =>
    <Panoramic langcode='es' sliders={sliders} />, {
      backgrounds: [{
        name: 'black', value: 'rgba(0,14,38)', default: true
      }]
    }
  )
  .add('Slider Langcode pt', () =>
    <Panoramic langcode='pt' sliders={sliders} />, {
      backgrounds: [],
    }
  )
