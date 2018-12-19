import React, { Component } from 'react';
import axios from 'axios';

import './LibraryContainer.css';
import Movie from './Movie';
import Customer from './Customer';

class LibraryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: [],
    }
  }

  componentDidMount() {
    const type = this.props.type
    const URL = `http://localhost:3000/${ type.toLowerCase() }s`

    axios.get(URL)
      .then((res) => {
        this.setState({ collection: res.data })
      })
      .catch((err) => {
        alert(`hm couldn't load ${this.props.type}s for some reason. try refresh.`)
        console.log(err);
      });
  }

  render() {
    let collection;

    if (this.props.type === 'Movie') {
      collection = this.state.collection.map((e) => {
        return (
          <Movie
          key={ e.external_id }
          data={ e }
          selectCB={ () => { this.props.selectCB(e) } } />
        )
      });
    } else {
      collection = this.state.collection.map((e) => {
        return (
          <Customer
          key={ e.id }
          data={ e }
          selectCB={ () => { this.props.selectCB(e) } } />
        )
      });
    }

    const klass = this.props.type.toLowerCase() + '-container'

    return (
      <div className={ klass }>
        { collection }
      </div>
    )
  }
}

export default LibraryContainer;
