import React, { Component } from 'react';
import '../css/NewCompanyForm.css';

class NewCompanyForm extends Component {
    render() {
        return (<div className="new-company">
            <h4>This is the form</h4>
            <form>
                <label>
                    Company Name:
                <input type="text"></input>
                </label>
            </form>
        </div>)
    }
}

export default NewCompanyForm;