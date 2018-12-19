import React from 'react';
import './styles/Movie.css';


const SearchHit = ({id, title, overview, release_date, image_url}) => {

  const image_alt_tag = `Movie poster for ${title}`;

  return (
    <div className="movie-item">
      <img className="movie-item__image" src={image_url} alt={image_alt_tag}/>
      <div className="movie-item__details">
        <h2>{title}</h2>
        <h3>{release_date}</h3>
        <p>{overview}</p>
      </div>
      <button className="movie-item__select-button">Add to Library</button>
    </div>
  );
};


export default SearchHit;
