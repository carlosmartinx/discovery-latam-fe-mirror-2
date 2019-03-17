/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, Box, Button, Flex, Heading } from "rebass";
import styled from "styled-components";
import theme from '../../../core/src/styles/mainTheme';
import get from 'lodash/get';


export const Root = styled(Flex)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  text-transform: uppercase;
  line-height: 32px;
  margin: 0 auto;
  max-width: 1440px;
`;

export const Headline = styled(Heading)`
  font-family: ${props => get(props, 'theme.fonts.sans', '')};
  color: ${props => get(props, 'theme.colors.w3', '')};
  text-transform: uppercase;
  line-height: 32px;
`;

export const Bullet = styled(Box)`
  background: ${props => get(props, 'theme.colors.tdBlueGray', '')};
  height: 16px;
  width: 24px;
`;

const DefaultBg = '#009eff';
const DefaultColor = 'white';

const BulletTitle = ({ barcolor, bgtheme }) => (
  <Root theme={theme} alignItems={"center"} mt={4} mb={4}>
    <Bullet mr={2} bg={{background: barcolor == "default" ? DefaultBg : barcolor}}></Bullet>
    <Headline fontSize={4} color={{color: bgtheme == "dark" ? DefaultColor : "black"}}>
      Recomendados
    </Headline>
  </Root>
);

BulletTitle.propTypes = {
  barcolor: PropTypes.any,
  bgtheme: PropTypes.any,
};

export default BulletTitle;
