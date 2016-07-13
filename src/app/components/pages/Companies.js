import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drilldown from '../Drilldown';
import VerticalNavbar from '../VerticalNavbar';
import Banner from '../Banner';
require('../../styles/import.scss');

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: "#00A9E0",
		accent1Color: "#EA7600",
		pickerHeaderColor: "#00A9E0",
	},
	datePicker: {
		selectColor: "#00A9E0",
	}
});

const companies = [
  {id:0, company: "Amked Technologies", size: "50", industry: "Manufacturing", city: "Atlanta", state: "MA", postedJobs: "4", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "forProfit"},
  {id:1, company: "Axis Inc.", size: "35", industry: "Software", city: "Boston", state: "MA", postedJobs: "2", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "nonProfit"},
  {id:2, company: "Prestige Worldwide", size: "100", industry: "Venture Capitalist", city: "Miami", state: "MA", postedJobs: "7", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "government"},
  {id:3, company: "Edna Rubber Co.", size: "400", industry: "Tires", city: "Philadelphia", state: "MA", postedJobs: "9", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "onCampus"},
  {id:4, company: "Redwood Investments", size: "45", industry: "Investment Banking", city: "San Francisco", state: "MA", postedJobs: "4", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "government"},
  {id:5, company: "Clark Trading Inc.", size: "50", industry: "Hedge Fund", city: "Chicago", state: "MA", postedJobs: "3", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "nonProfit"},
  {id:6, company: "Alto Air", size: "80", industry: "Airline", city: "Nantucket", state: "MA", postedJobs: "6", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "forProfit"},
  {id:7, company: "Bali Productions", size: "60", industry: "Film Production", city: "Salem", state: "MA", postedJobs: "4", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "nonProfit"},
  {id:8, company: "Donnelin's Grocery", size: "75", industry: "Produce Chain", city: "Houston", state: "MA", postedJobs: "5", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "government"},
  {id:9, company: "FastAgro Inc.", size: "80", industry: "Food Production", city: "Dallas", state: "MA", postedJobs: "4", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", type: "onCampus"}
];

const tableHeaders = {
	forProfit: {company: "Company", size: "Size", industry: "Industry", city: "City", state: "State", postedJobs: "Jobs Posted", alumniCount: "# Alumni", contact: "Contact Name", email: "Contact E-mail"},
	nonProfit: {company: "Company", size: "Size", industry: "Industry", city: "City", state: "State", postedJobs: "Jobs Posted", alumniCount: "# Alumni", contact: "Contact Name", email: "Contact E-mail"},
	government: {company: "Company", size: "Size", industry: "Industry", city: "City", state: "State", postedJobs: "Jobs Posted", alumniCount: "# Alumni", contact: "Contact Name", email: "Contact E-mail"},
	onCampus: {company: "Company", size: "Size", industry: "Industry", city: "City", state: "State", postedJobs: "Jobs Posted", alumniCount: "# Alumni", contact: "Contact Name", email: "Contact E-mail"},
};

const dataOrder = {
	forProfit: ["company", "size", "industry", "city", "state", "postedJobs", "alumniCount", "contact", "email"],
	nonProfit: ["company", "size", "industry", "city", "state", "postedJobs", "alumniCount", "contact", "email"],
	government: ["company", "size", "industry", "city", "state", "postedJobs", "alumniCount", "contact", "email"],
	onCampus: ["company", "size", "industry", "city", "state", "postedJobs", "alumniCount", "contact", "email"],
};

const cards = [
	{cardText: "For Profit", totalCount: "600", changeCount : "34", changePercentage : "18.7", positive:true, chartId: "active-users-chart", filterText: "forProfit"},
	{cardText: "Non Profit", totalCount: "500", changeCount : "13", changePercentage : "1.7", positive:false, chartId: "mentors-chart", filterText: "nonProfit"},
	{cardText: "Government", totalCount: "380", changeCount : "11", changePercentage : "12.7", positive:false, chartId: "messages-chart", filterText: "government"},
	{cardText: "On-Campus", totalCount: "232", changeCount : "12", changePercentage : "14.3", positive:true, chartId: "jobs-chart", filterText: "onCampus"},
];

const disabledColumns = ["settings"];

class Events extends Component{
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={5}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Colby College" export={true}/>
						<div className="drilldown">
							<Drilldown 
								originalSortType="company"
								originalSortDirection="asc"
								currentType="forProfit"
								searchText="Search for companies by name"
								searchTerm="company"
								data={companies}
								tableHeaders={tableHeaders}
								dataOrder={dataOrder}
								cards={cards}
								disabledColumns={disabledColumns}
							/>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Events;