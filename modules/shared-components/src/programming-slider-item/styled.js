import { Box, Text } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Item = styled(Box)`
  background-color: ${props => get(props, 'theme.colors.tdBackground1', '')};
  color: ${props => get(props, 'theme.colors.white', '')};
  text-align: center;
  &.active {
    background-color: ${props => get(props, 'theme.colors.dSecondary', '')};
  }
`;

export const Day = styled(Text)`
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Date = styled(Text)`
  font-weight: 300;
  line-height: 20px;
  color: ${props => get(props, 'theme.colors.w3', '')};
`;
