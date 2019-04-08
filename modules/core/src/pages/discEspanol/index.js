import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Image, Flex,
} from 'rebass';
import {
  WrapperFamily, DowText, ContentBox, CardLog,
  FamilyText, BoxImg, ContentList, LinkUrl, BoxMb,
} from './styled';
// eslint-disable-next-line import/no-unresolved
import ImgLogo from '../../../public/images/logo-go.png';
import ImgPhone from '../../../public/images/hand.png';
import ImgAppStore from '../../../public/images/app-store.png';
import ImgGoogle from '../../../public/images/google-play.png';
import ImgTablet from '../../../public/images/tablet.png';

import Page from '../../components/page';

export const discEspanol = ({
  urlGoogle,
  urlIos,
}) => (
  <Page id="españolpage">
    <WrapperFamily>
      <Flex mx="auto">
        <Box width={[1, 1, 1 / 2]} flexWrap="wrap" justifyContent="center" alignSelf="flex-start">
          <CardLog width={[1 / 2, null]} pl={[0]}>
            <Image src={ImgLogo} />
          </CardLog>
          <FamilyText color="white">
            El mundo en tus manos
          </FamilyText>
          <DowText color="white">
            ¡ descárgalo ya !
          </DowText>
          <Box width={1}>
            <LinkUrl href={urlIos} rel="nofollow" mr={[0, 0, 3]} target="_blank">
              <Image src={ImgAppStore} height="53px" />
            </LinkUrl>
            <LinkUrl href={urlGoogle} rel="nofollow" target="_blank">
              <Image src={ImgGoogle} height="53px" />
            </LinkUrl>
          </Box>
        </Box>
        <BoxImg>
          <Image src={ImgPhone} />
        </BoxImg>
      </Flex>
    </WrapperFamily>
    <ContentBox>
      <BoxMb width={1}>
        <LinkUrl href={urlIos} rel="nofollow" mr={[0, 0, 3]} target="_blank">
          <Image src={ImgAppStore} height="53px" />
        </LinkUrl>
        <LinkUrl href={urlGoogle} rel="nofollow" target="_blank">
          <Image src={ImgGoogle} height="53px" />
        </LinkUrl>
      </BoxMb>
      <Box width={1} mx="auto" mt={[2, 2, 120]}>
        <Heading
          textAlign="center"
          fontSize={[5, 6]}
          color="black"
        >
          Ve tus programas favoritos sin parar
        </Heading>
        <Box width={[1, 1, 1, 980]} mx="auto" mt={0}>
          <Image width="100%" pr={[15, 15, 0]} src={ImgTablet} />
        </Box>
        <ContentList>
          <ul className="ProgramsList">
            <li>+ Mexicánicos</li>
            <li>+ Crimen casi perfecto</li>
            <li>+ Revista people investiga</li>
            <li>+ Alaska: Hombres primitivos</li>
            <li>+ El dúo mecánico</li>
            <li>+ Hombres del Ártico</li>
            <li>+ Alaska: La última frontera</li>
            <li>+ Parientes perversos</li>
            <li>+ Documentales</li>
            <li>+ ¡y muchos más!</li>
          </ul>
        </ContentList>
      </Box>
    </ContentBox>
  </Page>
);

discEspanol.propTypes = {
  urlGoogle: PropTypes.string,
  urlIos: PropTypes.string,
};

discEspanol.defaultProps = {
  urlGoogle: 'https://play.google.com/store/apps/details?id=com.discovery.dsfgo',
  urlIos: 'https://itunes.apple.com/us/app/discovery-familia-go/id1214453250?mt=8%20',
};

export default discEspanol;
