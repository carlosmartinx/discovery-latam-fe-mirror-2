import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Footer from '.';

const langcodeEs = 'es';
const langcodePt = 'pt';

const mainLogoEs = 'https://drive.google.com/uc?export=view&id=18j3V7Iv5hHSiVN2rS5t1T48kpRM1LaNT';
const mainLogoPt = 'https://drive.google.com/uc?export=view&id=18j3V7Iv5hHSiVN2rS5t1T48kpRM1LaNT';

const mainLinkLogoEs = 'https://www.tudiscovery.com?langcode=es';
const mainLinkLogoPt = 'https://www.tudiscovery.com?langcode=pt';

const termsEs = 'TÉRMINOS Y CONDICIONES POLÍTICA DE PRIVACIDAD';
const termsPt = 'TERMOS E CONDIÇÕES POLÍTICA DE PRIVACIDADE';

const copyrightEs = '© 2018 Discovery Networks International. All rights reserved.';
const copyrightPt = '© 2018 Discovery Networks International. Todos os direitos reservados.';

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
    logo: 'https://drive.google.com/uc?export=view&id=17v4dWVrntS4yQScVYaed-UiOgR5naTRe',
    shortname: 'food',
  },
];

storiesOf('Footer', module)
  .add('in spanish langcode', () => (
    <Footer
      langcode={langcodeEs}
      mainLogo={mainLogoEs}
      mainLinkLogo={mainLinkLogoEs}
      channels={channels}
      terms={termsEs}
      copyright={copyrightEs}
    />
  ))

  .add('in portuguese langcode', () => (
    <Footer
      langcode={langcodePt}
      mainLogo={mainLogoPt}
      mainLinkLogo={mainLinkLogoPt}
      channels={channels}
      terms={termsPt}
      copyright={copyrightPt}
    />
  ));
