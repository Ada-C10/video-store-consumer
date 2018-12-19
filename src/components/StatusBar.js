import React from 'react';

import './StatusBar.css';

const StatusBar = (props) => {
  return (
    <div className="statusbar">
      <p className="status">
        { props.status }
      </p> 
    </div>
  )
}

export default StatusBar;
