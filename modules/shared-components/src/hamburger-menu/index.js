import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Heading } from 'rebass';
// eslint-disable-next-line import/no-extraneous-dependencies
import MiniCard from '../mini-card';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  LinkClose, TopBar, MenuElem,
  WrapperFlex, ItemsMenu, WrapperMenu,
  DataChannel, WrapperBox, LinkBack,
} from './styled';

const Menu = ({ channels }) => {
  const [effect, setEffect] = useState('opened');
  const [series, setSeries] = useState('hidden');

  return (
    <div>
      <WrapperFlex flexDirection="column" className={effect}>
        <WrapperMenu>
          <WrapperBox flexDirection="row" className={series}>
            <Box>
              <TopBar p={2}><LinkClose onClick={() => setEffect('closed')} /></TopBar>
              <ItemsMenu flexDirection="row" flexWrap="wrap" py={4}>
                {channels.map(item => (
                  <MenuElem width={1 / 6} m={1} mr={0}>
                    <MiniCard title={item.title} logo={item.logo} url={item.url} onClick={() => setSeries('normal')} />
                  </MenuElem>
                ))}
              </ItemsMenu>
            </Box>
            <Box>
              <TopBar p={2}>
                <LinkBack onClick={() => setSeries('normal')} />
                <Heading>Series TLC</Heading>
              </TopBar>
              <DataChannel>
                Data
              </DataChannel>
            </Box>
          </WrapperBox>
        </WrapperMenu>
      </WrapperFlex>
    </div>
  );
};
Menu.propTypes = {
  // eslint-disable-next-line react/require-default-props
  channels: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Menu;
