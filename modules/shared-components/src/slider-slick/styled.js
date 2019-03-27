import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

export const BoxSlider = styled(Box)`
  .slick-prev {
    background-image: url(${props => get(props, 'theme.icons.slidearrowleftfilled', '')});
    left: 0;
    z-index: 99;
    &:hover, &:focus {
      background-image: url(${props => get(props, 'theme.icons.slidearrowleftfilled', '')});
    }
  }
  .slick-next {
    background-image: url(${props => get(props, 'theme.icons.slidearrowrightfilled', '')});
    right: 0;
    &:hover, &:focus {
      background-image: url(${props => get(props, 'theme.icons.slidearrowrightfilled', '')});
    }
  }
  .slick-prev, .slick-next {
    background-repeat: no-repeat;
    &.slick-disabled {
      opacity: 0;
    }
    &:before {
      display: none;
    }
    &:hover, &:focus {
      background-repeat: no-repeat;
    }
  }
`;
