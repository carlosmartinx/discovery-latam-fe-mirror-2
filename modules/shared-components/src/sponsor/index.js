import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image, Link } from 'rebass';
import {
  WrapperSponsor, Line,
  SponsorText, BoxSponsor,
} from './styled';

const Sponsor = ({ data, title, variation }) => (
  <div>
    { variation === 'long' ? (
      <WrapperSponsor>
        <Flex flexDirection="row" alignItems="center">
          <SponsorText>{title}</SponsorText>
          <Link href={data.url} rel="nofollow" target="_blank">
            <Image height="50px" mx={3} src={data.logo_svg} />
            <Line />
            <Image height="50px" ml={3} src={data.secondary_logo_svg} />
          </Link>
        </Flex>
      </WrapperSponsor>
    ) : (
      <BoxSponsor alignSelf="flex-end">
        <Link href={data.url} rel="nofollow" target="_blank">
          <Image height="50px" src={data.circular_logo} />
        </Link>
      </BoxSponsor>
    )}
  </div>
);

Sponsor.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    circular_logo: PropTypes.string,
    secondary_logo_svg: PropTypes.string,
    logo_svg: PropTypes.string,
  }),
  title: PropTypes.string,
  variation: PropTypes.string,
};

Sponsor.defaultProps = {
  title: 'Patrocinado por',
  data: {},
  variation: 'long',
};

export default Sponsor;
