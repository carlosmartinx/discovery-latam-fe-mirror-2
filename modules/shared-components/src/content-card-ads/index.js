import React from 'react';
import PropTypes from 'prop-types';
import SliderContentCard from '../slider-content-card';
import Ads from '../ads';
import {
  Root,
  ItemsBox,
} from './styled';

export const ContentCardBigAds = ({ dataSliderContent, adsData }) => (
  <Root>
    <ItemsBox width={[1, 1, 8 / 12]}>
      <SliderContentCard sliderContent={dataSliderContent} />
    </ItemsBox>

    <ItemsBox width={[1, 1, 4 / 12]}>
      {<Ads
        bgColor={adsData.bgColor}
        adTitle={adsData.adTitle}
        adSlotConfig={adsData.adSlotConfig}
      />}
    </ItemsBox>
  </Root>
);

ContentCardBigAds.propTypes = {
  dataSliderContent: PropTypes.arrayOf(PropTypes.shape({
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
  adsData: PropTypes.objectOf(PropTypes.shape({
    adTitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    bgColor: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    adSlotConfig: PropTypes.arrayOf(PropTypes.shape({
      adSlotSize: PropTypes.arrayOf(PropTypes.number).isRequired,
      adSlotId: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
      adUnitText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    })).isRequired,
  })).isRequired,
};

export default ContentCardBigAds;
