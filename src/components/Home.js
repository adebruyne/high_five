import React, { Component } from 'react'
import '../css/Home.css';
import CompaniesList from './CompaniesList';
import CompanyDetailHolder from './CompanyDetailHolder';


// Pulls in mock json data
let mockData = require("../data/mockData.json")


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
        // console.log(this.state.selectedCompany)
        const theCurrentCompany = this.state.data.find(theOne => {
            return this.state.selectedCompany === theOne.id;
        })

        console.log(theCurrentCompany)

        return (

            <div className="home">
                <div className="btn-container">
                    <button className="add-btn" onClick={() => {
                        this._handleAdd()
                    }}
                    >Add a new company</button>
                </div>

                {this.state.shouldDisplayForm ?
                    (<form onSubmit={this.addCompany.bind(this)}>
                        <input type="text" placeholder="Company Name" ref="company_name" />
                        <br />
                        <input type="text" placeholder="Steet" ref="street" />
                        <input type="text" placeholder="City" ref="city" />
                        <input type="text" placeholder="State" ref="state" />
                        <input type="text" placeholder="Zipcode" ref="zip" />
                        <br />
                        <input type="text" placeholder="Company Phone Number" ref="company_phone" />
                        <br />
                        <input type="text" placeholder="Contact Name" ref="name" />
                        <input type="text" placeholder="Contact Phone Number" ref="phone_number" />
                        <input type="text" placeholder="Contact Email" ref="email" />
                        <br />
                        <label>Select Status:
                        <select placeholder="Status" ref="status">
                                <option value="researching">Researching</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="declined">Declined</option>
                            </select>
                        </label>
                        <br />
                        <input type="text" placeholder="Current Profit" ref="current_profit" />

                        <button type="submit">Add company</button>
                    </form>) : null}
                <div className="main-holder">
                    <CompaniesList
                        companies={this.state.data}
                        handleCompanySelection={this._selectCompany}
                    />

                    {this.state.isEdit ?
                        (<form onSubmit={this.onEditSubmit.bind(this)}>
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

                </div>




            </div>
        )
    }




    _selectCompany = (id) => {
        // choose a note to show
        console.log(`you clicked ${id} `)
        this.setState({
            selectedCompany: id
        });
    }

    //Handles deleting functionality
    _handleDelete = (id) => {
        // console.log(`${id} to be deleted`)
        // console.log(this.state.data)
        // creates a new array of all companys expcept for the one selected, removing that one from the list
        let newList = this.state.data.filter(company => company.id !== id)
        // console.log(newList)
        this.setState({
            data: newList,
            selectedCompany: newList[0].id
        })
    }

    _handleEdit = (id) => {
        console.log(`${id} this to be edited`)
        this.setState({
            isEdit: true
        })
    }



    // Handling adding functionality
    _handleAdd = () => {
        console.log('adding clicked')
        this.setState({
            shouldDisplayForm: true
        })

    }

    //Handings adding new Company form
    addCompany(event) {
        event.preventDefault();
        let id = Math.floor((Math.random() * 1000) + 1);
        let company_name = this.refs.company_name.value;
        let company_address = {
            street: this.refs.street.value,
            city: this.refs.city.value,
            state: this.refs.state.value,
            zip: this.refs.zip.value
        };
        let company_phone = this.refs.company_phone.value;
        let company_contact = {
            name: this.refs.name.value,
            phone_number: this.refs.phone_number.value,
            email: this.refs.email.value
        };
        let status = this.refs.status.value;
        let current_profit = this.refs.current_profit.value
        this.setState({
            data: this.state.data.concat({ id, company_name, company_address, company_phone, company_contact, status, current_profit })
        })
        console.log(this.state.data)
        this.refs.company_name.value = '';
        this.refs.street.value = '';
        this.refs.city.value = '';
        this.refs.state.value = '';
        this.refs.zip.value = '';
        this.refs.company_phone.value = '';
        this.refs.name.value = '';
        this.refs.phone_number.value = '';
        this.refs.email.value = '';
        this.refs.email.value = '';
        this.refs.current_profit.value = ''
    }

    onEditSubmit(event) {
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