/* eslint-disable */
import { Box, Flex, Heading } from "rebass";
import styled from "styled-components";
import get from 'lodash/get';

export const Root = styled(Flex)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  text-transform: uppercase;
  line-height: 32px;
  margin: 0 auto;
  max-width: 1440px;
`;

export const Headline = styled(Heading)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  color: ${props => get(props, 'theme.colors.w3', '')};
  text-transform: uppercase;
  line-height: 32px;
`;

export const Bullet = styled(Box)`
  background: ${props => get(props, 'theme.colors.tdBlueGray', '')};
  height: 16px;
  width: 24px;
`;
