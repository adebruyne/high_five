import React, { Component } from 'react'


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
            <div>
                <p>This is the Home</p>
            </div>
        )
    }
}

export default Home;