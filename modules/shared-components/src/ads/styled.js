import {
  Flex, Text,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${props => get(props, 'theme.fonts.sans', '')};

  &.ads-dark {
    background-color: ${props => get(props, 'theme.colors.adsDark', '')};
    color: ${props => get(props, 'theme.colors.white', '')};
  }

  &.ads-light {
    background-color: ${props => get(props, 'theme.colors.white', '')};
    color: ${props => get(props, 'theme.colors.black', '')};
  }
`;

export const Title = styled(Text)`
  font-size: calc(${props => get(props, 'theme.fontSizes.0', '')}px - 1px);
  margin-bottom: 7px;
`;
