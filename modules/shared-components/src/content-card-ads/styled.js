import styled from 'styled-components';
import {
  Flex, Box,
} from 'rebass';
import get from 'lodash/get';

export const Root = styled(Flex)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  position: relative;
  max-width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const ItemsBox = styled(Box)`
  position: relative;
`;
