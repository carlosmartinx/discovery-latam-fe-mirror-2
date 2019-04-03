import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Headline, DateShow, InfoShow, TimeDay, Time, Day, Episode, Description,
} from './styled';

const ProgrammingCard = ({ show }) => (
  <Card>
    <DateShow>
      <TimeDay>
        <Time className={show.idChannel}>{show.time}</Time>
        <Day>{show.date}</Day>
      </TimeDay>
    </DateShow>
    <InfoShow>
      <Headline>{show.title}</Headline>
      <Episode>{show.episode}</Episode>
      <Description>{show.description}</Description>
    </InfoShow>
  </Card>
);

ProgrammingCard.propTypes = {
  show: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    idChannel: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProgrammingCard;
