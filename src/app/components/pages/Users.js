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

const users = [
   {id: 0, firstName: "Tom", lastName:"Viera", grad: 2012, major: "Economics", city: "Boston", state: "MA", email: "tom@thecampustap.com", logins: 37, lastLogin: "5/6/2016", type: "student"},
   {id: 1, firstName: "Eric", lastName:"Zaleski", grad: 2011, major: "Political Science", city: "New York", state: "NY", email: "Eric@thecampustap.com", logins: 26, lastLogin: "5/6/2016", type: "alumni", title: "Athletic Trainer", employer: "Campustap Athletics", mentor: "Yes"},
   {id: 2, firstName: "Talman", lastName: "Floresca", grad: 2009, major: "Media Studies", city: "Malibu", state: "CA", email: "Talman@thecampustap.com", logins: 20, lastLogin: "9/6/2016", type: "student"},   
   {id: 3, firstName: "Kyla", lastName:"Fortune", grad: 2010, major: "Anatomy", city: "Little Rock", state: "AR", email: "Kyla@thecampustap.com", logins: 47, lastLogin: "4/6/2016", type: "alumni", title: "Lan Manager", employer: "Access Asia", mentor: "Yes"},
   {id: 4, firstName: "Catie", lastName:"Perry", grad: 2004, major: "Communications", city: "Bar Harbor", state: "ME", email: "Catie@thecampustap.com", logins: 15, lastLogin: "2/6/2016", type: "parent", title: "Pilot", employer: "Delta Airlines", mentor: "Yes"},
   {id: 5, firstName: "Aiden", lastName:"Wildman", grad: 2011, major: "International Business", city: "Boston", state: "MA", email: "Aiden@thecampustap.com", logins: 23, lastLogin: "1/6/2016", type: "student"},
   {id: 6, firstName: "Rick", lastName:"Mason", grad: 2010, major: "Advertising", city: "Boston", state: "MA", email: "rick@thecampustap.com.com", logins: 12, lastLogin: "9/6/2016", type: "alumni", title: "Financial Analyst", employer: "Infinite Wealth Planners", mentor: "Yes"},
   {id: 7, firstName: "Julia", lastName:"Scott", grad: 2009, major: "Marketing", city: "Lowell", state: "MA", email: "Julia@thecampustap.com", logins: 21, lastLogin: "9/6/2016", type: "parent", title: "Product Manager", employer: "Dynatronics", mentor: "Yes"},
   {id: 8, firstName: "Emily", lastName:"Curtis", grad: 2013, major: "Nursing", city: "Los Angeles", state: "CA", email: "Emily@thecampustap.com", logins: 24, lastLogin: "4/7/2016", type: "staff", title: "Natural Sciences Manager", employer: "Monkhouse", mentor: "Yes"},
   {id: 9, firstName: "Alex", lastName:"Scott", grad: 2015, major: "Biology", city: "Stamford", state: "CT", email: "Alex@thecampustap.com", logins: 13, lastLogin: "5/8/2016", type: "staff", title: "Automation Engineer", employer: "Utest", mentor: "Yes"},
   {id: 10, firstName: "Jason", lastName:"Gallop", grad: 2013, major: "Economics", city: "Boston", state: "MA", email: "Jason@thecampustap.com", logins: 35, lastLogin: "4/6/2016", type: "student"},
];

const tableHeaders = {
	student: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", major: "Major", city: "City", state: "State", email: "E-mail", logins: "Logins", lastLogin: "Last Login"},
	alumni: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", title: "Title", employer: "Employer", mentor: "Mentor", city: "City", state: "State", email: "E-mail", logins: "Logins", lastLogin: "Last Login"},
	parent: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", title: "Title", employer: "Employer", mentor: "Mentor", city: "City", state: "State", email: "E-mail", logins: "Logins", lastLogin: "Last Login"},
	staff: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", title: "Title", employer: "Employer", mentor: "Mentor", city: "City", state: "State", email: "E-mail", logins: "Logins", lastLogin: "Last Login"},
};

const dataOrder = {
	student: ["firstName", "lastName", "grad", "major", "city", "state", "email", "logins", "lastLogin"],
	alumni: ["firstName", "lastName", "grad", "title", "employer", "mentor", "city", "state", "email", "logins", "lastLogin"],
	parent: ["firstName", "lastName", "grad", "title", "employer", "mentor", "city", "state", "email", "logins", "lastLogin"],
	staff: ["firstName", "lastName", "grad", "title", "employer", "mentor", "city", "state", "email", "logins", "lastLogin"],
};

const cards = [
	{cardText: "Students", totalCount: "5,232", changeCount : "345", changePercentage : "18.7", positive:true, chartId: "active-users-chart", filterText: "student"},
	{cardText: "Alumni", totalCount: "2,345", changeCount : "13", changePercentage : "1.7", positive:false, chartId: "mentors-chart", filterText: "alumni"},
	{cardText: "Parents/Friends", totalCount: "38,343", changeCount : "1.1K", changePercentage : "12.7", positive:false, chartId: "messages-chart", filterText: "parent"},
	{cardText: "Faculty/Staff", totalCount: "232", changeCount : "12", changePercentage : "14.3", positive:true, chartId: "jobs-chart", filterText: "staff"},
];

class Users extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={0}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Colby College" export={true}/>
						<div className="drilldown">
							<Drilldown 
								originalSortType="firstName"
								originalSortDirection="asc"
								currentType="student"
								searchText="Search for people by first or last name"
								searchTerm="user"
								data={users}
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

export default Users;