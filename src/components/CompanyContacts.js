import React, { Component } from 'react';
import '../css/CompanyContacts.css';

class CompanyContacts extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="company-contacts">
                <h6>Contact</h6>
                <p>Name: {this.props.contact.name}</p>
                <p>Email: {this.props.contact.email}</p>
                <p>Phone: {this.props.contact.phone_number}</p>
            </div>
        )
    }
}

export default CompanyContacts;
