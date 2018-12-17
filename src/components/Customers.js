import React, { Component} from 'react';

class Customer extends Component {
  componentDidMount() {
    axios
      .get(localhost)
      .then(response => {
        const cards = response.data.map(card => {
          const newCard = {
            ...card.card
          };

          return newCard;
        });

        this.setState({
          cards: cards,
          errorMessage: null
        });
      })
      .catch(error => {
        console.log(error.message);
        this.setState({ errorMessage: error.message });
      });
  }
  return  <h2> Customers!!!! </h2>
}


export default Customers;
