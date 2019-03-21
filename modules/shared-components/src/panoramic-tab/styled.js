/* eslint-disable */
import { Box, Link, Image  } from "rebass";
import styled from "styled-components";
import get from 'lodash/get';

export const Tab = styled(Box)`
    background-color: ${props => get(props, 'theme.colors.blueLigth', '')};
    color: ${props => get(props, 'theme.colors.white', '')};
    text-align: center;
`

export const Sponsor = styled(Box)`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
`

export const Content = styled(Box)`
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
    color: ${props => get(props, 'theme.colors.w3', '')};
`
export const LinkWrapper = styled(Link)`
  background-color: transparent;
  color: ${props => get(props, 'theme.colors.white', '')};
  display: block;
  text-decoration: none;
  position: relative;
`;

export const ImgLogo = styled(Image)`
  display: inline-block;
  max-width: 100%;
  max-height: 40px;
`;
