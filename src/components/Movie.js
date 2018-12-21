import React from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends React.Component {
    addToLibrary = () => {
        const url = `https://the-katie-alice-vs-api.herokuapp.com/movies`;
        const {title, external_id, image_url, release_date, overview} = this.props
        const movie = {
            title,
            external_id,
            image_url: image_url.slice(31),
            release_date,
            overview
        }

        axios.post(url, movie)
            .then(()=> {
                this.props.setMessages("Successfully added movie");
            })
            .catch(() => {
                this.props.setMessages("Movie already exists in Library");
            })
    }

    selectMovie = () => {
        this.props.getMovie(this.props.id, this.props.title);
    }

    render() {
        const {title, image_url, path, overview} = this.props;
        return (
            <section className="individual_movie">
                <img src={image_url} alt={title} className={path === "/library" ? "movie_image_library" : "movie_image_search"} />
                {path === "/library" && <section className="movie_description_container" onClick={path === "/library" ? this.selectMovie : undefined}>
                    <div className="overview">
                        <p>
                            <strong>{title}</strong>
                        </p>
                        {overview}
                    </div>
                </section>}
                {path === "/search" && 
                    <button onClick={this.addToLibrary} className="movie_button">
                        Add to Library
                    </button>}
            </section>
        )
    }
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  external_id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  image_url: PropTypes.string.isRequired,
  getMovie: PropTypes.func,
  path: PropTypes.string.isRequired,
  movies: PropTypes.array,
  setMessages: PropTypes.func.isRequired,
};

export default Movie;
