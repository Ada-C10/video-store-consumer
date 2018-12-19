import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Video from './Video';


class VideoCollection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/')
    .then((response) => {
      this.setState({
        videos: response.data
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    })
  }




  render() {
    const collection = this.state.videos

    const videoCollection = collection.map((video, i) => {
      return <Video
      key={i}
      title={video.title}
      release_date={video.release_date}
      image_url={video.image_url}
      addToRentClickHander={() => this.props.addToRentClickHander(video)}/>
    });

    return (
      <section>
          {videoCollection}
      </section>
    );
  }
}

VideoCollection.PropTypes = {

};
export default VideoCollection;
