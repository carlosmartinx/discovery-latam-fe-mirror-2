import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Flex, Box, Image,
} from 'rebass';

// eslint-disable-next-line import/named
import { Input, Button } from './styled';
import IconMenu from '../../icons/menu.svg';
import IconSearch from '../../icons/search.svg';
import IconClose from '../../icons/close.svg';
import logo from '../../images/logo-discovery.png';

const Logo = () => (
  <Flex
    flexDirection="row"
    alignItems="center"
  >
    <Button>
      <Image src={IconMenu} />
    </Button>
    <Box>
      <Image
        width={160}
        src={logo}
      />
    </Box>
  </Flex>
);

const Search = ({ placeholder }) => (
  <Box alignSelf="end" width={1}>
    <Input
      placeholder={placeholder}
    />
  </Box>
);

Search.propTypes = {
  // eslint-disable-next-line react/require-default-props
  placeholder: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
};

const Header = (props) => {
  const { searchPlaceHolder } = props;
  const [search, setSearch] = useState(false);

  // const [text, setText] = useState('');

  const justifyContent = search ? 'flex-end' : 'space-between';

  return (
    <Flex
      flexDirection="row"
      justifyContent={justifyContent}
    >
      {search ? <Search placeholder={searchPlaceHolder} /> : <Logo />}

      <Button onClick={() => setSearch(!search)}>
        <Image src={search ? IconClose : IconSearch} />
      </Button>
    </Flex>
  );
};

Header.propTypes = {
  searchPlaceHolder: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
};

Header.defaultProps = {
  searchPlaceHolder: 'Buscar...',
};

export default Header;
