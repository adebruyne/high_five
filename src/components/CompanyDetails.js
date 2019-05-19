import React, { Component } from 'react';
import '../css/CompanyDetails.css';

// This Component displays the selected companies details
class CompanyDetails extends Component {
    render() {
        return (
            <div className="company-specifics">
                <p><em>Status</em>: {this.props.status}</p>
                <p><em>Currrent Profit</em>: ${this.props.currentProfit}</p>
                <p><em>Company Address</em>Company Address: <br />
                    {this.props.address.street}  <br />
                    {this.props.address.city}, {this.props.address.state} {this.props.address.zip}</p>
                <p><em>Company Phone</em>: {this.props.phone} </p>
            </div>
        )
    }
}

export default CompanyDetails;