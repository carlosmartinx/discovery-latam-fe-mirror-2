import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '.';

const channels = [
  {
    title: 'Discovery',
    url: 'https://www.tudiscovery.com/discovery',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
    shortname: 'discovery',
  },
  {
    title: 'TLC',
    url: 'https://www.tudiscovery.com/tlc',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TLC-Logo-white_0.png',
    shortname: 'tlc',
  },
  {
    title: 'Turbo',
    url: 'https://www.tudiscovery.com/turbo',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/TURBO-Logo-white_0.png',
    shortname: 'turbo',
  },
  {
    title: 'Science',
    url: 'https://www.tudiscovery.com/science',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-11/DScience.png',
    shortname: 'science',
  },
  {
    title: 'DiscoveryHH',
    url: 'https://www.tudiscovery.com/discoveryhh',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
    shortname: 'discoveryhh',
  },
  {
    title: 'Animal Planet',
    url: 'https://tudiscovery.com/animal-planet',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/ANIMAL-PLANET-Logo-white_0.png',
    shortname: 'animal-planet',
  },
  {
    title: 'Kids',
    url: 'https://www.discoverykidsplay.com/',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/DKIDS-Logo-white_0.png',
    shortname: 'www.discoverykidsplay.com',
  },
  {
    title: 'Food',
    url: 'http://foodnetworklatam.com/',
    logo: 'https://cdn.admin-discoverybrasil.com/sites/default/files/logos/food.svg',
    shortname: 'food',
  },
];

const channelsPt = [
  {
    title: 'Discovery',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/Discovery-Logo-white.png?itok=w5Ja6xYX',
    url: '/discovery',
    shortname: 'discovery',
    id_channel: 'discovery',
  },
  {
    title: 'Animal Planet',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/ANIMAL-PLANET-Logo-white_1.png?itok=eMEkNj5_',
    url: '/animal-planet',
    shortname: 'animal-planet',
    id_channel: 'animalPlanet',
  },
  {
    title: 'Kids',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/2018-12/DKIDS-Logo-white_0.png?itok=T8LyFkU9',
    url: 'https://www.discoverykidsplay.com/',
    shortname: 'www.discoverykidsplay.com',
    id_channel: 'kids',
  },
  {
    title: 'Discovery HH',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/HH-Logo-white.png?itok=WejcFFdB',
    url: '/discoveryhh',
    shortname: 'discoveryhh',
    id_channel: 'discovery-HH',
  },
  {
    title: 'Turbo',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/TURBO-Logo-white_0.png?itok=WoAqldl3',
    url: '/turbo',
    shortname: 'turbo',
    id_channel: 'turbo',
  },
  {
    title: 'TLC',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/2018-12/TLC-Logo-white_0.png?itok=6QyGrDU-',
    url: '/tlc',
    shortname: 'tlc',
    id_channel: 'tlc',
  },
  {
    title: 'ID',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/ID-Logo-white.png?itok=3W3bjlrn',
    url: '/id',
    shortname: 'id',
    id_channel: 'id',
  },
  {
    title: 'Science',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/science_white_0.png?itok=MjXUMDpe',
    url: 'https://www.discoverybrasil.com/programacion/discovery-science',
    shortname: 'discovery-science',
    id_channel: 'science',
  },
  {
    title: 'Discovery Civilization',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/civilization_white_0.png?itok=mMRJpeSd',
    url: 'https://www.discoverybrasil.com/programacion/discovery-civilization',
    shortname: 'discovery-civilization',
    id_channel: 'discoveryCivilization',
  },
  {
    title: 'Discovery Theater',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/theater_white_0.png?itok=N4jEM86b',
    url: 'https://www.discoverybrasil.com/programacion/discovery-hd-theater',
    shortname: 'discovery-hd-theater',
    id_channel: 'discoveryTheater',
  },
  {
    title: 'Discovery World',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/logos/world_2.png?itok=AeOJGY9a',
    url: 'https://www.discoverybrasil.com/programacion/discovery-world',
    shortname: 'discovery-world',
    id_channel: 'discoveryWorld',
  },
  {
    title: 'FOOD',
    logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/logos_footer/public/2018-12/FoodNetwork_LOGO_Blanco_0.png?itok=5gsobGY7',
    url: 'http://foodnetworklatam.com/',
    shortname: 'foodnetworklatam.com',
    id_channel: 'food',
  },
];

const terms = [{
  text: 'Términos y condiciones',
  url: '/',
}, {
  text: 'Política de privacidad',
  url: '/',
}];
const copyright = '© 2018 Discovery Networks International. All rights reserved.';
const mainLinkLogo = 'https://www.tudiscovery.com';
const discoveryLogo = 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/logos/tu_discovery.png';

storiesOf('Footer', module)
  .add('eight icons', () => (
    <Footer
      terms={terms}
      copyright={copyright}
      mainLinkLogo={mainLinkLogo}
      channels={channels}
      discoveryLogo={discoveryLogo}
    />
  ))
  .add('thirteen icons', () => (
    <Footer
      terms={terms}
      copyright={copyright}
      mainLinkLogo={mainLinkLogo}
      channels={channelsPt}
    />
  ));
