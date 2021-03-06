import React, { Component } from 'react';
import '../css/CompanyContacts.css';


// This Component displays the selected company contact details
class CompanyContacts extends Component {
    render() {
        return (
            <div className="company-contacts">
                <h3 className="company-contacts-header">Contact Details</h3>
                <p><em>Name</em>: {this.props.contact.name}</p>
                <hr />
                <p><em>Email</em>: {this.props.contact.email}</p>
                <hr />
                <p><em>Phone</em>: {this.props.contact.phone_number}</p>
            </div>
        )
    }
}

export default CompanyContacts;
