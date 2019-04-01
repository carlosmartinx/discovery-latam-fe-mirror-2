import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';
import {
  Root,
  ChannelLogo,
  Title,
} from '../content-card/styled';

export const BaseGallery = styled(Box)`
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
          background: ${props => get(props, 'theme.colors.dPrimary', '')};
      }
    }
  }

  & .slick-arrow {
    height: 56px;
    top: 45%;
    width: 56px;
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

  ${ChannelLogo} {
    height: 20px;
  }

  ${Title} {
    display: none;
  }
`;

export const GalleryGrid = styled(Flex)`
  ${Root} {
    margin-bottom: ${props => get(props, 'theme.space[4]', '')}px;
  }
`;
