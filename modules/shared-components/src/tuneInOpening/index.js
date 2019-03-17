/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from 'rebass';
import { Root, Headline } from './index.styled';

import samplevideo from './samplevideo.mp4';
import sampleimage from './sampleimage.jpg';

const numbers = ['Facebook', 'Twitter', 'Email'];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

const TuneInOpening = ({background, bgtheme}) => (
  <Root flexDirection={"column"}>
    {background === 'video' ? (
      <video className='videoTag' autoPlay loop muted>
        <source src={samplevideo} type='video/mp4' />
      </video>
    ) : (
    <img src={sampleimage}></img>
    )}

    <Box>
      <img></img>
      <Flex>
        <Text>
          Label 12
        </Text>
        <Text>
          30:30
        </Text>
      </Flex>
    </Box>
    <Headline>
      Headline 28 - 36<br/>
      Two lines
    </Headline>
    <Box>
      <Text>
        De lunes a viernes 10:00 PM por TLC
      </Text>
      <Box>
        <Text>
          Consulta toda la programación
        </Text>
      </Box>
    </Box>
    <Box>
      <Headline>Headline 22-28px</Headline>
      <Flex>
        <Text>Comparte</Text>
        <ul>
          {listItems}
        </ul>
      </Flex>
    </Box>
    
  </Root>
);

TuneInOpening.propTypes = {
  background: PropTypes.string,
};

export default TuneInOpening;