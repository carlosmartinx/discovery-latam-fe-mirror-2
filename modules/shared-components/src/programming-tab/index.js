/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Tab, Day, Date } from "./styled";

const ProgrammingTab = ({ day, date }) => (
    <Tab>
        <Day>{day}</Day>
        <Date>{date}</Date>
    </Tab>
);

ProgrammingTab.propTypes = {
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default ProgrammingTab;