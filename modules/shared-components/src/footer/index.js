import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Root, Card } from './styled';
// eslint-disable-next-line import/named
import { LinkChannel } from './index.channel';

const Footer = ({
  terms, copyright, mainLinkLogo, channels,
}) => (
  <Root flexDirection="column">
    <Card alignItems="center">
      <LinkChannel image="https://drive.google.com/uc?export=view&id=18j3V7Iv5hHSiVN2rS5t1T48kpRM1LaNT" link={mainLinkLogo} title="Logo" />
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
      {terms}
    </Card>
    <Card p={1}>
      {copyright}
    </Card>
  </Root>
);

Footer.propTypes = {
  langcode: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  terms: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  copyright: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  mainLinkLogo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  channels: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    shortname: PropTypes.string.isRequired,
  })),
};

Footer.defaultProps = {
  langcode: 'es',
  terms: 'TÉRMINOS Y CONDICIONES POLÍTICA DE PRIVACIDAD',
  termsPt: 'TERMOS E CONDIÇÕES POLÍTICA DE PRIVACIDADE',
  copyright: '© 2018 Discovery Networks International. All rights reserved.',
  mainLinkLogo: 'https://www.tudiscovery.com?langcode=pt',
};

export default Footer;
