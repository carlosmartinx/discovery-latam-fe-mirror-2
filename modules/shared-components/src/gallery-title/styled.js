import { Box, Heading, Text } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Box)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  text-transform: uppercase;
  line-height: 32px;
  margin-bottom: ${props => get(props, 'theme.space[1]', '')}px;
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
`;

export const Headline = styled(Heading)`
  color: ${props => (props.themeColor === 'dark'
    ? get(props, 'theme.colors.white', '')
    : get(props, 'theme.colors.black', ''))};
  line-height: 48px;
  margin-bottom: ${props => get(props, 'theme.space[1]', '')}px;
  text-transform: none;

  @media (min-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
    line-height: 52px;
  }
`;

export const Description = styled(Text)`
  color: ${props => (props.themeColor === 'dark'
    ? get(props, 'theme.colors.white', '')
    : get(props, 'theme.colors.black', ''))};
    line-height: 24px;
    text-transform: none;
`;
