import styled from 'styled-components';
import get from 'lodash/get';
import { Box, Flex } from 'rebass';


export const BoxBase = styled(Box)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
`;

export const HeadlineWrapper = styled(Flex)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  padding-bottom: ${props => get(props, 'theme.space[3]', '')}px; 
`;
