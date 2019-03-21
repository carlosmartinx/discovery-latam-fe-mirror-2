import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Root, Card } from './styled';
// eslint-disable-next-line import/named
import { LinkChannel } from './index.channel';

const Footer = ({
  langcode, termsEs, termsPt, copyrightEs, copyrightPt, mainLinkLogoEs, mainLinkLogoPt, channels,
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
  mainLinkLogoEs: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  mainLinkLogoPt: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  channels: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    shortname: PropTypes.string.isRequired,
  })),
};

Footer.defaultProps = {
  langcode: 'es',
  termsEs: 'TÉRMINOS Y CONDICIONES POLÍTICA DE PRIVACIDAD',
  termsPt: 'TERMOS E CONDIÇÕES POLÍTICA DE PRIVACIDADE',
  copyrightEs: '© 2018 Discovery Networks International. All rights reserved.',
  copyrightPt: '© 2018 Discovery Networks International. Todos os direitos reservados.',
  mainLinkLogoEs: 'https://www.tudiscovery.com?langcode=es',
  mainLinkLogoPt: 'https://www.tudiscovery.com?langcode=pt',
};

export default Footer;
