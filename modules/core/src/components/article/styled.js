import {
  Flex, Card, Text,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Flex)`
  flex-wrap: wrap;
  margin: 0 auto;
  color: ${props => get(props, 'theme.colors.black', '')};
`;

export const DescCard = styled(Card)`
  display: block;
`;

export const Title = styled(Text)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-size: ${props => get(props, 'theme.fontSizes.7', '')}px;
  font-weight: bold;

  @media (min-width: ${props => get(props, 'theme.breakpoints[1]', '')}) {
    font-size: ${props => get(props, 'theme.fontSizes.8', '')}px;
  }
`;
