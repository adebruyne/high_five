import React, { Component } from 'react';
import '../css/CompanyDetailHolder.css';
import CompanyDetails from './CompanyDetails';
import CompanyContacts from './CompanyContacts';

class CompanyDetailHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
        this._onEdit = this._onEdit.bind(this);
    }
    render() {

        return (

            <div className='company-detail-holder'>
                {this.props.isEdit ? (
                    <div></div>
                ) : (
                        <div>
                            <h1>Company Detail Holder</h1>
                            <button onClick={(e) => {
                                e.preventDefault();
                                this.props.handleCompanyDelete(this.props.currentCompany.id)
                            }}>Delete this company</button>
                            <button onClick={(e) => {
                                e.preventDefault();
                                this.props.handleCompanyEdit(this.props.currentCompany.id)
                                // this.props.handleCompanyDelete(this.props.currentCompany.id)
                            }}>Edit this company</button>
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
                    )}

            </div>
        )
    }

    _onEdit() {
        this.setState({ isEdit: true })
    }
}


export default CompanyDetailHolder;