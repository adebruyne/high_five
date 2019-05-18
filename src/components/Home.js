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
        }
    }



    render() {
        console.log(this.state.selectedCompany)
        const theCurrentCompany = this.state.data.find(theOne => {
            return this.state.selectedCompany === theOne.id;
        })
        return (

            <div className="home">
                <p>This is the Home</p>
                <CompanyDetailHolder
                    currentCompany={theCurrentCompany}
                    handleCompanyDelete={this._handleDelete} />
                <CompaniesList
                    companies={this.state.data}
                    handleCompanySelection={this._selectCompany}
                    handleAddingCompany={this._handleAdd} />
            </div>
        )
    }




    _selectCompany = (id) => {
        // choose a note to show
        // console.log(`you clicked ${id} `)
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

    // Handling adding functionality
    _handleAdd = () => {
        console.log('adding clicked')
    }

}

export default Home;