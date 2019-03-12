/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', children, onClick }) => (
  <div>
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  </div>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOf(PropTypes.element, PropTypes.func, PropTypes.element),
  onClick: PropTypes.func,
};

export default Button;
