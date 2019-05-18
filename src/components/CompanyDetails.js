import React, { Component } from 'react';
import '../css/CompanyDetails.css';

// This Component displays the selected companies details
class CompanyDetails extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="company-specifics">
                <p>Status: {this.props.status}</p>
                <p>Currrent Profit: ${this.props.currentProfit}</p>
                <p>Company Address: <br />
                    {this.props.address.street}  <br />
                    {this.props.address.city}, {this.props.address.state} {this.props.address.zip}</p>
                <p>Company Phone: {this.props.phone} </p>
            </div>
        )
    }
}

export default CompanyDetails;