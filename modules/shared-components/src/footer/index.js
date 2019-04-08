import React from 'react';
import PropTypes from 'prop-types';
import {
  Root, Card, LinkWrapper, ImgLogo, TermsLink,
} from './styled';
import ChannelList from '../channel-list';

const Footer = ({
  terms, copyright, mainLinkLogo, channels, discoveryLogo,
}) => (
  <Root flexDirection="column" p={4} m="auto">
    <Card alignItems="center">
      <LinkWrapper href={mainLinkLogo} target="_blank">
        <ImgLogo src={discoveryLogo} alt="Discovery" mx="auto" />
      </LinkWrapper>
    </Card>
    <ChannelList
      channels={channels}
      py={4}
    />
    <Card p={1}>
      {terms.map(term => (
        <TermsLink href={term.url}>{term.text}</TermsLink>
      ))}
    </Card>
    <Card p={1}>
      {copyright}
    </Card>
  </Root>
);

Footer.propTypes = {
  terms: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  discoveryLogo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  copyright: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  mainLinkLogo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  channels: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    shortname: PropTypes.string.isRequired,
  })).isRequired,
};

Footer.defaultProps = {
  copyright: '© 2018 Discovery Networks International. All rights reserved.',
  mainLinkLogo: 'https://www.tudiscovery.com',
  discoveryLogo: 'https://dev-discoverylatam.pantheonsite.io/sites/default/files/logos/tu_discovery.png',
};

export default Footer;
