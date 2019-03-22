/* eslint-disable */
import React from 'react';
import { Flex, Text } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const WrapperSponsor = styled(Flex)`
  color: ${props => get(props, 'theme.colors.w2', '')};
  position: absolute;
  left: 0;
  top: 0;
`;

export const Line = styled.span`
  background: ${props => get(props, 'theme.colors.w2', '')};
  display: inline-block;
  height: 50px;
  width: 2px;
`;

export const SponsorText = styled(Text)`
  font-size: 11px;
`;

export const BoxSponsor = styled(Flex)`
  position: absolute;
  right: 0;
  top: 0;
`;
