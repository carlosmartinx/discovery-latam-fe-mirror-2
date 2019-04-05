// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Box, Flex, Link, Image,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Flex)`
  background-color: ${props => get(props, 'theme.colors.tdBackground1', '')};
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  max-width: ${props => get(props, 'theme.breakpoints.3', '1440px')};
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

export const TermsLink = styled(Link)`
  display: inline-block;
  color: ${props => get(props, 'theme.colors.white', '')};
  font-size: calc(${props => get(props, 'theme.fontSizes.0', '')}px - 1px);
  text-decoration: none;
  text-transform: uppercase;

  &:not(:last-child):after {
    content: "/";
    margin-right: 5px;
    margin-left: 5px;
  }
`;
