import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image, Link } from 'rebass';
import { WrapperSponsor, Line, SponsorText } from './styled';

const Sponsor = ({ data, title, variation = 'long' }) => (
  <div>
    <WrapperSponsor>
      { variation === 'long' ? (
        <Flex flexDirection="row" alignItems="center">
          <SponsorText>{title}</SponsorText>
          <Link href={data.url}>
            <Image height="50px" mx={3} src={data.logo_svg}></Image>
            <Line />
            <Image height="50px" ml={3} src={data.secondary_logo_svg}></Image>
          </Link>
        </Flex>
        ) : (
        <Flex alignItems="flex-end">
          <Link href={data.url}>
            <Image height="50px" src={data.circular_logo}></Image>
          </Link>
        </Flex>
        )
      }
    </WrapperSponsor>
  </div>
);

Sponsor.propTypes = {
  titleContent: PropTypes.string,
};

Sponsor.defaultProps = {
  title: 'Patrocinado por'
};

export default Sponsor;
