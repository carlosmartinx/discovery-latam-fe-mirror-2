import {
  Box,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

const Root = styled(Box)`
  width: 100%;

  figure {
    margin: 0;
    position: relative;
    width: 100%;
  }
  
  figcaption {
    background: ${props => get(props, 'theme.colors.black', '')};
    bottom: 0;
    color: ${props => get(props, 'theme.colors.white', '')};
    display: block;
    font-family: ${props => get(props, 'theme.fonts.sans', '')};
    font-size: calc(${props => get(props, 'theme.fontSizes.0', '')}px - 1px);
    font-weight: normal;
    left: 0;
    line-height: 16px;
    opacity: 0.5;
    padding: 16px;
    position: absolute;
    right: 0;
  }
  
  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export default Root;
