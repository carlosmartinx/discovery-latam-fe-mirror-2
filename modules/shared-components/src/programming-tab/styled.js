/* eslint-disable */
import { Box, Flex } from "rebass";
import styled from "styled-components";
import get from 'lodash/get';

export const Tab = styled(Box)`
    background-color: ${props => get(props, 'theme.colors.blueLigth', '')};
    color: ${props => get(props, 'theme.colors.white', '')};
    text-align: center;
`

export const Day = styled(Box)`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-transform: uppercase;
`

export const Date = styled(Box)`
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
    color: ${props => get(props, 'theme.colors.w3', '')};
`
