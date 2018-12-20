import PropTypes from 'prop-types';
import React from 'react'
import './Customer.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Movie = (props) => {
    // console.log(props);
    const { id, title, releaseDate, image, overview } = props;
    // console.log(image);
    const handleSelect = () => {
        // console.log('this select', id);
        // console.log('this props - movie', id);
        props.selectedMovieCallback(id)
    };

    return (
        <section className="card customer-card">
            <section className="customer-card-content">
                <p className="movie-name">{title}</p>
                <p className="movie-releaseDate">{releaseDate}</p>
                <img src={image} alt={`${title}`} className="movie-image_url" />
                <p className="movie-overview">{overview}</p>
            </section>
                <button className="selectCustomer btn btn-info"
                    onClick={handleSelect}
                    type="button">Select</button>
        </section>
    );
};

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    selectedMovieCallback: PropTypes.func.isRequired,
  }


export default Movie;
