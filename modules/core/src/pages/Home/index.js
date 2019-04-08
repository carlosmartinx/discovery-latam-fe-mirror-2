import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import { get } from 'lodash';

import { esCodes } from '@discovery-web-app/shared-components/config/tagCodes';

// Components
import {
  BulletTitle,
  FourItemCarousel,
  SliderContentCard,
  PanoramicSlider,
  Ads,
} from '@discovery-web-app/shared-components';
import { BoxBase } from '../../utils/styled';

// Actions
import getHomeAction from '../../actions/home';

// Global Page
import Page from '../../components/page';

const Home = (props) => {
  const { appState } = props;
  useEffect(() => {
    props.getHomeAction();
  }, []);
  const unitTextEs = 'discoverylatam/';
  const unitText = `${unitTextEs}Mobile_leaderboard_bottom`;
  return (
    <Page id="homepage" background="#000f24">
      <Box>
        {appState.home.slider && <PanoramicSlider sliderContent={appState.home.slider} />}
      </Box>
      <BoxBase>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Destacados" />
          {appState.home.highlighted
          && <FourItemCarousel sliderContent={appState.home.highlighted} />}
        </Box>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Recomendados" />
          <Flex flexDirection={['column', 'column', 'row', 'row']} alignItems="center">
            <Box width={[1, 1, 8 / 12]}>
              {appState.home.recommended
              && <SliderContentCard sliderContent={appState.home.recommended} />}
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
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Entretenimiento real" />
          {appState.home.categories
          && <FourItemCarousel sliderContent={get(appState.home, 'categories[0].nodes')} />}
        </Box>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Estilo de vida" />
          {appState.home.categories
          && <FourItemCarousel sliderContent={get(appState.home, 'categories[1].nodes')} />}
        </Box>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="DISCOVERY K!DS PLAY!" />
          {appState.home.categories
          && <FourItemCarousel sliderContent={get(appState.home, 'categories[2].nodes[0].videos')} />}
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
      </BoxBase>
    </Page>
  );
};

Home.propTypes = {
  appState: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  getHomeAction: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  appState: state.home,
});

const mapDispatchToProps = ({
  getHomeAction,
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
