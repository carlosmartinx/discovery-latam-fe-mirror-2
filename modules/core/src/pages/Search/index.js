import React, { useEffect, useState } from 'react';
import { Flex, Box } from 'rebass';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { esCodes } from '@discovery-web-app/shared-components/config/tagCodes';

import {
  ContentCard, Ads,
} from '@discovery-web-app/shared-components';
import Page from '../../components/page';
import { SearchBox, LoadMore } from './styled';

// API connection
import getResults from '../../api/search';

const SearchResults = ({ match }) => {
  const [data, setData] = useState({});
  const itemsPerPage = 5;
  const [maxItems, setMaxItems] = useState(itemsPerPage);

  const adsData = {
    bgColor: 'ads-dark',
    adTitle: 'Publicidad',
  };

  const slotIdsDesk = [{
    slotID: esCodes.leaderboard_top,
    slotText: 'Leaderboard_top',
  },
  {
    slotID: esCodes.leaderboard_mid,
    slotText: 'Leaderboard_mid',
  },
  {
    slotID: esCodes.leaderboard_bottom,
    slotText: 'Leaderboard_bottom',
  }];

  const slotIdsMob = [{
    slotID: esCodes.mob_leaderboard_top,
    slotText: 'Mobile_Leaderboard_top',
  },
  {
    slotID: esCodes.mob_leaderboard_mid,
    slotText: 'Mobile_Leaderboard_mid',
  },
  {
    slotID: esCodes.mob_leaderboard_bottom,
    slotText: 'Mobile_Leaderboard_bottom',
  }];

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
        {data.nodos ? (
          <SearchBox>
            {data.nodos.slice(0, maxItems).map((item, index) => {
              if ((index + 1) % itemsPerPage === 0) {
                const concurrence = (index + 1) / itemsPerPage;
                return (
                  <Box key={item.id}>
                    <ContentCard card={item} />
                    <Ads
                      bgColor={adsData.bgColor}
                      adTitle={adsData.adTitle}
                      adSlotConfig={[
                        {
                          adSlotSize: [300, 50],
                          adUnitText: `discoverylatam/${slotIdsMob[concurrence].slotText}`,
                          adSlotId: slotIdsMob[concurrence].slotID,
                        },
                        {
                          adSlotSize: [728, 90],
                          adUnitText: `discoverylatam/${slotIdsDesk[concurrence].slotText}`,
                          adSlotId: slotIdsDesk[concurrence].slotID,
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
              <LoadMore borderRadius={0} onClick={() => loadMore()}>Cargar Más</LoadMore>
            </Box>
            )}
          </SearchBox>
        )
          : (
            <SearchBox>
              {data.message ? data.message : ''}
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
