import React, { Component } from 'react';
import '../css/CompanyDetailHolder.css';
import CompanyDetails from './CompanyDetails';
import CompanyContacts from './CompanyContacts';
import Chart from './Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'


//This component houses the detail view of the selcted company
class CompanyDetailHolder extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (

            <div className='company-detail-holder'>
                <div className="container">
                    <h1 className="company-detail-header"><strong>{this.props.currentCompany.company_name}</strong></h1>
                    <div className="company-detail-div-fullscreen">
                        <div className="company-detail-div2-fullscreen">
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
                        <Chart
                            profit={this.props.currentCompany.finance} />
                    </div>
                    <div className="btn-div">
                        <button className="btn-edit-company" onClick={(e) => {
                            e.preventDefault();
                            this.props.handleCompanyEdit(this.props.currentCompany.id)
                        }}><FontAwesomeIcon icon={faEdit} /> Edit </button>
                        <button className="btn-delete-company" onClick={(e) => {
                            e.preventDefault();
                            if (window.confirm('Are you sure you wish to delete this item?'))
                                this.props.handleCompanyDelete(this.props.currentCompany.id)
                        }}><FontAwesomeIcon icon={faTrashAlt} /> Delete </button>
                    </div>
                </div>
            </div>
        )
    }

}


export default CompanyDetailHolder;