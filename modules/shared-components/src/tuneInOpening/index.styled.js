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
  text-transform: uppercase;
  line-height: 32px;
`;
