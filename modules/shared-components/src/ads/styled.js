import {
  Flex, Text, Box,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  padding: 16px;

  &.ads-dark {
    background-color: ${props => get(props, 'theme.colors.adsDark', '')};
    color: ${props => get(props, 'theme.colors.white', '')};
  }

  &.ads-light {
    background-color: ${props => get(props, 'theme.colors.white', '')};
    color: ${props => get(props, 'theme.colors.black', '')};
  }

  &.ad-height {
    height: 100%;
    margin: auto;
  }
`;

export const Title = styled(Text)`
  font-size: calc(${props => get(props, 'theme.fontSizes.0', '')}px - 1px);
  margin-bottom: 7px;
`;

export const LazyBox = styled(Box)`
  background-color: ${props => get(props, 'theme.colors.lazyBox', '')};
  width: 100%;
  height: 100%;
  display: block;
`;

export const DfpBox = styled(Box)`
  position: relative;
`;
