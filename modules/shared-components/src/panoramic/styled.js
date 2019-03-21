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

export const Inner = styled(Flex)`
  justify-content: space-between;
  & p {
    margin: ${props => get(props, 'theme.space.0', '')}px;
  }
`;

export const Card = styled(Box)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  overflow: hidden;
  color: ${props => get(props, 'theme.colors.white', '')};
  font-size: 12px;
  margin: 0 auto;
  display: inline-block;
  text-align: center;
  justify-content: center;
`;

export const LinkWrapper = styled(Link)`
  background-color: transparent;
  color: ${props => get(props, 'theme.colors.white', '')};
  display: block;
  text-decoration: none;
  position: relative;
`;

export const ImgLogo = styled(Image)`
  display: inline-block;
  max-width: 100%;
  max-height: 40px;
`;

export const Content = styled(Text)`
  color: ${props => get(props, 'theme.colors.black', '')};
  font-size: ${props => get(props, 'theme.fontSizes[0]', '')}px;
  line-height: 20px;
  & a {
    color: ${props => get(props, 'theme.colors.black', '')};
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${props => get(props, 'theme.colors.white', '')};
  stroke-width: 2px;
`;

export const Tab = styled(Box)`
    float: left;
`
