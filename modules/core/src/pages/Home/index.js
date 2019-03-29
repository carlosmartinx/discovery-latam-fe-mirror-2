import React from 'react';
import { Flex, Text, Box } from 'rebass';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Button } from '@discovery-web-app/shared-components';
import Page from '../../components/page';
import { Heading, BoxBase } from './styled';

const Home = () => (
  <Page id="homepage">
    <Flex flexDirection="column">
      <BoxBase>
        <Heading color="magenta">
          <FormattedMessage
            id="Home.Hello"
            defaultMessage="Hello"
          />
        </Heading>
      </BoxBase>
      <Box>
        <NavLink exact to="/test">
          <Text>
            <FormattedMessage
              id="Home.GoToTest"
              defaultMessage="Go to Test page!"
            />
          </Text>
        </NavLink>
      </Box>
      <Button />
    </Flex>
  </Page>
);

export default Home;
