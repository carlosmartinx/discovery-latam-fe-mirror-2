import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { BoxSlider } from './styled';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderSlick = ({ settings, children }) => (
  <BoxSlider>
    <Slider {...settings}>
      {children}
    </Slider>
  </BoxSlider>
);

SliderSlick.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SliderSlick;
