/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';
import {Root, Headline, Bullet } from "./index.styled";

const DefaultBg = '#009eff';
const DefaultColor = 'white';

const BulletTitle = ({barcolor, bgtheme}) => (
  <Root alignItems={'center'} mt={4} mb={4}>
    <Bullet mr={2} bg={{background: barcolor == 'default' ? DefaultBg : barcolor}}></Bullet>
    <Headline fontSize={4} color={{color: bgtheme == 'dark' ? DefaultColor : 'black'}}>
      <FormattedMessage
        id='BulletTitle.title'
        defaultMessage='Destacados'>
      </FormattedMessage>
    </Headline>
  </Root>
);

BulletTitle.propTypes = {
  defaultMessage: PropTypes.string,
  barcolor: PropTypes.string,
  bgtheme: PropTypes.string,
};

export default BulletTitle;
