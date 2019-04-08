/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { Button as ButtonBase, Flex } from 'rebass';
import get from 'lodash/get';
// eslint-disable-next-line import/prefer-default-export
export const Root = styled(Flex)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '1440px')};
  min-height: 65px;
`;

export const Input = styled.input`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${props => get(props, 'theme.colors.g1', '')};
  text-align: center;
  background-color: transparent;
  text-align: left;
  font-weight: bold;
  font-size: ${props => get(props, 'theme.fontSizes[2]', '16')}px;
  line-height: 24px;
  color: ${props => get(props, 'theme.colors.white', '')};
  
  &:focus {
    outline: 0;
  }
`;

export const Button = styled(ButtonBase)`
  background-color: transparent;
  filter: invert(100%);
  padding: 0;

  &:focus {
    outline: 0;
  }
`;
