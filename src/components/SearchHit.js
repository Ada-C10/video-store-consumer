import React from 'react';


const SearchHit = ({id, title, overview, release_date, image_url}) => {

  return (
    <div>
      <ul>
        <li>{title}</li>
      </ul>
    </div>
  );
};


export default SearchHit;
