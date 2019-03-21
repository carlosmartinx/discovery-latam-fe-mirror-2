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
  lazyLoad: true,
};

const Panoramic = ({langcode, sliders}) => {
  return (
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
};

Panoramic.propTypes = {
  langcode: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sliders: PropTypes.arrayOf(PropTypes.shape({
    sponsor: PropTypes.arrayOf(PropTypes.shape({
      logo_svg: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
    channel: PropTypes.shape({
      logo_svg: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    preview_image: PropTypes.shape({
      image_1_1: PropTypes.string,
      image_alt: PropTypes.string,
      image_file: PropTypes.string,
      image_url: PropTypes.string,
    }).isRequired,
    region: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

Panoramic.defaultProps = {
  langcode: 'es',
};

export default Panoramic;
