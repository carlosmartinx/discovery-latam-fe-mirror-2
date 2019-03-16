/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Flex, Box } from 'rebass';

import MiniCard from '.';

const logo = "http://discoverydrupalbackend-1795829284.us-east-1.elb.amazonaws.com/sites/default/files/logos/food.svg";

storiesOf('Mini Card', module)
  .add('with image', () => {
    return <Flex flexDirection="column"><Box width={[ 1 / 6 ]}><MiniCard logo={logo} title="Food" onClick={action('opened')}></MiniCard></Box></Flex>
  });
