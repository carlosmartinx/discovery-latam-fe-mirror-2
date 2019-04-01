import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from '../content-card/index';
import SliderSlick from '../slider-slick/index';
import { BaseCarousel, Grid } from './styled';


const Carousel = ({
  sliderContent, numItemsDesktop, numItemsMobile, numItemsTablet,
}) => {
  const settings = {
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: numItemsDesktop,
    slidesToScroll: numItemsDesktop,
    infinite: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: numItemsMobile,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: numItemsTablet,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <BaseCarousel pb={[0, 0, 3, 4]}>
      {sliderContent.length >= 5
        ? (
          <SliderSlick settings={settings}>
            {sliderContent.map(slide => (
              <ContentCard {...slide} />
            ))}
          </SliderSlick>
        )
        : (
          <Grid flexDirection={['column', 'column', 'row', 'row']}>
            {sliderContent.map(slide => (
              <ContentCard {...slide} />
            ))}
          </Grid>
        )
      }
    </BaseCarousel>
  );
};

Carousel.propTypes = {
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
  numItemsDesktop: PropTypes.number,
  numItemsTablet: PropTypes.number,
  numItemsMobile: PropTypes.number,
};

Carousel.defaultProps = {
  numItemsDesktop: 4,
  numItemsTablet: 2.1,
  numItemsMobile: 1.1,
};

export default Carousel;
