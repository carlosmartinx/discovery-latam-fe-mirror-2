import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from '../content-card/index';
import SliderSlick from '../slider-slick/index';
import { BaseGallery, GalleryGrid } from './styled';


const SliderGallery = ({ sliderContent }) => {
  const isMobile = window.innerWidth < 768;
  const settings = {
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    lazyLoad: 'ondemand',
  };

  return (
    <BaseGallery>
      {isMobile === false
        ? (
          <SliderSlick settings={settings}>
            {sliderContent.map(slide => (
              <ContentCard {...slide} />
            ))}
          </SliderSlick>
        )
        : (
          <GalleryGrid flexDirection={['column', 'column', 'row', 'row']}>
            {sliderContent.map(slide => (
              <ContentCard {...slide} />
            ))}
          </GalleryGrid>
        )
      }
    </BaseGallery>
  );
};

SliderGallery.propTypes = {
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
  })).isRequired,
};

export default SliderGallery;
