import React from 'react';
import { Flex, Text, Box } from 'rebass';
import { NavLink } from 'react-router-dom';
import { Heading, BoxBase } from './styled';

const App = () => (
  <Flex flexDirection="column">
    <BoxBase>
      <Heading color="magenta">Hello</Heading>
    </BoxBase>
    <Box>
      <NavLink exact to="/test">
        <Text>Go to Test page!</Text>
      </NavLink>
    </Box>
  </Flex>
);

export default App;
