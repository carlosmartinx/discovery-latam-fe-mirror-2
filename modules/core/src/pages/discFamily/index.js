import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Heading, Image, Flex, Card,
} from 'rebass';
import {
  WrapperFamily, DowText, ContentBox, BoxMb,
  FamilyText, BoxImg, ContentList, LinkUrl,
} from './styled';
// eslint-disable-next-line import/no-unresolved
import ImgLogo from '../../../public/images/familia-go.png';
import ImgPhone from '../../../public/images/hand2.png';
import ImgAppStore from '../../../public/images/app-store.png';
import ImgGoogle from '../../../public/images/google-play.png';
import ImgTablet from '../../../public/images/tablet-fam.png';

import Page from '../../components/page';

const discFamily = ({
  urlGoogle,
  urlIos,
}) => (
  <Page id="familypage">
    <WrapperFamily>
      <Flex mx="auto">
        <Box width={[1, 1, 1 / 2]} flexWrap="wrap" justifyContent="center" alignSelf="flex-start">
          <Card width={[1 / 2, 1 / 2, 1]}>
            <Image src={ImgLogo} ml={[0, 0, 6]} />
          </Card>
          <FamilyText color="white">
            Ve nuevos episodios al
          </FamilyText>
          <FamilyText color="white">
            día siguiente de salir al aire
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
            <li>+ Doki</li>
            <li>+ Mi estilo, tu estilo</li>
            <li>+ Hi-5</li>
            <li>+ El Show de Luna</li>
            <li>+ Especiales Médicos</li>
            <li>+ El zoo de Zu</li>
            <li>+ Cake Boss</li>
            <li>+ Sala de Emergencias</li>
            <li>+ Mi cuerpo, mi desafío</li>
            <li fontWeight="bold" color="white">+ ¡y muchos más!</li>
          </ul>
        </ContentList>
      </Box>
    </ContentBox>
  </Page>
);

discFamily.propTypes = {
  urlGoogle: PropTypes.string,
  urlIos: PropTypes.string,
};

discFamily.defaultProps = {
  urlGoogle: 'https://play.google.com/store/apps/details?id=com.discovery.dsfgo',
  urlIos: 'https://itunes.apple.com/us/app/discovery-familia-go/id1214453250?mt=8%20',
};

export default discFamily;
