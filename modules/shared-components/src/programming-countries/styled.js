import { Box } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Countries = styled(Box)`
  text-align: right;
`;
export const Country = styled(Box)`
  border-left: 1px solid ${props => get(props, 'theme.colors.w3', '')};
  padding: 6px 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  display: inline;
  color: ${props => get(props, 'theme.colors.w3', '')};
  &.active {
    color: ${props => get(props, 'theme.colors.white', '')};
  }
`;
