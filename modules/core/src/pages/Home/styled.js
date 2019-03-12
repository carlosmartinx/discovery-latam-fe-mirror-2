import React from 'react';
import styled from 'styled-components';
import { Heading as HeadingBase, Box } from 'rebass';

export const Heading = styled(HeadingBase)`
  font-size: 30px;
  &:hover {
    background-color: ${props => props.theme.colors.lightgray};
  }
`;

export const BoxBase = props => <Box {...props} css={{ display: 'flex' }} />;
