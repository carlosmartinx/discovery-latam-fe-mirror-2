import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';

import { esCodes } from '@discovery-web-app/shared-components/config/tagCodes';

// Components
import {
  BulletTitle,
  Carousel,
  CookieBar,
  SliderContentCard,
  Ads,
} from '@discovery-web-app/shared-components';

// Actions
import getHomeAction from '../../actions/home';

// Global Page
import Page from '../../components/page';


const Home = (props) => {
  const { appState } = props;

  useEffect(() => {
    props.getHomeAction();
  }, []);

  global.console.log(appState.home);

  const items = [
    {
      title: 'Comida por machete',
      type: 'image',
      duration: {
        minutes: '1',
        seconds: '55',
      },
      description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
        image_alt: 'Comida por machete',
      },
      url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
      categories: [{
        name: 'aventura',
        url: '/temas/aventura',
      }, {
        name: 'supervivencia',
        url: '/temas/supervivencia',
      }],
      channel: {
        name: 'Discovery',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
        url: '/discovery',
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
      },
    }, {
      title: 'Creando un parque temático para niños',
      region: ['Latam'],
      fecha: '1543597509',
      duration: {
        minutes: '1',
        seconds: '55',
      },
      type: 'video',
      description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
      },
      url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
      categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
      channel: {
        name: 'DiscoveryHH',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
        url: '/discoveryhh',
        codigos: {
          Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
        },
        codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
      },
    }, {
      title: 'Comida por machete',
      type: 'image',
      duration: {
        minutes: '1',
        seconds: '55',
      },
      description: 'Dani se siente hambrienta y apartada de su nuevo grupo, así que decide explorar los alrededores, encontrando nuevos amigos con los que podrá negociar comida por el uso de su machete.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2018-12/Comida%20por%20machete.jpeg?itok=sNzT-afs',
        image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2018-12/Comida%20por%20machete.jpeg?itok=CJtDQgD-',
        image_alt: 'Comida por machete',
      },
      url: '/discovery/supervivencia-al-desnudo-edicion-extrema/video/comida-por-machete',
      categories: [{
        name: 'aventura',
        url: '/temas/aventura',
      }, {
        name: 'supervivencia',
        url: '/temas/supervivencia',
      }],
      channel: {
        name: 'Discovery',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/Discovery-Logo-white.png',
        url: '/discovery',
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/discovery.svg',
      },
    }, {
      title: 'Creando un parque temático para niños',
      region: ['Latam'],
      fecha: '1543597509',
      duration: {
        minutes: '1',
        seconds: '55',
      },
      type: 'video',
      description: 'Tyson y su equipo reciben un encargo de la compañía International Princess World, un parque temático para niños que será presentado en China.',
      preview_image: {
        image_1_1: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/slider_mobile/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=NphyXaO9', image_url: 'https://cdn.admin-tudiscovery.com/sites/default/files/styles/destacados/public/2EC4E30229B343DFA43DE87F56F1838D.jpg?itok=WCZhnBNj', image_file: '2EC4E30229B343DFA43DE87F56F1838D.jpg', image_alt: 'Creando un parque temático para niños',
      },
      url: '/discoveryhh/casitas-para-jugar/video/creando-un-parque-tematico-para-ninos',
      categories: [{ name: 'hogar', url: '/temas/hogar' }, { name: 'jardim', url: '/temas/jardin' }],
      channel: {
        name: 'DiscoveryHH',
        logo: 'https://cdn.admin-tudiscovery.com/sites/default/files/2018-12/HH-Logo-white.png',
        url: '/discoveryhh',
        codigos: {
          Latam: 'DHLA-SP', Brasil: 'DHBR-PRT', Mexico: 'DHME-SP', Argentina: 'DHAR-SP', Venezuela: 'DHTV-SP',
        },
        codes: [{ Latam: 'DSLA-SP' }, { Brasil: 'DCBR-PRT' }, { Mexico: 'DCME-SP' }, { Argentina: 'DCAR-SP' }, { Venezuela: 'DCVE-SP' }, { Latam: 'TULA-SP' }, { Brasil: 'THDB-PRT' }, { Latam: 'APLA-SP' }, { Brasil: 'APBR-PRT' }, { Argentina: 'APAR-SP' }, { Latam: 'DHLA-SP' }, { Brasil: 'DHBR-PRT' }, { Mexico: 'DHME-SP' }, { Argentina: 'DHAR-SP' }, { Venezuela: 'DHTV-SP' }],
        logo_svg: 'https://cdn.admin-tudiscovery.com/sites/default/files/logos/hh.svg',
      },
    },
  ];

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
        <BulletTitle barcolor="default" backtheme="dark" titleContent="Destacados" />
        <Carousel sliderContent={items} />
      </Box>
      <Box>
        <BulletTitle barcolor="default" backtheme="dark" titleContent="Recomendados" />
        <Flex flexDirection={['column', 'column', 'row', 'row']} alignItems="center">
          <Box width={[1, 1, 8 / 12]}>
            <SliderContentCard sliderContent={items} />
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
        <Carousel sliderContent={items} />
      </Box>
      <Box>
        <BulletTitle barcolor="default" backtheme="dark" titleContent="Estilo de vida" />
        <Carousel sliderContent={items} />
      </Box>
      <Box>
        <BulletTitle barcolor="default" backtheme="dark" titleContent="DISCOVERY K!DS PLAY!" />
        <Carousel sliderContent={items} />
      </Box>
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
