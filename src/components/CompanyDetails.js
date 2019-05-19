import React, { Component } from 'react';
import '../css/CompanyDetails.css';

// This Component displays the selected companies details
class CompanyDetails extends Component {
    render() {
        return (
            <div className="company-specifics">
                <h3 className="company-specifics-header">Company Details</h3>
                <p><em>Status</em>: {this.props.status}</p>
                <hr />
                <p><em>Currrent Profit</em>: ${this.props.currentProfit}</p>
                <hr />
                <p><em>Company Address</em>: <br />
                    {this.props.address.street}  <br />
                    {this.props.address.city}, {this.props.address.state} {this.props.address.zip}</p>
                <hr />
                <p><em>Company Phone</em>: {this.props.phone} </p>
            </div>
        )
    }
}

export default CompanyDetails;