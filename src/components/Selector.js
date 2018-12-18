import React from 'react';
import PropTypes from 'prop-types';
import './Selector.css';

const Selector = ({selectorType, selected}) => {
  return (
    <div>
      <label>
        Selected {selectorType}
      </label>
      <span>
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
