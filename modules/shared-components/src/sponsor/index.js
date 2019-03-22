import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image, Link } from 'rebass';
import { WrapperSponsor, Line, SponsorText, BoxSponsor } from './styled';

const Sponsor = ({ data, title, variation = 'long' }) => (
  <div>
    { variation === 'long' ? (
      <WrapperSponsor>
        <Flex flexDirection="row" alignItems="center">
          <SponsorText>{title}</SponsorText>
          <Link href={data.url}>
            <Image height="50px" mx={3} src={data.logo_svg}></Image>
            <Line />
            <Image height="50px" ml={3} src={data.secondary_logo_svg}></Image>
          </Link>
        </Flex>
      </WrapperSponsor>
      ) : (
      <BoxSponsor alignSelf="flex-end" >
        <Link href={data.url}>
          <Image height="50px" src={data.circular_logo}></Image>
        </Link>
      </BoxSponsor>
      )
    }
  </div>
);

Sponsor.propTypes = {
  titleContent: PropTypes.string,
};

Sponsor.defaultProps = {
  title: 'Patrocinado por'
};

export default Sponsor;
