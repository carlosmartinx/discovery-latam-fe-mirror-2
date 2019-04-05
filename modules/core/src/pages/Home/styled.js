import styled from 'styled-components';
import get from 'lodash/get';
import { Heading as HeadingBase, Box } from 'rebass';

export const Heading = styled(HeadingBase)`
  font-size: 30px;
  &:hover {
    background-color: ${props => get(props, 'theme.colors.lightgray', '')}
  }
`;

export const BoxTest = styled(Box)`
`;
