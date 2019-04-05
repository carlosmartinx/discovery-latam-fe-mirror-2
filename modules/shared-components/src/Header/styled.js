/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { Button as ButtonBase, Flex } from 'rebass';
import get from 'lodash/get';
// eslint-disable-next-line import/prefer-default-export
export const Root = styled(Flex)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '1440px')};
`;

export const Input = styled.input`
  width: 96%;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Button = styled(ButtonBase)`
  background-color: transparent;
  filter: invert(100%);
  padding: 0;
`;
