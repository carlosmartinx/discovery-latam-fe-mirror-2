import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Flex } from 'rebass';
import MiniCard from '../mini-card';
import {
  LinkClose, TopBar, MenuElem,
  WrapperFlex, WrapperMenu, LinkSeries,
  DataChannel, WrapperBox, LinkBack,
} from './styled';

const Menu = ({ channels = [] }) => {
  const [effect, setEffect] = useState('opened');
  const [more, setMore] = useState('hidden');
  const [series, setSeries] = useState(channels[0].series);

  return (
    <div>
      <WrapperFlex className={effect}>
        <WrapperMenu>
          <WrapperBox flexDirection="row" className={more}>
            <Box width="100%">
              <TopBar p={2}><LinkClose onClick={() => setEffect('closed')} /></TopBar>
              <Flex width="100%" flexDirection="row" flexWrap="wrap" py={4}>
                {channels.map(item => (
                  <MenuElem key={item.shortname} width={1 / 6} m={1} mr={0}>
                    <MiniCard
                      title={item.title}
                      logo={item.logo}
                      url={item.url}
                      shortname={item.shortname}
                      idChannel={item.id_channel}
                      series={!!item.series}
                      itemClicked={(key) => {
                        setMore('show');
                        setSeries(channels.find(obj => obj.shortname === key).series);
                      }
                      }
                    />
                  </MenuElem>
                ))}
              </Flex>
            </Box>
            <Box width="100%">
              <TopBar p={2}>
                <LinkBack onClick={() => setMore('normal')} />
                <Heading fontSize={2}>Series</Heading>
              </TopBar>
              <DataChannel>
                {series ? series.map(serie => (
                  <LinkSeries
                    mx={2}
                    py={2}
                    key={serie.url}
                    href={serie.url}
                  >
                    {serie.title}
                  </LinkSeries>
                )) : <Box />}
              </DataChannel>
            </Box>
          </WrapperBox>
        </WrapperMenu>
      </WrapperFlex>
    </div>
  );
};

Menu.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    title: PropTypes.string,
    itemClicked: PropTypes.func,
    shortname: PropTypes.string,
    idChannel: PropTypes.string,
    url: PropTypes.string,
    series: PropTypes.bool,
  })).isRequired,
};

export default Menu;
