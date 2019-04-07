import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Box,
  Flex,
} from 'rebass';
import {
  PanoramicSlider,
  BulletTitle,
  FourItemCarousel,
  SliderContentCard,
  Ads,
} from '@discovery-web-app/shared-components';

import { esCodes } from '@discovery-web-app/shared-components/config/tagCodes';

import { BoxBase } from '../../utils/styled';

import getContentAction from '../../actions/content';

import Page from '../../components/page';

export const HomeShow = (props) => {
  const { appState, match } = props;
  useEffect(() => {
    props.getContentAction(match.url);
  }, []);
  const unitTextEs = 'discoverylatam/';
  const unitText = `${unitTextEs}Mobile_leaderboard_bottom`;

  return (
    <Page id="show" background="#000f24">
      <Box>
        {appState.data.destacados
        && <PanoramicSlider sliderContent={appState.data.destacados} />}
      </Box>
      <BoxBase>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Populares" />
          {appState.data.populares
          && <FourItemCarousel sliderContent={appState.data.populares} />}
        </Box>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Recomendados" />
          <Flex flexDirection={['column', 'column', 'row', 'row']} alignItems="center">
            <Box width={[1, 1, 8 / 12]}>
              {appState.data.recomendados
              && <SliderContentCard sliderContent={appState.data.recomendados} />}
            </Box>
            <Box width={[1, 1, 4 / 12]}>
              <Ads
                bgColor="ads-dark"
                adTitle="Publicidad"
                adSlotConfig={[{
                  adSlotSize: [300, 250],
                  adUnitText: unitText,
                  adSlotId: esCodes.mob_leaderboard_mid,
                }]}
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Lo más reciente" />
          {appState.data.recent
          && <FourItemCarousel sliderContent={appState.data.recent} />}
        </Box>
        <Box my="4">
          <Ads
            adTitle="Publicidad"
            bgColor="ads-dark"
            adSlotConfig={[{
              adSlotSize: [728, 90],
              adUnitText: unitText,
              adSlotId: esCodes.mob_leaderboard_bottom,
            }]}
          />
        </Box>
        <Box mb="4">
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Programas" />
          {appState.data.shows
          && <FourItemCarousel sliderContent={appState.data.shows} />}
        </Box>
      </BoxBase>
    </Page>
  );
};

HomeShow.propTypes = {
  appState: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  getContentAction: PropTypes.func.isRequired,
  match: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  appState: state.data,
});

const mapDispatchToProps = {
  getContentAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeShow);
