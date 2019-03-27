import {
  Box, Link, Image, Flex,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const Card = styled(Box)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  overflow: hidden;
  font-size: ${props => get(props, 'theme.fontSizes.0', '')}px;
`;

export const LinkWrapper = styled(Link)`
  background-color: transparent;
  color: ${props => get(props, 'theme.colors.white', '')};
  display: block;
  text-decoration: none;
  position: relative;
  line-height: 0;
`;

export const ImgLogo = styled(Image)`
  display: inline-block;
  height: 30px;
  max-width: 100px;
`;
