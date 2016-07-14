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

const mentors = [
   {id: 22, firstName: "Donna", lastName: "Crawford", grad:2009, role: "Student", employer: "Campustap Athletics", connections: 4, city: "Boston", state: "MA", email: "Donna@thecampustap.com", mentorship:"Interview help, Cover letters, Resume review", type:"mentor"},
   {id: 23, firstName: "James", lastName: "Lanister", grad:2004, role: "Alumni", employer: "Access Asia", connections: 7, city: "New York", state: "NY", email: "James@thecampustap.com", mentorship:"Interview help, Cover letters, Resume review", type:"mentor"},
   {id: 24, firstName: "Leon", lastName: "Ahumada", grad:2009, role: "Alumni", employer: "Delta Airlines", connections: 2, city: "Boston", state: "MA", email: "Leon@thecampustap.com", mentorship:"Interview help, Cover letters", type:"mentee"},
   {id: 25, firstName: "Lee", lastName: "Leighty", grad:2007, role: "Student", employer: "Infinite Wealth Planners", connections: 6, city: "Boston", state: "MA", email: "Lee@thecampustap.com", mentorship:"Interview help, Cover letters, Resume review", type:"mentor"},
   {id: 26, firstName: "Wendell", lastName: "Holly", grad:2002, role: "Student", employer: "Dynatronics", connections: 8, city: "Boston", state: "MA", email: "Wendell@thecampustap.com", mentorship:"Interview help, Cover letters, Resume review", type:"mentee"},
   {id: 27, firstName: "Rodger", lastName: "Guillory", grad:2005, role: "Alumni", employer: "Monkhouse", connections: 2, city: "Boston", state: "MA", email: "Rodger@thecampustap.com", mentorship:"Interview help, Cover letters", type:"mentee"},
   {id: 28, firstName: "John", lastName: "Clyburn", grad:2007, role: "Student", employer: "Utest", connections: 12, city: "Burlington", state: "VT", email: "John@thecampustap.com", mentorship:"Interview help, Cover letters, Resume review", type:"mentor"},
   {id: 29, firstName: "Lowell", lastName: "Waggoner", grad:2006, role: "Alumni", employer: "Engage Realty", connections: 3, city: "Gloucester", state: "MA", email: "Lowell@thecampustap.com", mentorship:"Interview help, Cover letters,Resume review", type:"mentee"},
   {id: 30, firstName: "Maureen", lastName: "Miller", grad:2003, role: "Alumni", employer: "Karl's Shoes", connections: 6, city: "Chicago", state: "IL", email: "Maureen@thecampustap.com", mentorship:"Interview help, Cover letters", type:"mentor"},
   {id: 31, firstName: "Rose", lastName: "Watkins", grad:2009, role: "Alumni", employer: "Evergreen Lawn", connections: 7, city: "Boston", state: "MA", email: "Rose@thecampustap.com", mentorship:"Interview help, Cover letters", type:"mentor"},
   {id: 32, firstName: "Michael", lastName: "Huber", grad:2003, role: "Alumni", employer: "JayLabs", connections: 5, city: "Miami", state: "FL", email: "Michael@thecampustap.com", mentorship:"Interview help, Cover letters, Resume review", type:"mentor"},
];

const tableHeaders = {
	mentor: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", employer: "Employer", connections: "Mentee Connections", city: "City", state: "State", email: "E-mail", mentorship: "Mentorship Areas"},
	mentee: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", role: "User Role", employer: "Employer", city: "City", state: "State", email: "E-mail", mentorship: "Mentorship Areas"},
};

const dataOrder = {
	mentor: ["firstName", "lastName", "grad", "employer", "connections", "city", "state", "email", "mentorship"],
	mentee: ["firstName", "lastName", "grad", "role", "employer", "city", "state", "email", "mentorship"],
};

const cards = [
	{cardText: "Total Mentors", totalCount: "5,232", changeCount : "345", changePercentage : "18.7", positive:true, chartId: "active-users-chart", filterText: "mentor"},
	{cardText: "Total Mentees", totalCount: "2,345", changeCount : "13", changePercentage : "1.7", positive:false, chartId: "mentors-chart", filterText: "mentee"},
];

class Mentors extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={0}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Wheaton College" export={true}/>
						<h3 className="sub-header">Mentors</h3>
						<div className="drilldown">
							<Drilldown 
								originalSortType="firstName"
								originalSortDirection="asc"
								currentType="mentor"
								searchText="Search for people by first or last name"
								searchTerm="user"
								data={mentors}
								tableHeaders={tableHeaders}
								dataOrder={dataOrder}
								cards={cards}
							/>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Mentors;