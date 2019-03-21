import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';
import { Card } from './styled';
// eslint-disable-next-line import/named
import { SliderItem } from './SliderItem';

const Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Panoramic = (langcode, sliders) => (
  <Slider {...Settings}>
    {sliders.map((slide, i) => (
      <SliderItem
        // eslint-disable-next-line
        key={i}
        sliders={sliders}
        sponsor={slide.sponsor}
        channel={slide.channel}
        description={slide.slide}
        title={slide.title}
        url={slide.url}
        langcode={langcode}
      />
    ))}
  </Slider>
);

Panoramic.propTypes = {
  langcode: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Panoramic.defaultProps = {
  langcode: 'es',
};

export default Panoramic;
