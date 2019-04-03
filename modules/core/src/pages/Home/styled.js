import styled from 'styled-components';
import get from 'lodash/get';
import { Heading as HeadingBase, Box } from 'rebass';

export const Heading = styled(HeadingBase)`
  font-size: 30px;
  &:hover {
    background-color: ${props => get(props, 'theme.colors.lightgray', '')}
  }
`;

export const BoxBase = styled(Box)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '1440px')};
  margin: 0 auto;
  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '768px')}) {
    padding: 0 ${props => get(props, 'theme.space[2]', '16')}px;
  }
`;
