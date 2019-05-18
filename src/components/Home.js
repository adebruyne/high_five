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
            selectedCompany: mockData.companies[0].id,
            data: mockData
        }
    }

    render() {

        const theCurrentCompany = this.state.data.companies.find(theOne => {
            return this.state.selectedCompany === theOne.id;
        })
        return (

            <div className="home">
                <p>This is the Home</p>
                <CompanyDetailHolder
                    currentCompany={theCurrentCompany}
                    handleCompanyDelete={this._handleDelete} />
                <CompaniesList
                    companies={this.state.data.companies}
                    handleCompanySelection={this._selectCompany} />
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

    _handleDelete = (id) => {
        console.log(`${id} to be deleted`)
    }
}

export default Home;