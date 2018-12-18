import PropTypes from 'prop-types';
import Customer from './Customer'

const CustomerList = (props) => {
    const customerList = props.customers.map((customer) => {
        return <Customer key={customer.id}
                         selectCustomerCallback={props.onSelectCallback}
                         {...customer} />

    });
    return (
        <section className="customer-card-group">
            {customerList}
        </section>
    )
};


CustomerList.propTypes = {
    customers: PropTypes.array,
    onSelectCallback: PropTypes.func

};

export default CustomerList;