import React from 'react';
import PropTypes from 'prop-types';
import {
  Root, Title,
} from './styled';

export const Ads = ({
  adSlotSize,
  adsTitle,
  bgColor,
}) => (
  <Root flexDirection="row" className={bgColor}>
    <Title>
      {adsTitle}
      {adSlotSize}
    </Title>
  </Root>
);

Ads.propTypes = {
  adsTitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  adSlotSize: PropTypes.arrayOf(PropTypes.number).isRequired,
  bgColor: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Ads.defaultProps = {
  adsTitle: 'Publicidad',
  bgColor: 'ads-dark',
};

export default Ads;
