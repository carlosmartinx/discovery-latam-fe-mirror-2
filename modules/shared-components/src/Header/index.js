import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Flex, Box, Image,
} from 'rebass';
import { Redirect } from 'react-router-dom';

// eslint-disable-next-line import/named
import { Input, Button, Root } from './styled';
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

const Search = ({ placeholder }) => {
  const [redirect, setRedirect] = useState(false);
  const [inputValue, setinputValue] = useState('');

  const handleOnKeyDown = (event) => {
    if (event.keyCode !== 13) {
      setRedirect(false);
    }
  };

  const handleOnKeyUp = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setRedirect(true);
    }
  };

  useEffect(() => {
    const input = document.getElementById('searchInput');
    input.addEventListener('keydown', handleOnKeyDown);
    input.addEventListener('keyup', handleOnKeyUp);
    // Remove event listeners on cleanup
    return () => {
      input.removeEventListener('keydown', handleOnKeyDown);
      input.removeEventListener('keyup', handleOnKeyUp);
    };
  }, []);

  return (
    <Box alignSelf="end" width={1} px={[10, 24]}>
      {redirect && inputValue && (<Redirect push to={`/buscador/${inputValue}`} />)}
      <Input
        id="searchInput"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          setinputValue(e.target.value);
        }}
      />
    </Box>
  );
};

Search.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

const Header = (props) => {
  const { searchPlaceHolder } = props;
  const [search, setSearch] = useState(false);

  const justifyContent = search ? 'flex-end' : 'space-between';

  return (
    <Root
      flexDirection="row"
      justifyContent={justifyContent}
      py={2}
      m="auto"
    >
      {!search && <Logo />}

      {!search ? (
        <Button onClick={() => setSearch(!search)}>
          <Image src={IconSearch} />
        </Button>
      ) : (
        <Button>
          <Image src={IconSearch} />
        </Button>
      )}

      {search && <Search placeholder={searchPlaceHolder} />}

      {search && (
        <Button onClick={() => setSearch(!search)}>
          <Image src={search ? IconClose : IconSearch} />
        </Button>
      )}
    </Root>
  );
};

Header.propTypes = {
  searchPlaceHolder: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Header.defaultProps = {
  searchPlaceHolder: 'Buscar',
};

export default Header;
