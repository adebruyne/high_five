import React, { Component } from 'react';
import '../css/CompaniesListItem.css';

class CompaniesListItem extends Component {
    render() {
        return (
            <div className="single-company">
                <h2>{this.props.companyName}</h2>
                <h4>Status: {this.props.status}</h4>
                <h5>Current Profit: ${this.props.currentProfit}</h5>
            </div>
        )
    }
}

export default CompaniesListItem;