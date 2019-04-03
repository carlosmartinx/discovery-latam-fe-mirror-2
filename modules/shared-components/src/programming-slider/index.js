import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BoxSlider, Tab } from './styled';

import ProgrammingSliderItem from '../programming-slider-item';
import SliderSlick from '../slider-slick';

const ProgrammingSlider = ({ days }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(days);
  }, []);

  const onClickTab = (day) => {
    const itemsNew = [];
    items.forEach((itemDay) => {
      const item = itemDay;
      if (itemDay.date === day.date) {
        item.active = true;
      } else {
        item.active = false;
      }

      itemsNew.push(item);
    });

    setItems(itemsNew);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slide: 'span',
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true,
    accessibility: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <BoxSlider>
      <SliderSlick settings={settings}>
        {items.map((day => (
          <Tab key={day.text} onClick={() => onClickTab(day)}>
            <ProgrammingSliderItem active={day.active} day={day.text} date={day.date} />
          </Tab>
        )))}
      </SliderSlick>
    </BoxSlider>
  );
};

ProgrammingSlider.propTypes = {
  days: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    active: PropTypes.bool,
  })).isRequired,
};

export default ProgrammingSlider;
