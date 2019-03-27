import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BoxSlider, Tab } from "./styled";

import ProgrammingSliderItem from '../programming-slider-item';
import SliderSlick from '../slider-slick';
// import SliderSlick from '@discovery-web-app/shared-components';

const ProgrammingSlider = ({ days }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(days);
  }, []);

  const onClickTab = day => {
    let itemsNew = [];
    items.map((itemDay) => {
      if (itemDay.date == day.date) {
        itemDay.active = true;
      } else {
        itemDay.active = false;
      }

      itemsNew.push(itemDay);
    });

    setItems(itemsNew);
  };

  let settings = {
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
            slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1
        }
      },
      {
        breakpoint: 414,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <BoxSlider>
      <SliderSlick settings={settings}>
        {items.map((day) => (
          <Tab key={day.day} onClick={() => onClickTab(day)}>
            <ProgrammingSliderItem active={day.active?true:false} day={day.day} date={day.date} />
          </Tab>
        ))}
      </SliderSlick>
    </BoxSlider>
  );
};

ProgrammingSlider.propTypes = {
  days: PropTypes.array.isRequired
};

export default ProgrammingSlider;
