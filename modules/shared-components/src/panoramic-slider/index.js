import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from '../content-card/index';
import SliderSlick from '../slider-slick/index';
import Panoramic from './styled';

const PanoramicSlider = ({ sliderContent }) => {
  const settings = {
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <Panoramic>
      <SliderSlick settings={settings}>
        {sliderContent.map(slide => (
          <ContentCard
            card={slide}
          />
        ))}
      </SliderSlick>
    </Panoramic>
  );
};

PanoramicSlider.propTypes = {
  sliderContent: PropTypes.shape({
    type: PropTypes.string,
    preview_image: PropTypes.shape({
      image_url: PropTypes.string.isRequired,
    }),
    season: PropTypes.string,
    duration: PropTypes.shape({
      minutes: PropTypes.string,
      seconds: PropTypes.string,
    }),
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    description: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sponsor: PropTypes.shape({
      name: PropTypes.string,
      circular_logo: PropTypes.string,
      url: PropTypes.string,
    }),
    channel: PropTypes.shape({
      logo_svg: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    url: PropTypes.string,
    backtheme: PropTypes.string,
    variationSponsor: PropTypes.string,
  }).isRequired,
};

export default PanoramicSlider;
