import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Notification = (props) => {
  return (
    <div>
      {props.children}
      <button className= "checkout_button" onClick={props.onClick}><FontAwesomeIcon className="barIcon" icon={faBolt}/></button>
    </div>
  )

}

export default Notification;
