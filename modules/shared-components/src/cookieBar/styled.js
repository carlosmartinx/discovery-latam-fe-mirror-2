/* eslint-disable */
import React from 'react';
import { Text, Box, Button, Flex } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Box)`
  background: ${props => get(props, 'theme.colors.tdBlueGray', '')};
  bottom: 0;
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-style: italic;
  left: 0;
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  position: fixed;
  right: 0;
`;

export const Inner = styled(Flex)`
  justify-content: space-between;

  & p {
    margin: ${props => get(props, 'theme.space.0', '')}px;
  }
`;

export const Content = styled(Text)`
  color: ${props => get(props, 'theme.colors.black', '')};
  font-size: ${props => get(props, 'theme.fontSizes[0]', '')}px;
  line-height: 20px;

  & a {
    color: ${props => get(props, 'theme.colors.black', '')};
  }
`;

export const Accept = styled(Button)`
  align-self: center;
  background: ${props => get(props, 'theme.colors.dSecondary', '')};
  border-radius: 0;
  cursor: pointer;
  line-height:24px;
  text-transform: uppercase;
  transition: all .2s ease-out;
  &:disabled {
    background: ${props => get(props, 'theme.colors.g3', '')};
    cursor: not-allowed;
  }
  &:disabled:hover {
    background: ${props => get(props, 'theme.colors.g3', '')};
    color: ${props => get(props, 'theme.colors.white', '')};
  }
  &:hover {
    background: ${props => get(props, 'theme.colors.white', '')};
    color: ${props => get(props, 'theme.colors.g3', '')};
  }
  &:focus {
    outline: none;
  }
`;

export const Check = styled(Flex)`
  font-size: ${props => get(props, 'theme.fontSizes[0]', '')}px;
`;

export const CookieA = styled.a`
  color: ${props => get(props, 'theme.colors.black', '')};
  line-height: 20px;
  margin: 0;
`;

export const Label = styled(Text)`
  display: inline-block;
  line-height: 20px;
  position: relative;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${props => get(props, 'theme.colors.white', '')};
  stroke-width: 2px;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 24px;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 24px;
`;

export const Checkmark = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => get(props, 'theme.colors.white', '')};
  position: absolute;
  pointer-events: none;
  left: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  transition: all 150ms;
  ${Icon} {
    stroke: ${props => (props.checked ? 'black' : 'white')}
  }
`;
