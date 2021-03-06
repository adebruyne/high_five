import React, { Component } from 'react'
import CompaniesList from './CompaniesList';
import CompanyDetailHolder from './CompanyDetailHolder';
import Form from './Form';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
        // find the company selected to display in detail view
        let theCurrentCompany = this.state.data.find(theOne => {
            return this.state.selectedCompany === theOne.id;
        })

        return (
            <div className="home">
                <div className="main-holder">
                    {/* Should display Edit form or company details */}
                    {this.state.isEdit ?
                        (<form
                            className="edit-form container"
                            onSubmit={this._onEditSubmit.bind(this)}>
                            <h3>Edit Company</h3>
                            <label>Company Name:
                                <input type="text"
                                    placeholder={theCurrentCompany.company_name}
                                    defaultValue={theCurrentCompany.company_name}
                                    ref="company_name" />
                            </label>
                            <br />
                            <label>Company Address:
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
                            </label>
                            <br />
                            <label>Company Phone Number:
                            <input type="text"
                                    placeholder={theCurrentCompany.company_phone}
                                    defaultValue={theCurrentCompany.company_phone}
                                    ref="company_phone" />
                            </label>
                            <br />
                            <label>Company Contact:
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
                            </label>
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
                            <label>Current Profit:
                            <input
                                    type="text"
                                    placeholder={theCurrentCompany.current_profit}
                                    defaultValue={theCurrentCompany.current_profit}
                                    ref="current_profit" />
                            </label>

                            <button className="save-btn" type="submit">Save</button>
                        </form>)
                        : (
                            <CompanyDetailHolder
                                currentCompany={theCurrentCompany}
                                handleCompanyDelete={this._handleDelete}
                                handleCompanyEdit={this._handleEdit}
                                isEdit={this.state.isEdit} />
                        )}
                    {/* Add new Target button */}
                    <div className="btn-container">
                        <button className="add-btn" onClick={() => {
                            this._handleAdd()
                        }}
                        ><FontAwesomeIcon icon={faPlus} /> Add New Target</button>
                    </div>
                    {/* Should display add new target form */}
                    {this.state.shouldDisplayForm ?
                        <Form
                            onSubmit={fields => this._onFormSubmit(fields)}
                        /> : null}
                    {/* Comapny List */}
                    <CompaniesList
                        companies={this.state.data}
                        handleCompanySelection={this._selectCompany} />
                </div>
            </div>
        )
    }

    // ******************************
    //  CREATE
    // ******************************

    //handles whether to show new form or not
    _handleAdd = () => {
        console.log('adding clicked')
        this.setState({
            shouldDisplayForm: true
        })

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
        let company_phone = fields.companyPhoneNumber;
        let company_contact = {
            name: fields.contactName,
            phone_number: fields.contactNumber,
            email: fields.email
        };
        let status = fields.status;
        let current_profit = fields.currentProfit
        let finance = [
            {
                year: 2010,
                profit: fields.twentyten
            },
            {
                year: 2011,
                profit: fields.twentyeleven
            },
            {
                year: 2012,
                profit: fields.twentytwelve
            },
            {
                year: 2013,
                profit: fields.twentythirteen
            },
            {
                year: 2014,
                profit: fields.twentyfourteen
            },
            {
                year: 2015,
                profit: fields.twentyfifteen
            },
            {
                year: 2016,
                profit: fields.twentysixteen
            },
            {
                year: 2017,
                profit: fields.twentyseventeen
            },
            {
                year: 2018,
                profit: fields.twentyeighteen
            },


        ]
        this.setState({
            data: this.state.data.concat({ id, company_name, company_address, company_phone, company_contact, status, current_profit, finance }),
            shouldDisplayForm: false
        })

    }
    // *****************************
    //  READ
    // *****************************

    //handles company selection - selected company will be displayed in detail
    _selectCompany = (id) => {
        // choose a company to show
        this.setState({
            selectedCompany: id
        });
    }
    // ******************************
    //  UPDATE 
    // ******************************

    //handles whether to show edit form or not
    _handleEdit = (id) => {
        this.setState({
            isEdit: true
        })
    }

    //handles submission of edited form 
    _onEditSubmit(event) {
        event.preventDefault();
        let id = this.state.selectedCompany
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

    // *****************************
    //  DELETE
    // ******************************

    //handles deleting functionality
    _handleDelete = (id) => {
        // creates a new array of all companys expcept for the one selected, removing that one from the list
        let newList = this.state.data.filter(company => company.id !== id)
        this.setState({
            data: newList,
            selectedCompany: newList[0].id
        })
    }
}

export default Home;