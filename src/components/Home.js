import React, { Component } from 'react'
import '../css/Home.css';

let data = require("../data/mockData.json")
console.log(data)
console.log(data.companies[0].company_name)

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className="home">
                <p>This is the Home</p>
            </div>
        )
    }
}

export default Home;