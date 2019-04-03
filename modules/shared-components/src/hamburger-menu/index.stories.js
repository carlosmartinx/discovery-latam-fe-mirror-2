import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'rebass';

import Menu from '.';

const data = [
  {
    title: 'Discovery',
    url: '/discovery',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/2018-12/Discovery-Logo-white.png',
    shortname: 'discovery',
    id_channel: 'discovery',
    series: [],
  },
  {
    title: 'Animal Planet',
    url: '/animal-planet',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/logos/ANIMAL-PLANET-Logo-white_0.png',
    shortname: 'animal-planet',
    id_channel: 'animalPlanet',
    series: [
      {
        title: 'Los Irwin',
        url: '/animal-planet/los-irwin',
      },
      {
        title: 'Con el agua al cuello',
        url: '/animal-planet/con-el-agua-al-cuello-0',
      },
      {
        title: 'Dr. Jeff, Veterinario',
        url: '/animal-planet/dr-jeff-veterinario',
      },
      {
        title: 'El lugar más peligroso',
        url: '/animal-planet/el-lugar-mas-peligroso',
      },
      {
        title: 'Entre perros y gatos',
        url: '/animal-planet/entre-perros-y-gatos',
      },
      {
        title: 'Kilos de mascotas',
        url: '/animal-planet/kilos-de-mascotas',
      },
      {
        title: 'Mansiones en los árboles',
        url: '/animal-planet/mansiones-en-los-arboles',
      },
      {
        title: 'Mi gato endemoniado',
        url: '/animal-planet/mi-gato-endemoniado',
      },
      {
        title: 'Ríos de África',
        url: '/animal-planet/rios-de-africa',
      },
      {
        title: 'Supertiernos',
        url: '/animal-planet/supertiernos',
      },
      {
        title: 'The Dodo: En busca de héroes',
        url: '/animal-planet/dodo-en-busca-de-heroes',
      },
      {
        title: 'Wild Frank en México',
        url: '/animal-planet/wild-frank-en-mexico',
      },
    ],
  },
  {
    title: 'Kids',
    url: 'https://www.discoverykidsplay.com/',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/2018-12/DKIDS-Logo-white_0.png',
    shortname: 'www.discoverykidsplay.com',
    id_channel: 'kids',
  },
  {
    title: 'DiscoveryHH',
    url: '/discoveryhh',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/2018-12/HH-Logo-white.png',
    shortname: 'discoveryhh',
    id_channel: 'discoveryhh',
  },
  {
    title: 'Turbo',
    url: '/turbo',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/2018-12/TURBO-Logo-white_0.png',
    shortname: 'turbo',
    id_channel: 'turbo',
  },
  {
    title: 'Science',
    url: '/science',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/2018-11/DScience.png',
    shortname: 'science',
    id_channel: 'science',
  },
  {
    title: 'ID',
    url: '/id',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/2018-12/ID-Logo-white.png',
    shortname: 'id',
    id_channel: 'id',
    series: [
      {
        title: 'Asesinatos en familia',
        url: '/id/asesinatos-en-familia',
      },
      {
        title: 'Cuando el mal se disfraza',
        url: '/id/cuando-el-mal-se-disfraza',
      },
      {
        title: 'El caso de Jodi Arias',
        url: '/id/el-caso-de-jodi-arias',
      },
      {
        title: 'Instinto criminal',
        url: '/id/instinto-criminal',
      },
      {
        title: 'Misterio en los titulares',
        url: '/id/misterio-en-los-titulares',
      },
      {
        title: 'Perfecto Mentiroso',
        url: '/id/perfecto-mentiroso',
      },
      {
        title: 'Presuntos inocentes',
        url: '/id/presuntos-inocentes',
      },
      {
        title: 'Red de mentiras',
        url: '/id/red-de-mentiras',
      },
      {
        title: 'Secretos enterrados',
        url: '/id/secretos-enterrados',
      },
      {
        title: 'Silencio mortal',
        url: '/id/silencio-mortal',
      },
    ],
  },
  {
    title: 'TLC',
    url: '/tlc',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/2018-12/TLC-Logo-white_0.png',
    shortname: 'tlc',
    id_channel: 'tlc',
    series: [
      {
        title: 'La médium',
        url: '/tlc/la-medium',
      },
      {
        title: 'Madres adolescentes',
        url: '/tlc/madres-adolescentes',
      },
      {
        title: 'Retatuadores',
        url: '/tlc/retatuadores',
      },
      {
        title: 'Soy Jazz',
        url: '/tlc/soy-jazz',
      },
    ],
  },
];

const itemMenu = [
  {
    title: 'TLC',
    url: '/tlc',
    logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/2018-12/TLC-Logo-white_0.png',
    shortname: 'tlc',
    id_channel: 'tlc',
  },
];

storiesOf('Menu', module)
  .add('with 6 items', () => <Box width="414px"><Menu channels={data} /></Box>)
  .add('with 1 item', () => <Box width="320px"><Menu channels={itemMenu} /></Box>);
