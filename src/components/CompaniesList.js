import React, { Component } from 'react';
import '../css/CompaniesList.css';
import CompanyListItem from './CompaniesListItem';

// This component will house the list of companies
class CompaniesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            should_display_form: false
        }
    }
    render() {
        // loops through each item in the array and creates a list item view 
        let allCompanies = this.props.companies.map(company => {
            // console.log(company);
            return < CompanyListItem
                key={company.id}
                id={company.id}
                companyName={company.company_name}
                status={company.status}
                currentProfit={company.current_profit}
                handleClick={this.props.handleCompanySelection} />
        })

        return (
            <div className="companies-list ">
                <p>This is the Company List holder</p>
                <button onClick={(e) => {
                    e.preventDefault();
                    this.props.handleAddingCompany()
                }}
                >Add a new company</button>
                <ul>
                    {allCompanies}
                </ul>

            </div>
        )
    }
}

export default CompaniesList;