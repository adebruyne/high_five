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
                <CompanyDetails />
                <CompanyContacts />
            </div>
        )
    }
}


export default CompanyDetailHolder;