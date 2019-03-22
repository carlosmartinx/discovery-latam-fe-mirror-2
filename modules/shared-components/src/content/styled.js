// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Box, Flex, Link, Image, Text,
} from 'rebass';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import get from 'lodash/get';

// eslint-disable-next-line import/prefer-default-export
export const Root = styled(Flex)`
  background-color: ${props => get(props, 'theme.colors.tdBackground1', '')};
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  max-width: ${props => get(props, 'theme.breakpoints.4', '')};
  margin: 0 auto;
  overflow: hidden;
  max-height: auto;
  text-align: center;
`;

export const Card = styled(Box)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  overflow: hidden;
  color: ${props => get(props, 'theme.colors.white', '')};
  font-size: 12px;
  margin: 0 auto;
  display: inline-block;
  text-align: justify;
  justify-content: justify;
`;

export const LinkWrapper = styled(Link)`
  background-color: transparent;
  color: ${props => get(props, 'theme.colors.white', '')};
  display: block;
  text-decoration: none;
  position: relative;
  display:Flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ImgLogo = styled(Image)`
  background-color: ${props => get(props, 'theme.colors.white', '')};
  filter: invert(100%);
  display: inline-block;
  max-width: 20%;
  max-height: 30px;
  min-width: 157px;
`;

export const ContenLink = styled(Text)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  font-size: 44px;
  line-height: auto;
`;

export const ContenDescription = styled(Text)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  font-size: ${props => get(props, 'theme.fontSizes[2]', '')}px;
  line-height: 24px;
`;
