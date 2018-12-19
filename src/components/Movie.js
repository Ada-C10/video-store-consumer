import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {

  handleClick = () => {
    //console.log(this.props.title, this.props.id);
    if (this.props.onSelectMovie) { //if onSelectMovie is defined then execute it
      this.props.onSelectMovie(this.props.id, this.props.title);
    }
  }

  handleClickAddRental =() =>{
    if(this.props.onRentalSelect) {
    this.props.onRentalSelect(this.props.id, this.props.title)
  }
}

  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <section>
          {this.props.overview}
        </section>
        <img src={this.props.imageUrl} alt={this.props.title} />
        {this.props.isInLibrary && (
          <button onClick={this.handleClick}>Select for Rental</button>
        )}
        {!this.props.isInLibrary && (
          <button onClick={this.handleClickAddRental}>Add to Rental Library</button>
        )}

      </div>
    )
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  imageUrl: PropTypes.string,
  isInLibrary: PropTypes.bool, //check to see if in library and rentable
  id: PropTypes.number,
  onSelectMovie: PropTypes.func,
  onRentalSelect: PropTypes.func,
  //isInSearch: PropTypes.bool,
};

export default Movie ;
