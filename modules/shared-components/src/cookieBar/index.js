/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Button2 = ({ type = 'button', children = 'testing', onClick }) => (
  <div>
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  </div>
);

Button2.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button2;
