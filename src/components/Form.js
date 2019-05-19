import React, { Component } from 'react'
import '../css/Form.css';
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
            <div className="container">
                <form>
                    <label>Company Name:
                    <input
                            placeholder="Company Name"
                            name="companyName"
                            value={this.state.companyName}
                            onChange={e => this._change(e)}
                        /></label>

                    <label>Company Address:
                    <input
                            placeholder="Street"
                            name="street"
                            value={this.state.street}
                            onChange={e => this._change(e)} />
                        <br />
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
                    </label>
                    <label>Company Phone Number:
                    <input
                            placeholder="Company Phone"
                            name="companyPhoneNumber"
                            value={this.state.companyPhoneNumber}
                            onChange={e => this._change(e)} />
                    </label>
                    <label>Company Contact:
                    <input
                            placeholder="Contact Name"
                            name="contactName"
                            value={this.state.contactName}
                            onChange={e => this._change(e)} />
                        <input
                            placeholder="Phone"
                            name="contactNumber"
                            value={this.state.contactNumber}
                            onChange={e => this._change(e)} />
                        <input
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={e => this._change(e)} />
                    </label>
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
                    <label>
                        Current Profit:
                    <input
                            placeholder="Current Profit"
                            name="currentProfit"
                            value={this.state.currentProfit}
                            onChange={e => this._change(e)} />
                    </label>


                    <button
                        className="form-btn"
                        onClick={e => this._onSubmit(e)}>Submit</button>
                </form>
            </div >
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