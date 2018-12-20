import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



class Customer  extends Component {

  handleClickOnCustomer = () => {
    if (this.props.onSelectCustomer) {
      this.props.onSelectCustomer(this.props.name);
    }
  }

  render() {
    return (
      <div>
      <Grid>

       <Row className="show-grid">
         <Col xs={6} md={4}>
           <h4>{this.props.name}</h4>
         </Col>
         <Col xs={6} md={4}>
           <h4>{this.props.phone}</h4>
         </Col>
         <Col xs={6} md={4}>
           <Button bsStyle="info" onClick={this.handleClickOnCustomer}>Select for Rental</Button>
         </Col>

       </Row>
      </Grid>
      </div>
    )
  }
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  onSelectCustomer: PropTypes.func,
};

export default Customer ;
