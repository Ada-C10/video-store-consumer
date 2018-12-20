import React from 'react';

import './StatusBar.css';

const StatusBar = (props) => {
  return (
    <div className="statuscontainer">
      <div className="statusbar">
        <p className={ props.status ? "status" : "blankstatus" }>
          { props.status }
        </p>
      </div>
    </div>
  )
}

export default StatusBar;
