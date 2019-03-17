/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import {Root, Headline, Bullet } from "./index.styled"

const DefaultBg = '#009eff';
const DefaultColor = 'white';

const BulletTitle = ({ text = 'Recomendados', barcolor, bgtheme }) => (
  <Root alignItems={"center"} mt={4} mb={4}>
    <Bullet mr={2} bg={{background: barcolor == "default" ? DefaultBg : barcolor}}></Bullet>
    <Headline fontSize={4} color={{color: bgtheme == "dark" ? DefaultColor : "black"}}>
      {text}
    </Headline>
  </Root>
);

BulletTitle.propTypes = {
  text: PropTypes.any,
  barcolor: PropTypes.any,
  bgtheme: PropTypes.any,
};

export default BulletTitle;
