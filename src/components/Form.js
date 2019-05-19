import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            companyPhoneNumber: '',
            contactName: '',
            contactNumber: '',
            email: '',
            status: "Researching",
            currentProfit: ''
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        placeholder="Company Name"
                        name="companyName"
                        value={this.state.companyName}
                        onChange={e => this._change(e)} />
                    <input
                        placeholder="Street"
                        name="street"
                        value={this.state.street}
                        onChange={e => this._change(e)} />
                    <input
                        placeholder="City"
                        name="city"
                        value={this.state.city}
                        onChange={e => this.change(e)} />
                    <input
                        placeholder="State"
                        name="state"
                        value={this.state.state}
                        onChange={e => this._change(e)} />
                    <input
                        placeholder="Zip Code"
                        name="zip"
                        value={this.state.zip}
                        onChange={e => this._change(e)} />
                    <input
                        placeholder="Company Phone"
                        name="companyPhoneNumber"
                        value={this.state.companyPhoneNumber}
                        onChange={e => this._change(e)} />
                    <input
                        placeholder="Contact Name"
                        name="contactName"
                        value={this.state.contactName}
                        onChange={e => this._change(e)} />
                    <input
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={e => this._change(e)} />
                    <input
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={e => this._change(e)} />
                    <label>Select Status:
                        <select
                            placeholder="Status"
                            name="status"
                            onChange={e => this._change(e)}
                        >
                            <option value="researching">Researching</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="declined">Declined</option>
                        </select>
                    </label>
                    <input
                        placeholder="Current Profit"
                        name="currentProfit"
                        value={this.state.currentProfit}
                        onChange={e => this._change(e)} />

                    <button onClick={e => this._onSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }

    //handles change event for each input field
    _change = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //handles passing form state up to parent component (Home.js) to be added to the list of companies
    _onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        //clears all fields after submitting 
        this.setState({
            companyName: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            companyPhoneNumber: '',
            contactName: '',
            contactNumber: '',
            email: '',
            status: "Researching",
            currentProfit: ''
        })
    }
}


export default Form;