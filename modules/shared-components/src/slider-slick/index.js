/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderSlick = ({ settings, items }) => (
    <Slider {...settings}>
        {items.map((item, index) => (
            <div key={index}>
                {item}
            </div>
        ))}
    </Slider>
);

SliderSlick.propTypes = {
    settings: PropTypes.object.isRequired,
    items: PropTypes.any.isRequired
};

export default SliderSlick;