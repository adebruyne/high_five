import React, { Component } from 'react'
import '../css/Home.css';
import CompaniesList from './CompaniesList';
import CompanyDetailHolder from './CompanyDetailHolder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Form from './Form';

// Pulls in mock json data
let mockData = require("../data/mockData.json")

// This is the main app component
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCompany: 1,
            data: mockData.companies,
            shouldDisplayForm: false,
            isEdit: false
        };
    }

    render() {
        const theCurrentCompany = this.state.data.find(theOne => {
            return this.state.selectedCompany === theOne.id;
        })
        return (
            <div className="home">
                <div className="main-holder">
                    {this.state.isEdit ?
                        (<form onSubmit={this._onEditSubmit.bind(this)}>
                            <input type="text"
                                placeholder={theCurrentCompany.company_name}
                                defaultValue={theCurrentCompany.company_name}
                                ref="company_name" />
                            <br />
                            <input type="text"
                                placeholder={theCurrentCompany.company_address.street}
                                defaultValue={theCurrentCompany.company_address.street}
                                ref="street" />
                            <input type="text"
                                placeholder={theCurrentCompany.company_address.city}
                                defaultValue={theCurrentCompany.company_address.city}
                                ref="city" />
                            <input type="text"
                                placeholder={theCurrentCompany.company_address.state}
                                defaultValue={theCurrentCompany.company_address.state}
                                ref="state" />
                            <input type="text"
                                placeholder={theCurrentCompany.company_address.zip}
                                defaultValue={theCurrentCompany.company_address.zip}
                                ref="zip" />
                            <br />
                            <input type="text"
                                placeholder={theCurrentCompany.company_phone}
                                defaultValue={theCurrentCompany.company_phone}
                                ref="company_phone" />
                            <br />
                            <input type="text"
                                placeholder={theCurrentCompany.company_contact.name}
                                defaultValue={theCurrentCompany.company_contact.name}
                                ref="name" />
                            <input type="text"
                                placeholder={theCurrentCompany.company_contact.phone_number}
                                defaultValue={theCurrentCompany.company_contact.phone_number}
                                ref="phone_number" />
                            <input type="text"
                                placeholder={theCurrentCompany.company_contact.email}
                                defaultValue={theCurrentCompany.company_contact.email}
                                ref="email" />
                            <br />
                            <label>Select Status:
                      <select
                                    placeholder={theCurrentCompany.status}
                                    defaultValue={theCurrentCompany.status}

                                    ref="status">
                                    <option value="researching">Researching</option>
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approved</option>
                                    <option value="declined">Declined</option>
                                </select>
                            </label>
                            <br />
                            <input
                                type="text"
                                placeholder={theCurrentCompany.current_profit}
                                defaultValue={theCurrentCompany.current_profit}
                                ref="current_profit" />

                            <button type="submit">Save</button>
                        </form>)
                        : (
                            <CompanyDetailHolder
                                currentCompany={theCurrentCompany}
                                handleCompanyDelete={this._handleDelete}
                                handleCompanyEdit={this._handleEdit}
                                isEdit={this.state.isEdit} />
                        )}
                    <div className="btn-container">
                        <button className="add-btn" onClick={() => {
                            this._handleAdd()
                        }}
                        ><FontAwesomeIcon icon={faPlus} /> Add New Target</button>
                    </div>

                    {this.state.shouldDisplayForm ?
                        <Form onSubmit={fields => this._onFormSubmit(fields)} /> : null}
                    <CompaniesList
                        companies={this.state.data}
                        handleCompanySelection={this._selectCompany} />
                </div>
            </div>
        )
    }


    // handles form submission
    _onFormSubmit = (fields) => {
        console.log(fields)
        let id = Math.floor((Math.random() * 1000) + 1);
        let company_name = fields.companyName;

        let company_address = {
            street: fields.street,
            city: fields.city,
            state: fields.state,
            zip: fields.zip
        };
        let company_phone = fields.company_phone;
        let company_contact = {
            name: fields.name,
            phone_number: fields.phone_number,
            email: fields.email
        };
        let status = fields.status;
        let current_profit = fields.current_profit
        this.setState({
            data: this.state.data.concat({ id, company_name, company_address, company_phone, company_contact, status, current_profit }),
            shouldDisplayForm: false
        })

    }

    //handles company selection - selected company will be displayed in detail
    _selectCompany = (id) => {
        // choose a company to show
        this.setState({
            selectedCompany: id
        });
    }

    //handles deleting functionality
    _handleDelete = (id) => {
        // creates a new array of all companys expcept for the one selected, removing that one from the list
        let newList = this.state.data.filter(company => company.id !== id)
        this.setState({
            data: newList,
            selectedCompany: newList[0].id
        })
    }

    //handles whether to show edit form or not
    _handleEdit = (id) => {
        this.setState({
            isEdit: true
        })
    }

    //handles whether to show new form or not
    _handleAdd = () => {
        console.log('adding clicked')
        this.setState({
            shouldDisplayForm: true
        })

    }

    //handles submission of edited form 
    _onEditSubmit(event) {
        event.preventDefault();
        let id = this.state.selectedCompany
        console.log(id)
        let newUpdatedCompanies = this.state.data
        newUpdatedCompanies = newUpdatedCompanies.map(company => {
            if (company.id === id) {
                company.company_name = this.refs.company_name.value
                company.company_address = {
                    street: this.refs.street.value,
                    city: this.refs.city.value,
                    state: this.refs.state.value,
                    zip: this.refs.zip.value
                }
                company.company_phone = this.refs.company_phone.value;
                company.company_contact = {
                    name: this.refs.name.value,
                    phone_number: this.refs.phone_number.value,
                    email: this.refs.email.value
                };
                company.status = this.refs.status.value;
                company.current_profit = this.refs.current_profit.value
            }
            return company
        });

        this.setState({
            data: newUpdatedCompanies,
            isEdit: false
        })

    }



}

export default Home;