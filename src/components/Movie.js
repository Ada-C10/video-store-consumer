import React from 'react';

import './Movie.css';

const Movie = (props) => {
  return (
    <div className="movie">
      <div className="movie__art">
        <img src={ props.data.image_url } />
      </div>
      <div className="movie__info">
        <h3 className="movie__title">
          { props.data.title }
        </h3>
        <p className="movie__release">
          { props.data.release_date }
        </p>
      </div>
      <div className="movie__select">
        <p className="movie__select-link" onClick={ props.selectCB }>
          select me!
        </p>
      </div>
    </div>
  )
}

export default Movie
