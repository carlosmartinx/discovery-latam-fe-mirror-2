import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Root, Card, LinkWrapper, ImgLogo, TermsLink } from './styled';
import { ChannelList } from '../ChannelList';

const Footer = ({
  terms, copyright, mainLinkLogo, channels,
}) => (
  <Root flexDirection="column" p={4}>
    <Card alignItems="center">
    <LinkWrapper href={mainLinkLogo} target="_blank">
      <ImgLogo src="https://dev-discoverylatam.pantheonsite.io/sites/default/files/logos/tu_discovery.png" link={mainLinkLogo} title="Logo" mx="auto" />
    </LinkWrapper>
    </Card>
    <ChannelList
      channels={channels}
      py={4}
    />
    <Card p={1}>
      {terms.map((term, i) => (
        <TermsLink href={term.url} key={i}>{term.text}</TermsLink>
      ))}
    </Card>
    <Card p={1}>
      {copyright}
    </Card>
  </Root>
);

Footer.propTypes = {
  langcode: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  terms: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
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
  copyright: '© 2018 Discovery Networks International. All rights reserved.',
  mainLinkLogo: 'https://www.tudiscovery.com?langcode=pt',
};

export default Footer;
