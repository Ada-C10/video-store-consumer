import React from 'react';
// import './RecentSubmission.css';

class Library extends React.Component  {

  constructor(props) {
    super(props)
    this.state = {
      rentals: []
    }
  }
  componentDidMount(){
  }
  render() {
    return (
      <div >
        <h1>
          You are in Library!
        </h1>
      </div>
    );
  }
}

export default Library;
