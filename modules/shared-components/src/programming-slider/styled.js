import { Box, Text } from "rebass";
import styled from "styled-components";
import get from 'lodash/get';

export const BoxSlider = styled(Box)`
  margin: 0 -4px;
  .slick-next {
  }
  .slick-prev {
    z-index: 99;
  }
  .slick-prev, .slick-next {
    background-size: 48px 48px;
    width: 48px;
    height: 48px;
    &:hover, &:focus {
      background-size: 48px 48px;
      width: 48px;
      height: 48px;
    }
  }
`

export const Tab = styled(Box)`
  padding: 0 4px;
  cursor: pointer;
  color: ${props => get(props, 'theme.colors.white', '')};
  text-align: center;
`

export const Day = styled(Text)`
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
`

export const Date = styled(Text)`
    font-weight: 300;
    line-height: 20px;
    color: ${props => get(props, 'theme.colors.w3', '')};
`
