import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

import VideoCollection from './VideoCollection'

import CustomerCollection from './CustomerCollection';
// import Search from '/Search';

class VideoStore extends React.Component {


  constructor() {
    super();

  }


  render() {
    return (
      <div>
      <VideoCollection />
      <CustomerCollection />
      </div>
    );
  }
}

export default VideoStore;
