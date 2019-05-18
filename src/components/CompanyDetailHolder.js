import React, { Component } from 'react';
import '../css/CompanyDetailHolder.css'

class CompanyDetailHolder extends Component {
    render() {
        console.log(this.props.currentCompany)
        return (
            <div className='company-detail-holder'>
                <h1>Company Detail Holder</h1>
            </div>
        )
    }
}


export default CompanyDetailHolder;