import React from 'react';
import PropTypes from 'prop-types';
import { Item, Day, Date } from './styled';

const ProgrammingSliderItem = ({ day, date, active }) => (
  <Item className={active && 'active'}>
    <Day fontSize={[16]}>{day}</Day>
    <Date fontSize={[12]}>{date}</Date>
  </Item>
);

ProgrammingSliderItem.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ProgrammingSliderItem.defaultProps = {
  active: false,
};

export default ProgrammingSliderItem;
