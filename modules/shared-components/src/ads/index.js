import React from 'react';
import PropTypes from 'prop-types';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import LazyLoad from 'react-lazyload';
import Loading from './ads-loading';
import {
  Root, Title,
} from './styled';

const networkId = '21756062855';

export const Ads = ({
  adSlotSize,
  adTitle,
  adSlotId,
  bgColor,
  adUnitText,
}) => (
  <Root flexDirection="row" className={bgColor}>
    <Title>
      {adTitle}
    </Title>
    <LazyLoad
      height={200}
      placeholder={<Loading />}
    >
      <DFPSlotsProvider
        dfpNetworkId={networkId}
        adUnit={adUnitText}
      >
        <AdSlot
          sizes={[adSlotSize]}
          slotId={adSlotId}
        />
      </DFPSlotsProvider>
    </LazyLoad>
  </Root>
);

Ads.propTypes = {
  adTitle: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  bgColor: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  adSlotSize: PropTypes.arrayOf(PropTypes.number).isRequired,
  adSlotId: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  adUnitText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

Ads.defaultProps = {
  bgColor: 'ads-dark', // ads-light
};

export default Ads;
