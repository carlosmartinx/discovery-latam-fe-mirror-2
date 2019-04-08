/* eslint-disable */
import React from 'react';
import { Box, Flex, Heading } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const Root = styled(Flex)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  text-transform: uppercase;
  line-height: 32px;
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};

  & .animal-planet {
    background: ${props => get(props, 'theme.colors.animalPlanet', '')};
  }

  & .turbo {
    background: ${props => get(props, 'theme.colors.turbo', '')};
  }

  & .sience {
    background: ${props => get(props, 'theme.colors.science', '')};
  }

  & .id {
    background: ${props => get(props, 'theme.colors.id', '')};
  }

  & .tlc {
    background: ${props => get(props, 'theme.colors.tlc', '')};
  }

  & .food {
    background: ${props => get(props, 'theme.colors.food', '')};
  }

  & .kids {
    background: ${props => get(props, 'theme.colors.kids', '')};
  }

  & .discoveryhh {
    background: ${props => get(props, 'theme.colors.discoveryhh', '')};
  }
`;

export const Headline = styled(Heading)`
  color: ${props => props.themeColor === "dark" ? 
    props => get(props, 'theme.colors.white', '') : 
    props => get(props, 'theme.colors.black', '')};
  text-transform: uppercase;
  line-height: 32px;
`;

export const Bullet = styled(Box)`
  background: ${props => props.barcolor === "default" ? 
  props => get(props, 'theme.colors.dPrimary', '') : 
  props => props.barcolor};
  height: 16px;
  width: 24px;
`;
