import React, { Component } from 'react';
import '../css/CompaniesList.css';
import CompanyListItem from './CompaniesListItem';

// This component will house the list of companies
class CompaniesList extends Component {

    render() {
        // loops through each item in the array and creates a list item view 
        let allCompanies = this.props.companies.map(company => {
            console.log(company);
            return < CompanyListItem
                key={company.id}
                company_name={company.company_name}
                status={company.status}
                current_profit={company.current_profit} />
        })

        return (
            <div className="companies-list ">
                <p>This is the Company List holder</p>
                <ul>
                    {allCompanies}
                </ul>

            </div>
        )
    }
}

export default CompaniesList;