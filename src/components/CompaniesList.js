import React, { Component } from 'react';
import '../css/CompaniesList.css';
import CompanyListItem from './CompaniesListItem';

class CompaniesList extends Component {
    render() {
        return (
            <div className="companies-list ">
                <p>This is the Company List holder</p>
                <CompanyListItem />
                <CompanyListItem />
                <CompanyListItem />
                <CompanyListItem />
                <CompanyListItem />
            </div>
        )
    }
}

export default CompaniesList;