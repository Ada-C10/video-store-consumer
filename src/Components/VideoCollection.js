import React from 'react';
import axios from 'axios';
import Video from './Video';


class VideoCollection extends React.Component {

  constructor() {
    super();

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
      image_url={video.image_url}/>
    });

    return (
      <section>
          {videoCollection}
      </section>
    );
  }

}

export default VideoCollection;
