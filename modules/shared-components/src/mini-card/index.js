import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import {
  Card, LinkOptions, LinkWrapper, ImgLogo,
  TextNav, WrapperFront, WrapperBack, OptionLink,
  LinkBack, EffectBox, ImgWrapper,
} from './styled';

const MiniCard = ({
  logo, title, url = '/', itemClicked, shortname, idChannel, series,
}) => {
  const [effect, setEffect] = useState('normal');

  return (
    <div>
      <EffectBox>
        <Card className={effect}>
          <WrapperFront flexDirection="column" py={1}>
            <LinkOptions onClick={() => setEffect('flipped')}>...</LinkOptions>
            <LinkWrapper href={url}>
              <ImgWrapper className={idChannel} alignItems="center" mx="auto">
                <ImgLogo src={logo} />
              </ImgWrapper>
              <TextNav mt={1} w={[1]}>{title}</TextNav>
            </LinkWrapper>
          </WrapperFront>
          <WrapperBack flexDirection="column" className={idChannel}>
            <Box alignSelf="flex-end" my={1}>
              <LinkBack p={2} onClick={() => setEffect('normal')} />
            </Box>
            {series === true
              ? (
                <Flex flexDirection="column">
                  <OptionLink py={1} m={1} href={`${shortname}/tv/programacion`}>Programación</OptionLink>
                  {/* eslint-disable-next-line max-len */}
                  <OptionLink py={1} m={1} onClick={() => itemClicked(shortname)}>Series</OptionLink>
                </Flex>
              ) : (
                <OptionLink py={1} m={1} href={`${shortname}/tv/programacion`}>Programación</OptionLink>
              )
            }
          </WrapperBack>
        </Card>
      </EffectBox>
    </div>
  );
};

MiniCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemClicked: PropTypes.func.isRequired,
  shortname: PropTypes.string.isRequired,
  idChannel: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  series: PropTypes.bool.isRequired,
};

export default MiniCard;
