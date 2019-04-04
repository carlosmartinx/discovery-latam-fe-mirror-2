/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { Button as ButtonBase } from 'rebass';
// eslint-disable-next-line import/prefer-default-export
export const Input = styled.input`
  width: 96%;
  /* transition: width 2s; */
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
