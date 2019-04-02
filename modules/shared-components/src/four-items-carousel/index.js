import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from '../content-card/index';
import SliderSlick from '../slider-slick/index';
import { BaseCarousel, Grid } from './styled';


const FourItemCarousel = ({
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
    <BaseCarousel>
      {sliderContent.length >= 5
        ? (
          <SliderSlick settings={settings}>
            {sliderContent.map(slide => (
              <ContentCard card={slide} />
            ))}
          </SliderSlick>
        )
        : (
          <Grid flexDirection={['column', 'column', 'row', 'row']}>
            {sliderContent.map(slide => (
              <ContentCard card={slide} />
            ))}
          </Grid>
        )
      }
    </BaseCarousel>
  );
};

FourItemCarousel.propTypes = {
  sliderContent: PropTypes.element,
  numItemsDesktop: PropTypes.number,
  numItemsTablet: PropTypes.number,
  numItemsMobile: PropTypes.number,
};

FourItemCarousel.defaultProps = {
  sliderContent: {},
  numItemsDesktop: 4,
  numItemsTablet: 2.1,
  numItemsMobile: 1.1,
};

export default FourItemCarousel;
