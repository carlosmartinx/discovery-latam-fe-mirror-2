import React from 'react';
import PropTypes from 'prop-types';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import LazyLoad from 'react-lazyload';
import Loading from './ads-loading';
import { DfpBox } from './styled';

const networkId = '21756062855';

export const Dfp = ({ adSlot }) => (
  <DfpBox>
    <LazyLoad
      width={adSlot.adSlotSize[0]}
      height={adSlot.adSlotSize[1]}
      placeholder={(
        <Loading
          loadWidth={adSlot.adSlotSize[0]}
          loadHeight={adSlot.adSlotSize[1]}
        />
      )}
    >
      <DFPSlotsProvider
        dfpNetworkId={networkId}
        adUnit={adSlot.adUnitText}
      >
        <AdSlot
          sizes={[adSlot.adSlotSize]}
          slotId={adSlot.adSlotId}
        />
      </DFPSlotsProvider>
    </LazyLoad>
  </DfpBox>
);

Dfp.propTypes = {
  adSlot: PropTypes.shape({
    adSlotSize: PropTypes.arrayOf(PropTypes.number).isRequired,
    adSlotId: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    adUnitText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  }).isRequired,
};
export default Dfp;
