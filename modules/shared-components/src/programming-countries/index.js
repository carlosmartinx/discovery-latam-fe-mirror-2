import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Countries, Country } from "./styled";

const ProgrammingCountries = ({ countries }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(countries);
  }, []);

  const onClickTab = country => {
    let itemsNew = [];
    items.map((itemCountry) => {
      if (itemCountry.code == country.code) {
        itemCountry.active = true;
      } else {
        itemCountry.active = false;
      }

      itemsNew.push(itemCountry);
    });

    setItems(itemsNew);
  };

  return (
    <Countries>
      {countries.map((country) => (
        <Country
          key={country.code}
          className={country.active?'active':''}
          onClick={() => onClickTab(country)}
        >
          {country.name}
        </Country>
      ))}
    </Countries>
  );
};

ProgrammingCountries.propTypes = {
  countries: PropTypes.array.isRequired
};

export default ProgrammingCountries;
