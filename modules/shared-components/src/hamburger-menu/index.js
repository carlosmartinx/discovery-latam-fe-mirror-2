import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Flex } from 'rebass';
import MiniCard from '../mini-card';
import {
  LinkClose, TopBar, MenuElem,
  WrapperFlex, WrapperMenu, LinkSeries,
  DataChannel, WrapperBox, LinkBack,
} from './styled';

const Menu = ({ channels }) => {
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
                      itemClicked={(key) => {
                        setMore('show');
                        console.log(channels.find(obj => obj.shortname === key));
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
                {series.map(serie => (
                  <LinkSeries
                    mx={2}
                    py={2}
                    key={serie.url}
                    href={serie.url}
                  >
                    {serie.title}
                  </LinkSeries>
                ))}
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
