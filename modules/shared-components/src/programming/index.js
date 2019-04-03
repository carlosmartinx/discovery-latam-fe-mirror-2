import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'rebass';
// import { Root } from "./styled";

import BulletTitle from '../bullet-title';
import ProgrammingCountries from '../programming-countries';
import ProgrammingSlider from '../programming-slider';
import ProgrammingCard from '../programming-card';

const Programming = ({ countries, days, shows }) => (
  <div>
    <Flex>
      <Box width={1 / 2}>
        <BulletTitle barcolor="default" backtheme="dark" titleContent="Programación" />
      </Box>
      <Box width={1 / 2} mt={4} mb={4}>
        <ProgrammingCountries countries={countries} />
      </Box>
    </Flex>
    <Box>
      <ProgrammingSlider days={days} />
    </Box>
    <Box mt={3}>
      {shows.map((show, index) => (
        <ProgrammingCard
          key={show.id || index}
          title={show.title}
          episode={show.episode}
          description={show.description}
          time={show.time}
          date={show.date}
        />
      ))}
    </Box>
  </div>
);

Programming.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
  })).isRequired,
  days: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    active: PropTypes.bool,
  })).isRequired,
  shows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

export default Programming;
