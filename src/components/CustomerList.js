import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

import './CustomerList.css';

const CustomerList = (props) => {
  const customerList = props.customers.map((customer) => {
    return <Customer
            key={customer.id}
            {...customer}
            rentCustomerCallback={props.rentCustomerCallback}
             />
  });

  console.log(customerList)

  return (
    <section>
      <div>
        {customerList}
      </div>
    </section>
  )
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  rentCustomerCallback: PropTypes.func.isRequired,
}

export default CustomerList;
