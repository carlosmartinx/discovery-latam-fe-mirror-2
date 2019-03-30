import { Box } from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

const SliderContentCardBig = styled(Box)`
    max-width: ${props => get(props, 'theme.breakpoints.3', '')};
    margin: 0 auto;
    position: relative;

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
    display: none;
    height: 70px;
    top: 40%;
    width: 70px;
    z-index: 8;

    &:before {
      display: none;
    }

    @media (min-width: ${props => get(props, 'theme.breakpoints.3', '')}) {
      display: block;
    }
    
  }

  & .slick-next {
    background: url(${props => get(props, 'theme.icons.slidearrowrightfilled', '')});
    background-repeat: no-repeat;
    background-size: 100%;
    right: ${props => get(props, 'theme.space[1]', '')}px;

    &:hover, &:focus {
      background: url(${props => get(props, 'theme.icons.slidearrowrightfilled', '')});
      background-repeat: no-repeat;
      background-size: 100%;
      opacity: 0.8;
    }
  }

  & .slick-prev {
    background: url(${props => get(props, 'theme.icons.slidearrowleftfilled', '')});
    background-repeat: no-repeat;
    background-size: 100%;
    left: ${props => get(props, 'theme.space[1]', '')}px;

    &:hover, &:focus {
      background: url(${props => get(props, 'theme.icons.slidearrowleftfilled', '')});
      background-repeat: no-repeat;
      background-size: 100%;
      opacity: 0.8;
    }
  }
`;

export default SliderContentCardBig;
