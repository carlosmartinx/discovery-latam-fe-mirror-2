import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Card, LinkWrapper, ImgLogo } from './styled';

export const LinkChannel = ({
  channels,
  image,
  link,
  title,
}) => (
  <Card p={[1, 2, 3, 4]}>
    <LinkWrapper href={link} title={title} channels={channels}>
      <ImgLogo src={image} link={link} title="Discovery" mx="auto" target="_blank" />
    </LinkWrapper>
  </Card>
);

LinkChannel.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    shortname: PropTypes.string.isRequired,
  })).isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};

LinkChannel.defaultProps = {
  image: '',
  link: '/',
  title: '',
};

export default LinkChannel;
