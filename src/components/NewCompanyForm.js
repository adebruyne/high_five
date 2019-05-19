import React, { Component } from 'react';
import '../css/NewCompanyForm.css';

class NewCompanyForm extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (<div className="new-company">
            <form onSubmit={(e) => console.log("clicky")}>
                <input type="text" placeholder="Company Name" ref="company_name" />
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
            </form>
        </div>)
    }


}

export default NewCompanyForm;