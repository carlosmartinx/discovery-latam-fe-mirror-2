import { Text, Box, Button, Flex } from "rebass";
import styled from "styled-components";
import get from 'lodash/get';

export const Root = styled(Box)`
  background: ${props => get(props, 'theme.colors.tdBlueGray', '#d6dbda')};
  bottom: 0;
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-style: italic;
  font-weight: 400;
  left: 0;
  margin: auto;
  max-width: 1440px;
  padding: 8px 16px;
  position: fixed;
  right: 0;
`;

export const Inner = styled(Box)`
  margin: 0 auto;
  max-width: 1038px;
`;

export const Content = styled(Text)`
  color: black;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
  max-width: 826px;
  & a {
    color: #000;
  }
`;

export const Accept = styled(Button)`
  background: ${props => get(props, 'theme.colors.tdBlueGray', '#00255b')};
  border-radius: 0;
  cursor: pointer;
  text-transform: uppercase;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
`;

export const Check = styled(Flex)`
  font-size: 12px;
`;

export const CookieA = styled.a`
  color: black;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
  max-width: 826px;
  & a {
    color: #000;
  }
`;


export const Label = styled(Text)`
  display: inline-block;
  font-size: 12px;
  line-height: 20px;
  padding-left: 32px;
  position: relative;
  vertical-align: middle;
`;


export const Icon = styled.svg`
  fill: none;
  stroke: white;
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
  background: white;
  position: absolute;
  pointer-events: none;
  left: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  transition: all 150ms;
  ${Icon} {
    stroke: ${props => (props.checked ? 'black' : '#efefef')}
  }
`;