/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Card, Headline, DateShow, InfoShow, TimeDay, Time, Day, Episode, Description } from "./styled";

const ProgrammingCard = ({ title, episode, description, time, date }) => (
  <Card>
    <DateShow>
      <TimeDay>
        <Time>{time}</Time>
        <Day>{date}</Day>
      </TimeDay>
    </DateShow>
    <InfoShow>
      <Headline>{title}</Headline>
      <Episode>{episode}</Episode>
      <Description>{description}</Description>
    </InfoShow>
  </Card>
);

ProgrammingCard.propTypes = {
  title: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default ProgrammingCard;
