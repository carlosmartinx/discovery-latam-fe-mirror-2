import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';
import {
  Root,
  ContentWrapper,
  Title,
  ChannelSVG,
  ImageWrapper,
  Description,
} from '../content-card/styled';

export const BaseCarousel = styled(Box)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '')};
  margin: 0 auto;
  position: relative;
  .slick-slide {
    > div {
      margin: 0 ${props => get(props, 'theme.space[1]', '')}px;
    }
  }
  .slick-dots {
    & li {
      margin: 0;
      & button {
        background: ${props => (props.backtheme === 'dark'
    ? get(props, 'theme.colors.black', '')
    : get(props, 'theme.colors.white', ''))};
        border-radius: 8px;
        height: 8px;
        padding: 0;
        width: 8px;
        opacity: 0.3;
        &:before {
            display: none;
        }
      }
    }
    & .slick-active {
      & button {
        background: ${props => get(props, 'theme.colors.dPrimary', '')};
        opacity: 1;
      }
    }
  }
  & .slick-arrow {
    height: 40px;
    top: 28%;
    width: 40px;
    z-index: 8;
    &:before {
      display: none;
    }
  }
  & .slick-next {
    background-size: 100%;
    right: ${props => get(props, 'theme.space[2]', '')}px;
    &:hover, &:focus {
      background-size: 100%;
      opacity: 0.8;
    }
  }
  & .slick-prev {
    background-size: 100%;
    left: ${props => get(props, 'theme.space[2]', '')}px;
    &:hover, &:focus {
      background-size: 100%;
      opacity: 0.8;
    }
  }
  & .slick-disabled {
    opacity: 0;
    &:focus {
      opacity: 0;
    }
  }
  ${ChannelSVG} {
    svg {
      height: 25px;
    }
  }
  ${Description} {
    display: none;
  }
  ${Title} {
    font-size: ${props => get(props, 'theme.fontSizes[2]', '')}px;
    line-height: 24px;
  }
  @media (min-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    ${Title} {
      font-size: ${props => get(props, 'theme.fontSizes[4]', '')}px;
      line-height: 28px;
    }
  }
`;

export const Grid = styled(Flex)`
  ${Root} {
    align-items: top;
    display: flex;
    margin-bottom: ${props => get(props, 'theme.space[4]', '')}px;
    @media (min-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
      flex-direction: column;
      flex: 50%;
      max-width: 50%;
      padding: 0 ${props => get(props, 'theme.space[1]', '')}px;;
    }
    @media (min-width: ${props => get(props, 'theme.breakpoints.2', '')}) {
      flex: 25%;
      margin-bottom: ${props => get(props, 'theme.space[0]', '')}px;
      max-width: 25%;
    }
  }
  @media (max-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    
    ${ImageWrapper} {
      width: 50%;
    }
  
    ${ContentWrapper} {
      padding-top: ${props => get(props, 'theme.space[0]', '')}px;
      padding-left: ${props => get(props, 'theme.space[2]', '')}px;
      width: 50%;
    }
  
    ${ChannelSVG} {
      margin-bottom: ${props => get(props, 'theme.space[1]', '')}px;
    }
  
    ${Title} {
      margin-top: ${props => get(props, 'theme.space[0]', '')}px;
    }
  }
  @media (min-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;
