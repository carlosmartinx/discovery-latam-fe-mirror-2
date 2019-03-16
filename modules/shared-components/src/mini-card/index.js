/* eslint-disable */
import React from 'react';
import { Flex, Box, Link, Image, Heading } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const Card = styled(Box)`
  background: ${props => get(props, 'theme.colors.white', '')};
  border-radius: 8px;
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-weight: 600;
  overflow: hidden;
`
const LinkWrapper = styled(Link)`
  color: #00255B;
  display: block;
  text-decoration: none;
  position: relative;
`
const LinkOptions = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  color: ${props => get(props, 'theme.colors.w3', '')};
  cursor: pointer;
  font-size: 21px;
  font-weight: bold;
  padding: 0;
  transform: rotate(-90deg);
  width: 24px;
`
const ImgLogo = styled(Image)`
  display: block;
  height: 90px;
  width: 90px;
`
const TextNav = styled(Heading)`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
`

const MiniCard = ({ logo, title = 'text', link = '/', onClick }) => (
  <div>
    <Card>
      <Flex flexDirection="column" p={1}>
        <LinkOptions>...</LinkOptions>
        <LinkWrapper href={link}>
          <ImgLogo src={logo} mx='auto' />
          <TextNav my={1} w={[1]}>{title}</TextNav>
        </LinkWrapper>
      </Flex>
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
