import React, { Component } from 'react';
import '../css/NewCompanyForm.css';

class NewCompanyForm extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (<div className="new-company">
            <h4>This is the form</h4>
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    Company Name:
                <input type="text"
                        ref="company_name"
                    ></input>
                </label>
            </form>
        </div>)
    }


}

export default NewCompanyForm;