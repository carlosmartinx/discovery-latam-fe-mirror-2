import React, { useEffect, useState } from 'react';
import { Flex, Box } from 'rebass';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { esCodes } from '@discovery-web-app/shared-components/config/tagCodes';

import {
  ContentCard, Ads,
} from '@discovery-web-app/shared-components';
import Page from '../../components/page';
import {
  SearchBox, LoadMore, Heading, DefaulMessage,
} from './styled';

// API connection
import getResults from '../../api/search';

const SearchResults = ({ match }) => {
  const [data, setData] = useState({});
  const itemsPerPage = 10;
  const [maxItems, setMaxItems] = useState(itemsPerPage);

  const adsData = {
    bgColor: 'ads-dark',
    adTitle: 'Publicidad',
  };

  const loadMore = () => {
    setMaxItems(maxItems + itemsPerPage);
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const results = await getResults(match.params.searchTerm);
        setData(results.data);
      } catch (error) {
        setData(error);
      }
    };
    fetchResults();
  }, [match.params.searchTerm]);

  global.console.log('history', data);
  return (
    <Page id="search" background="#000f24">
      <Flex flexDirection="column">
        <Heading>
          Resultados de busqueda:
          {' '}
          {match.params.searchTerm}
        </Heading>
        {data.nodos ? (
          <SearchBox>
            {data.nodos.slice(0, maxItems).map((item, index) => {
              if (index + 1 === 5) {
                return (
                  <Box key={item.id}>
                    <ContentCard card={item} />
                    <Ads
                      bgColor={adsData.bgColor}
                      adTitle={adsData.adTitle}
                      adSlotConfig={[
                        {
                          adSlotSize: [300, 50],
                          adUnitText: 'discoverylatam/Mobile_Leaderboard_mid',
                          // TODO: Validate codes with Internationalization
                          adSlotId: esCodes.mob_leaderboard_mid,
                        },
                        {
                          adSlotSize: [728, 90],
                          adUnitText: 'discoverylatam/Leaderboard_mid',
                          // TODO: Validate codes with Internationalization
                          adSlotId: esCodes.leaderboard_mid,
                        },
                      ]}
                    />
                  </Box>
                );
              }
              return <Box key={item.id}><ContentCard card={item} /></Box>;
            })}
            {maxItems < data.nodos.length && (
            <Box>
              {/* TODO: Change text "Cargar más" to internationalization text */}
              <LoadMore borderRadius={0} onClick={() => loadMore()}>Cargar Más</LoadMore>
            </Box>
            )}
            <Ads
              bgColor={adsData.bgColor}
              adTitle={adsData.adTitle}
              adSlotConfig={[
                {
                  adSlotSize: [300, 50],
                  adUnitText: 'discoverylatam/Mobile_Leaderboard_bottom',
                  // TODO: Validate codes with Internationalization
                  adSlotId: esCodes.mob_leaderboard_bottom,
                },
                {
                  adSlotSize: [728, 90],
                  adUnitText: 'discoverylatam/Leaderboard_bottom',
                  // TODO: Validate codes with Internationalization
                  adSlotId: esCodes.leaderboard_bottom,
                },
              ]}
            />
          </SearchBox>
        )
          : (
            <SearchBox>
              {data.message ? (
                <DefaulMessage>
                  {/* TODO: Change text "Lo sentimos" to internationalization text */}
                  <span>Lo sentimos</span>
                  {data.message}
                </DefaulMessage>
              )
                : (
                  <DefaulMessage>
                    {/* TODO: Change text "Cargando" to internationalization text */}
                    Cargando
                  </DefaulMessage>
                )}
            </SearchBox>
          )}
      </Flex>
    </Page>
  );
};

SearchResults.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

export default withRouter(SearchResults);
