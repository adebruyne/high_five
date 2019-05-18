import React, { Component } from 'react';
import '../css/CompanyDetailHolder.css';
import CompanyDetails from './CompanyDetails';
import CompanyContacts from './CompanyContacts';

class CompanyDetailHolder extends Component {
    render() {
        console.log(this.props.currentCompany)
        return (
            <div className='company-detail-holder'>
                <h1>Company Detail Holder</h1>
                <h2>{this.props.currentCompany.company_name}</h2>
                <CompanyDetails
                    status={this.props.currentCompany.status}
                    currentProfit={this.props.currentCompany.current_profit}
                    address={this.props.currentCompany.company_address}
                    phone={this.props.currentCompany.company_phone}
                />
                <CompanyContacts
                    contact={this.props.currentCompany.company_contact}
                />
            </div>
        )
    }
}


export default CompanyDetailHolder;