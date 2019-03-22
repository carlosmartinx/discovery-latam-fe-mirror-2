/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Tab } from "./styled";

import ProgrammingTab from '../programming-tab';
import SliderSlick from '../slider-slick';
// import SliderSlick from '@discovery-web-app/shared-components';

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slide: 'span',
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    accessibility: false,
    lazyLoad: 'ondemand',
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 320,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
    ]
};

const getItems = days => {
    return days.map((day, index) => {
        return (
            <Tab key={index}>
                <ProgrammingTab day={day.day} date={day.date} />
            </Tab>
        );
    });
};

const ProgrammingSlider = ({ days }) => (
    <SliderSlick settings={settings} items={getItems(days)} />
);

ProgrammingSlider.propTypes = {
    days: PropTypes.array.isRequired
};

export default ProgrammingSlider;