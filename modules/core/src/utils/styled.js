import styled from 'styled-components';
import get from 'lodash/get';
import { Box } from 'rebass';

export const BoxBase = styled(Box)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '1440px')};
  margin: 0 auto;
  padding-left: ${props => get(props, 'theme.space[11]', '96px')};
  padding-right: ${props => get(props, 'theme.space[11]', '96px')};
  @media (max-width: ${props => get(props, 'theme.breakpoints.2', '768px')}) {
    padding: 0 ${props => get(props, 'theme.space[2]', '16')}px;
  }
`;

export const Test = styled(Box)`
`;
