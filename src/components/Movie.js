import PropTypes from 'prop-types';
import React from 'react'
import './Customer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, OverlayTrigger, Popover } from 'react-bootstrap'


const Movie = (props) => {
    // console.log(props);
    const { id, title, releaseDate, image, overview } = props;
    // console.log(image);
    const handleSelect = () => {
        // console.log('this select', id);
        // console.log('this props - movie', id);
        props.selectedMovieCallback(id)
    };
    const popoverHoverFocus = (
        <Popover id="popover-trigger-hover-focus" title="Movie Description">
            <strong>{title}</strong> {overview}
        </Popover>
    );

    return (
        <section className="card customer-card">
            <section className="customer-card-content">
                <p className="movie-name">{title}</p>
                <p className="movie-releaseDate">{releaseDate}</p>
                <img src={image} alt={`${title}`} className="movie-image_url" />
                <OverlayTrigger
                    trigger={['hover', 'focus']}
                    placement="right"
                    overlay={popoverHoverFocus}
                >
                    <Button><FontAwesomeIcon icon="info-circle" size='2x'/></Button>
                </OverlayTrigger>
            </section>
                <button className="selectCustomer btn btn-info"
                    onClick={handleSelect}
                    type="button">Select <FontAwesomeIcon icon="chevron-circle-up"/></button>
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
