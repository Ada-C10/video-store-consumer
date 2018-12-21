import React from 'react';

import './Movie.css';

const Movie = (props) => {
  return (
    <div className="movie">
      <div className="movie__art">
        <img src={ props.data.image_url } className="pic" />
      </div>
      <div className="movie__info">
        <h3 className="movie__title">
          { props.data.title }
        </h3>
        <p className="movie__release">
          { props.data.release_date }
        </p>
      </div>
      <button className="movie__select" onClick={ props.selectCB }>
        <p className="movie__select-link">
          { props.type === "Search" ? "add to library" : "select me!" }
        </p>
      </button>
    </div>
  )
}

export default Movie
