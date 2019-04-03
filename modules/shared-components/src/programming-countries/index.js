import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Countries, Country } from './styled';

const ProgrammingCountries = ({ countries }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(countries);
  }, []);

  const onClickTab = (country) => {
    const itemsNew = [];
    items.forEach((itemCountry) => {
      const item = itemCountry;
      if (itemCountry.code === country.code) {
        item.active = true;
      } else {
        item.active = false;
      }

      itemsNew.push(item);
    });

    setItems(itemsNew);
  };

  return (
    <Countries>
      {countries.map((country, index) => (
        <Country
          key={country.code || index}
          className={country.active ? 'active' : ''}
          onClick={() => onClickTab(country)}
        >
          {country.name}
        </Country>
      ))}
    </Countries>
  );
};

ProgrammingCountries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
  })).isRequired,
};

export default ProgrammingCountries;
