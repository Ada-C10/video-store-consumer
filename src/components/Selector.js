import React from 'react';
import PropTypes from 'prop-types';
import './Selector.css';

const Selector = ({selectorType, selected}) => {
  return (
    <div className="selector">
      <label>
        {selectorType}:
      </label>
      <span className="selected">
        {selected}
      </span>
    </div>
  );
}

Selector.propTypes = {
  selectorType: PropTypes.string,
  selected: PropTypes.string,
};

export default Selector;
