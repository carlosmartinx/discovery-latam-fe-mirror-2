import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormattedMessage } from 'react-intl';
import { Root, Card } from './styled';
// eslint-disable-next-line import/named
import { LinkChannel } from './index.channel';

const Footer = ({
  mainLogo = 'discovery', mainLinkLogo = 'discovery', channels = [{
    title: 'Discovery', url: '/', logo: 'logo', shortname: 'discovery',
  }],
  terms = 'TÉRMINOS Y CONDICIONES POLÍTICA DE PRIVACIDAD',
  copyright = '© 2018 Discovery Networks International. All rights reserved.',
}) => (
  <Root flexDirection="column">
    <Card alignItems="center">
      <LinkChannel logo={mainLogo} link={mainLinkLogo} title="Discovery" />
    </Card>
    <Card>
      {channels.map((channel, i) => (
        <LinkChannel
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          logo={channel.logo}
          link={channel.url}
          title={channel.title}
        />
      ))}
    </Card>
    <Card p={1}>
      <FormattedMessage id="Footer.Terms" defaultMessage={terms} />
    </Card>
    <Card p={1}>
      <FormattedMessage id="Footer.Copyright" defaultMessage={copyright} />
    </Card>
  </Root>
);

Footer.propTypes = {
  mainLogo: PropTypes.string.isRequired,
  mainLinkLogo: PropTypes.string.isRequired,
  channels: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    shortname: PropTypes.string.isRequired,
  })).isRequired,
  terms: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};

export default Footer;
