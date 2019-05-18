import React, { Component } from 'react'
import '../css/Home.css';
import CompaniesList from './CompaniesList';

// Pulls in mock json data
let mockData = require("../data/mockData.json")


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: mockData
        }
    }

    render() {
        return (
            <div className="home">
                <p>This is the Home</p>
                <CompaniesList
                    companies={this.state.data.companies} />
            </div>
        )
    }
}

export default Home;