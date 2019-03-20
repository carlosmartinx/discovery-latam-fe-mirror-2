import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Card, LinkWrapper, ImgLogo } from './styled';

// eslint-disable-next-line import/prefer-default-export
export const LinkChannel = ({
  logo = '',
  link = '/',
  title = '',
}) => (
  <Card p={[1, 2, 3, 4]}>
    <LinkWrapper href={link} title={title}>
      <ImgLogo src={logo} mx="auto" target="_blank" />
    </LinkWrapper>
  </Card>
);

LinkChannel.propTypes = {
  logo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
