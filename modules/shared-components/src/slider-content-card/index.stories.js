import React from 'react';
import { storiesOf } from '@storybook/react';

import SliderContentCard from '.';

const data = {
  name: 'Milo',
  background_color: '#24A136',
  font_color: '#DEFDEF',
  background_image: {
    image_file: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/logos/logo_discovery_header.png',
    image_url: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/recomendados/public/logos/logo_discovery_header.png?itok=snofP29a',
    image_1_1: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/recomendados_mobile/public/logos/logo_discovery_header.png?itok=CcBOPVoH',
    image_alt: 'Discovery',
    image_title: 'Discovery',
  },
  logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/logos_footer/public/sponsors/logo/civilization_white_0.png?itok=5qsiBQjm',
  circular_logo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/styles/logos_footer/public/sponsors/logo/Group%402x.png?itok=GbFcoHFD',
  logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Bitmap%20Copy.svg',
  secondary_logo_svg: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/sponsors/logo/Rectangle.svg',
  url: 'https://tudiscovery.com/',
};

const items = [
  {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  }, {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    sponsor: data,
    duration: {
      minutes: '1',
      seconds: '55',
    },
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  },
];

const oneItem = [
  {
    title: 'Creando un parque temático para niños',
    region: ['Latam'],
    fecha: '1543597509',
    duration: {
      minutes: '1',
      seconds: '55',
    },
    sponsor: data,
    type: 'video',
    description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
    preview_image: {
      image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
    },
    url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
    categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
    channel: {
      name: 'DiscoveryHH',
      logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
      url: '/discoveryhh',
      codigos: {
        Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
      },
      codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
      logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
    },
  },
];

storiesOf('Slider Content Card Big', module)
  .add('Slider multiple items', () => <SliderContentCard sliderContent={items} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  })
  .add('Slider One Item', () => <SliderContentCard sliderContent={oneItem} />, {
    backgrounds: [{
      name: 'Dark', value: 'rgba(0,14,38)', default: true,
    }],
  });
