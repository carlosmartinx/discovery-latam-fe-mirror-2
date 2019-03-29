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
          <ContentCard {...slide} />
        ))}
      </SliderSlick>
    </Panoramic>
  );
};

PanoramicSlider.propTypes = {
  sliderContent: PropTypes.arrayOf(PropTypes.shape({
    backtheme: PropTypes.string,
    background: PropTypes.string,
    headerSource: PropTypes.string.isRequired,
    label: PropTypes.string,
    duration: PropTypes.string,
    totalTime: PropTypes.string,
    isFullySponsored: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    description: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    sponsor: PropTypes.shape({
      name: PropTypes.string,
      circular_logo: PropTypes.string,
      url: PropTypes.string,
    }),
    channelLogo: PropTypes.string,
    channelAlt: PropTypes.string,
    link: PropTypes.string,
    variation: PropTypes.string,
  })),
};

PanoramicSlider.defaultProps = {
  sliderContent: {},
};

export default PanoramicSlider;
