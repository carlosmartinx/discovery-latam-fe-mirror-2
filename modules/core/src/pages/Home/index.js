import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import { get } from 'lodash';

import { esCodes } from '@discovery-web-app/shared-components/config/tagCodes';

// Components
import {
  BulletTitle,
  Carousel,
  CookieBar,
  SliderContentCard,
  PanoramicSlider,
  Ads,
} from '@discovery-web-app/shared-components';
import { BoxBase } from './styled';

// Actions
import getHomeAction from '../../actions/home';

// Global Page
import Page from '../../components/page';


const Home = (props) => {
  const { appState } = props;
  useEffect(() => {
    props.getHomeAction();
  }, []);

  const esContent = (
    <p>
      Al acceder a nuestro sitio, usted entiende y acepta nuestros Términos y Condiciones.
      Como la mayoría de los sitios web, los sitios de Discovery utilizan cookies
      para mejorar su experiencia con nuestro contenido.
      Para obtener más información acerca de las cookies y cómo administrarlas,
      por favor lea nuestra Política de privacidad.
      Declaro que he leído y acepto los
      {' '}
      <a href="https://tudiscovery.com/terminos-y-condiciones" rel="noopener noreferrer" target="_blank"> términos y condiciones</a>
      {' '}
      y las
      {' '}
      <a href="políticas de privacidad" rel="noopener noreferrer" target="_blank"> políticas de privacidad </a>
    </p>
  );

  const unitTextEs = 'discoverylatam/';
  const unitText = `${unitTextEs}Mobile_leaderboard_bottom`;
  return (
    <Page id="homepage" background="#001534">
      <Box>
        {appState.home.slider && <PanoramicSlider sliderContent={appState.home.slider} />}
      </Box>
      <BoxBase>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Destacados" />
          {appState.home.highlighted && <Carousel sliderContent={appState.home.highlighted} />}
        </Box>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Recomendados" />
          <Flex flexDirection={['column', 'column', 'row', 'row']} alignItems="center">
            <Box width={[1, 1, 9 / 12]}>
              {appState.home.recommended
              && <SliderContentCard sliderContent={appState.home.recommended} />}
            </Box>
            <Box width={[1, 1, 3 / 12]}>
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
          && <Carousel sliderContent={get(appState.home, 'categories[0].nodes')} />}
        </Box>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="Estilo de vida" />
          {appState.home.categories
          && <Carousel sliderContent={get(appState.home, 'categories[1].nodes')} />}
        </Box>
        <Box>
          <BulletTitle barcolor="default" backtheme="dark" titleContent="DISCOVERY K!DS PLAY!" />
          {appState.home.categories
          && <Carousel sliderContent={get(appState.home, 'categories[2].nodes[0].videos')} />}
        </Box>
      </BoxBase>

      <CookieBar legal={esContent} btnText="Aceptar" />
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
