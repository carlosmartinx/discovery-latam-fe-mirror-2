/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Box, Link, Image } from 'rebass';

const Card = styled(Box)`
  background: ${props => get(props, 'theme.colors.white', '')};
  height: 155px;
`
const LinkWrapper = styled(Link)`
  display: block;
`
const imgLogo = styled(Image)`
  background: ${props => get(props, 'theme.colors.g3', '')};
  display: block;
`
const title = styled.p`
  font-weight: 700;
  text-transform: uppercase;
`

const MiniCard = ({ logo = 'src', title, link = '/', onClick }) => (
  <div>
    <Card border-radius={8}>
      <LinkWrapper href={link}>
        <imgLogo borderRadius={7} src={logo}></imgLogo>
        <title>{title}</title>
      </LinkWrapper>
    </Card>
  </div>
);

MiniCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default MiniCard;
