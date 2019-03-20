import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Root, Card } from './styled';
// eslint-disable-next-line import/named
import { LinkChannel } from './index.channel';

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

const mainLinkLogoEs = 'https://www.tudiscovery.com?langcode=es';
const mainLinkLogoPt = 'https://www.tudiscovery.com?langcode=pt';

const Footer = ({
  langcode, termsEs, termsPt, copyrightEs, copyrightPt,
}) => (
  <Root flexDirection="column">
    <Card alignItems="center">
      <LinkChannel image="https://drive.google.com/uc?export=view&id=18j3V7Iv5hHSiVN2rS5t1T48kpRM1LaNT" link={langcode === 'es' ? mainLinkLogoEs : mainLinkLogoPt} title="Logo" />
    </Card>
    <Card>
      {channels.map((channel, i) => (
        <LinkChannel
          // eslint-disable-next-line
          key={i}
          channels={channels}
          image={channel.logo}
          link={channel.url}
          title={channel.title}
        />
      ))}
    </Card>
    <Card p={1}>
      {langcode === 'es' ? termsEs : termsPt }
    </Card>
    <Card p={1}>
      {langcode === 'es' ? copyrightEs : copyrightPt }
    </Card>
  </Root>
);

Footer.propTypes = {
  langcode: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  termsEs: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  termsPt: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  copyrightEs: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  copyrightPt: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Footer.defaultProps = {
  langcode: 'es',
  termsEs: 'TÉRMINOS Y CONDICIONES POLÍTICA DE PRIVACIDAD',
  termsPt: 'TERMOS E CONDIÇÕES POLÍTICA DE PRIVACIDADE',
  copyrightEs: '© 2018 Discovery Networks International. All rights reserved.',
  copyrightPt: '© 2018 Discovery Networks International. Todos os direitos reservados.',

};


export default Footer;
