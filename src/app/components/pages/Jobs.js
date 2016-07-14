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

const jobs = [
  {id: 0, title: "Marketing Analyst", company: "Access Asia", city: "Atlanta", state: "FL", date: "5/17/16", views: "26", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "fullTime"},
  {id: 1, title: "Advertising Intern", company: "Logan Airport", city: "Boston", state: "FL", date: "5/12/16", views: "23", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "partTime"},
  {id: 2, title: "Risk Manager", company: "Infinite Wealth Planners", city: "Miami", state: "FL", date: "5/19/16", views: "22", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "fullTime"},
  {id: 3, title: "IT Specialist", company: "Dynatronics Accessories", city: "Philadelphia", state: "FL", date: "5/11/16", views: "29", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "internship"},
  {id: 4, title: "Head of Accounts", company: "Monk House", city: "Los Angeles", state: "FL", date: "5/10/16", views: "33", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "partTime"},
  {id: 5, title: "Sales Assistant", company: "Helping Hand", city: "Chicago", state: "FL", date: "5/9/16", views: "18", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "fullTime"},
  {id: 6, title: "Director ", company: "Engage Realty", city: "Nantucket", state: "FL", date: "5/10/16", views: "19", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "partTime"},
  {id: 7, title: "Lead Designer", company: "Karl's Shoes", city: "Salem", state: "FL", date: "5/11/16", views: "27", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "internship"},
  {id: 8, title: "Full Stack Engineer", company: "Elect-Tek", city: "Houston", state: "FL", date: "5/12/16", views: "26", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "fullTime"},
  {id: 9, title: "Lighting Technician", company: "Stop Grey", city: "Berlin", state: "FL", date: "5/8/16", views: "12", applicants: 7, poster: "Remy Carpinito", role: "Alumni", type: "jobShadow"}
];

const tableHeaders = {
	fullTime: {title: "Job Title", company: "Company", city: "City", state: "State", date: "Date Posted", views: "Views", applicants: "Applicants", poster: "Posted By", role: "User Role"},
	partTime: {title: "Job Title", company: "Company", city: "City", state: "State", date: "Date Posted", views: "Views", applicants: "Applicants", poster: "Posted By", role: "User Role"},
	internship: {title: "Job Title", company: "Company", city: "City", state: "State", date: "Date Posted", views: "Views", applicants: "Applicants", poster: "Posted By", role: "User Role"},
	jobShadow: {title: "Job Title", company: "Company", city: "City", state: "State", date: "Date Posted", views: "Views", applicants: "Applicants", poster: "Posted By", role: "User Role"},
};

const dataOrder = {
	fullTime: ["title", "company", "city", "state", "date", "views", "applicants", "poster", "role"],
	partTime: ["title", "company", "city", "state", "date", "views", "applicants", "poster", "role"],
	internship: ["title", "company", "city", "state", "date", "views", "applicants", "poster", "role"],
	jobShadow: ["title", "company", "city", "state", "date", "views", "applicants", "poster", "role"],
};

const cards = [
	{cardText: "Full Time", totalCount: "600", changeCount : "34", changePercentage : "18.7", positive:true, chartId: "active-users-chart", filterText: "fullTime"},
	{cardText: "Part Time", totalCount: "500", changeCount : "13", changePercentage : "1.7", positive:false, chartId: "mentors-chart", filterText: "partTime"},
	{cardText: "Internship", totalCount: "380", changeCount : "11", changePercentage : "12.7", positive:false, chartId: "messages-chart", filterText: "internship"},
	{cardText: "Job Shadow", totalCount: "232", changeCount : "12", changePercentage : "14.3", positive:true, chartId: "jobs-chart", filterText: "jobShadow"},
];

const disabledColumns = ["settings"];

class Jobs extends Component{
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={4}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Wheaton College" export={true}/>
						<h3 className="sub-header">Jobs</h3>
						<div className="drilldown">
							<Drilldown 
								originalSortType="title"
								originalSortDirection="asc"
								currentType="fullTime"
								searchText="Search for jobs by title"
								searchTerm="job"
								data={jobs}
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

export default Jobs;