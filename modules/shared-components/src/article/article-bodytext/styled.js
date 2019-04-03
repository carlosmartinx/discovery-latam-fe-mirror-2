import {
  Box,
} from 'rebass';
import styled from 'styled-components';
import get from 'lodash/get';

// eslint-disable-next-line import/prefer-default-export
export const Root = styled(Box)`
  color: ${props => get(props, 'theme.colors.black', '')};
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  font-size: calc(${props => get(props, 'theme.fontSizes.2', '')}px + 2px);
  line-height: 24px;
  width: 100%;

  blockquote {
    font-size: ${props => get(props, 'theme.fontSizes.4', '')}px;
    font-weight: bold;
    line-height: 32px;
    margin: 20px auto;
    width: calc((100% * 5) / 6);
    word-break: break-all;

    @media (min-width: ${props => get(props, 'theme.breakpoints.1', '')}) {
      font-size: ${props => get(props, 'theme.fontSizes.5', '')}px;
      line-height: 36px;
      width: calc((100% * 4) / 6);
    }

    @media (min-width: ${props => get(props, 'theme.breakpoints.3', '')}) {
      width: calc((100% * 8) / 12)%;
    }
  }

  a {
    color: ${props => get(props, 'theme.colors.dPrimary', '')};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    margin-bottom: 16px;

    @media (min-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
      margin-bottom: 0;
    }

    &[data-align="left"] {
      float: left;
      margin-right: 0;
      width: auto;

      @media (min-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
        margin-right: 16px;
      }
    }

    &[data-align="right"] {
      float: right;
      margin-left: 0;
      width: auto;

      @media (min-width: ${props => get(props, 'theme.breakpoints.0', '')}) {
        margin-left: 16px;
      }
    }
  }
`;
