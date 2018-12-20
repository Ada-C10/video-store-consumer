import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button } from 'react-bootstrap';



class Movie extends Component {

  handleClick = () => {
    //console.log(this.props.title, this.props.id);
    if (this.props.onSelectMovie) { //if onSelectMovie is defined then execute it
      this.props.onSelectMovie(this.props.id, this.props.title, this.props.imageUrl);
    }
  }

  handleClickAddRental =() =>{
    if(this.props.onRentalSelect) {
    this.props.onRentalSelect(this.movie)
  }
}

  render() {


    return (
      <div className="pb-4">

      <Grid>

       <Row className="show-grid">
         <Col xs={6} md={4}>
           <img src={this.props.imageUrl} alt={this.props.title}/>
         </Col>
         <Col xs={6}  md={4} className="d-flex align-items-center">
           <h4>{this.props.overview}</h4>
         </Col>
         <Col xs={6} md={4} className="d-flex align-items-center">
           {this.props.isInLibrary && (
             <Button bsStyle="info" onClick={this.handleClick}>Select for Rental</Button>
           )}
           {!this.props.isInLibrary && (
             <Button bsStyle="info" onClick={this.handleClickAddRental}>Add to Rental Library</Button>
           )}
         </Col>

       </Row>
      </Grid>
      </div>


        // <Media>
        //  <Media.Left>
        //      <img src={this.props.imageUrl} alt={this.props.title} />
        //  </Media.Left>
        //
        //  <Media.Body>
        //    <Media.Heading>{this.props.title}</Media.Heading>
        //    <p>
        //     {this.props.overview}
        //    </p>
        //
        //       {this.props.isInLibrary && (
        //         <Button bsStyle="info" onClick={this.handleClick}>Select for Rental</Button>
        //       )}
        //       {!this.props.isInLibrary && (
        //         <Button bsStyle="info" onClick={this.handleClickAddRental}>Add to Rental Library</Button>
        //       )}
        //
        //   </Media.Body>
        // </Media>
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
