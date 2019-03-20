/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'rebass';

import Menu from '.';

const data = [
  {
    'title': 'Discovery',
    'url': '/discovery',
    'logo': 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/id.svg',
    'shortname': 'discovery',
    'series': [
      {
        'title': 'Alaska: Hombres primitivos',
        'url': '/discovery/alaska-hombres-primitivos',
      },
      {
        'title': 'Archivo de lo inexplicable',
        'url': '/discovery/archivo-de-lo-inexplicable',
      },
      {
        'title': 'Carreras Prohibidas',
        'url': '/discovery/carreras-prohibidas',
      },
      {
        'title': 'Control de fronteras: España',
        'url': '/discovery/control-de-fronteras-espana',
      },
      {
        'title': 'Desafío x 2',
        'url': '/discovery/desafio-x-2',
      },
      {
        'title': 'Diesel Dave',
        'url': '/discovery/diesel-dave',
      },
      {
        'title': 'Ed Stafford al extremo',
        'url': '/discovery/ed-stafford-al-extremo',
      },
      {
        'title': 'El dúo mecánico',
        'url': '/discovery/el-duo-mecanico',
      },
      {
        'title': 'En la Isla con Bear Grylls',
        'url': '/discovery/en-la-isla-con-bear-grylls',
      },
      {
        'title': 'Encierro paranormal',
        'url': '/discovery/encierro-paranormal',
      },
      {
        'title': 'Fiebre de oro',
        'url': '/discovery/fiebre-de-oro',
      },
      {
        'title': 'Hombres del ártico',
        'url': '/discovery/hombres-del-artico',
      },
      {
        'title': 'Joyas en extinción',
        'url': '/discovery/joyas-en-extincion',
      },
      {
        'title': 'Joyas sobre ruedas',
        'url': '/discovery/joyas-sobre-ruedas',
      },
      {
        'title': 'Kilos mortales',
        'url': '/discovery/kilos-mortales',
      },
      {
        'title': 'La liga de la supervivencia',
        'url': '/discovery/la-liga-de-la-supervivencia',
      },
      {
        'title': 'Locolab',
        'url': '/discovery/locolab',
      },
      {
        'title': 'Mexicánicos',
        'url': '/discovery/mexicanicos',
      },
      {
        'title': 'Mi cuerpo, mi desafío',
        'url': '/discovery/mi-cuerpo-mi-desafio',
      },
      {
        'title': 'Mosquito',
        'url': '/discovery/mosquito',
      },
    ],
  },
  {
    'title': 'Animal Planet',
    'url': '/animal-planet',
    'logo': 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/nap.svg',
    'shortname': 'animal-planet',
    'series': [
      {
        'title': 'Los Irwin',
        'url': '/animal-planet/los-irwin',
      },
      {
        'title': 'Con el agua al cuello',
        'url': '/animal-planet/con-el-agua-al-cuello-0',
      },
      {
        'title': 'Dr. Jeff, Veterinario',
        'url': '/animal-planet/dr-jeff-veterinario',
      },
      {
        'title': 'El lugar más peligroso',
        'url': '/animal-planet/el-lugar-mas-peligroso',
      },
      {
        'title': 'Entre perros y gatos',
        'url': '/animal-planet/entre-perros-y-gatos',
      },
    ],
  },
  {
    'title': 'Discovery',
    'url': '/discovery',
    'logo': 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/id.svg',
    'shortname': 'discovery',
  },
  {
    'title': 'Discovery',
    'url': '/discovery',
    'logo': 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/id.svg',
    'shortname': 'discovery',
  },
  {
    'title': 'Discovery',
    'url': '/discovery',
    'logo': 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/food.svg',
    'shortname': 'discovery',
  },
  {
    'title': 'HOME & HEALTH',
    'url': '/discoveryhh',
    'logo': 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/food.svg',
    'shortname': 'discoveryhh',
  }
];

storiesOf('Menu', module)
  .add('with text', () => <Box width="414px"><Menu channels={data} /></Box>);
