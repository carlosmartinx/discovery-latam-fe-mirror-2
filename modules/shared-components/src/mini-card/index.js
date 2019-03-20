// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box } from 'rebass';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Card, LinkOptions, LinkWrapper, ImgLogo,
  TextNav, WrapperFront, WrapperBack, OptionLink,
  LinkBack, EffectBox, ImgWrapper,
} from './styled';

const MiniCard = ({
  logo, title, url = '/',
}) => {
  const [effect, setEffect] = useState('normal');

  return (
    <div>
      <EffectBox>
        <Card className={effect}>
          <WrapperFront flexDirection="column" py={1}>
            <LinkOptions onClick={() => setEffect('flipped')}>...</LinkOptions>
            <LinkWrapper href={url}>
              <ImgWrapper alignItems="center" mx="auto">
                <ImgLogo src={logo} />
              </ImgWrapper>
              <TextNav mt={1} w={[1]}>{title}</TextNav>
            </LinkWrapper>
          </WrapperFront>
          <WrapperBack flexDirection="column">
            <Box alignSelf="flex-end" m={1}>
              <LinkBack p={2} onClick={() => setEffect('normal')} />
            </Box>
            <OptionLink py={1} m={1}>Programación</OptionLink>
            <OptionLink py={1} m={1}>Series</OptionLink>
          </WrapperBack>
        </Card>
      </EffectBox>
    </div>
  );
};

MiniCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  url: PropTypes.string,
};

export default MiniCard;
