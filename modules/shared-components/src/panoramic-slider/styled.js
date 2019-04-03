import { Box } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';
import {
  HeadlineWrapper,
  ContentWrapper,
  Title,
  ChannelLogo,
} from '../content-card/styled';

const Panoramic = styled(Box)`
  max-width: ${props => get(props, 'theme.breakpoints.3', '1440px')};
  margin: 0 auto;
  position: relative;

  .slick-dots {
    bottom: ${props => get(props, 'theme.space[1]', '8')}px;

    & li {
      margin: 0;
      & button {
        background: white;
        border-radius: 8px;
        height: 8px;
        padding: 0;
        width: 8px;

        &:before {
          display: none;
        }
      }
    }
    & .slick-active {
        & button {
          background: ${props => get(props, 'theme.colors.dPrimary', '#246ad3')};
        }
    }
  }

  & .slick-arrow {
    height: 70px;
    top: 40%;
    width: 70px;
    z-index: 8;

    &:before {
      display: none;
    }    
  }

  & .slick-next {
    background-size: 100%;
    right: ${props => get(props, 'theme.space[1]', '8px')}px;

    &:hover, &:focus {
      background-size: 100%;
      opacity: 0.8;
    }

    @media (min-width: ${props => get(props, 'theme.breakpoints.3', '1440px')}) {
     right: 98px
    }
  }

  & .slick-prev {
    background-size: 100%;
    left: ${props => get(props, 'theme.space[1]', '8')}px;

    &:hover, &:focus {
      background-size: 100%;
      opacity: 0.8;
    }
    @media (min-width: ${props => get(props, 'theme.breakpoints.3', '1440px')}) {
      left: 98px
    }
  }

  ${ContentWrapper} {
    background: rgba(0,37,91,0.85);
    border-bottom: 3px solid ${props => get(props, 'theme.colors.dPrimary', '#246ad3')}
    bottom: ${props => get(props, 'theme.space[0]', '0')}px;
    left: ${props => get(props, 'theme.space[0]', '0')}px;
    margin: auto;
    padding: ${props => get(props, 'theme.space[1]', '8')}px 
    ${props => get(props, 'theme.space[3]', '32')}px
    ${props => get(props, 'theme.space[5]', '40')}px;
    position: absolute;
    right: ${props => get(props, 'theme.space[0]', '0')}px;

    @media (min-width: ${props => get(props, 'theme.breakpoints.3', '1440px')}) {
      padding: ${props => get(props, 'theme.space[1]', '8')}px 98px
      ${props => get(props, 'theme.space[5]', '40')}px;
    }
  }

  ${HeadlineWrapper} {
    display: flex;
    align-items: center;
    padding-bottom: ${props => get(props, 'theme.space[1]', '8')}px
  }

  ${ChannelLogo} {
    border-right: 1px solid ${props => get(props, 'theme.colors.white', '#ffffff')}
    padding: ${props => get(props, 'theme.space[1]', '8')}px
    ${props => get(props, 'theme.space[3]', '24')}px
    ${props => get(props, 'theme.space[1]', '8')}px 0;
    margin-right: ${props => get(props, 'theme.space[3]', '24')}px;
    opacity: 1;
  }

  ${Title} {
    font-size: ${props => get(props, 'theme.fontSizes[5]', '28')}px;
    line-height: 36px;
    margin: 0;

    @media (min-width: ${props => get(props, 'theme.breakpoints.2', '1024px')}) {
      font-size: ${props => get(props, 'theme.fontSizes[8]', '44')}px;
      line-height: 52px;
    }
  }
`;

export default Panoramic;
