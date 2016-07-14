import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import UsersIcon from 'material-ui/svg-icons/social/person';
import CompaniesIcon from 'material-ui/svg-icons/social/location-city';
import JobsIcon from 'material-ui/svg-icons/action/work';
import GroupsIcon from 'material-ui/svg-icons/social/people';
import EventsIcon from 'material-ui/svg-icons/editor/insert-invitation';
import ApprovedIcon from 'material-ui/svg-icons/action/done';
import DeclinedIcon from 'material-ui/svg-icons/content/clear';
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
   {id: 0, firstName: "Tom", lastName:"Viera", grad: 2012, email: "tom@thecampustap.com", type: "user"},
   {id: 1, firstName: "Eric", lastName:"Zaleski", grad: 2011, email: "Eric@thecampustap.com", type: "user"},
   {id: 2, firstName: "Talman", lastName: "Floresca", grad: 2009, email: "Talman@thecampustap.com", type: "user"},   
   {id: 3, firstName: "Kyla", lastName:"Fortune", grad: 2010, email: "Kyla@thecampustap.com", type: "user"},
   {id: 4, firstName: "Catie", lastName:"Perry", grad: 2004, email: "Catie@thecampustap.com", type: "user"},
   {id: 5, firstName: "Aiden", lastName:"Wildman", grad: 2011, email: "Aiden@thecampustap.com", type: "user"},
   {id: 6, firstName: "Rick", lastName:"Mason", grad: 2010, email: "rick@thecampustap.com.com", type: "user"},
   {id: 7, firstName: "Julia", lastName:"Scott", grad: 2009, email: "Julia@thecampustap.com", type: "user"},
   {id: 8, firstName: "Emily", lastName:"Curtis", grad: 2013, email: "Emily@thecampustap.com", type: "user"},
   {id: 9, firstName: "Alex", lastName:"Scott", grad: 2015, email: "Alex@thecampustap.com", type: "user"},
   {id: 10, firstName: "Jason", lastName:"Gallop", grad: 2013, email: "Jason@thecampustap.com", type: "user"},
];

const companies = [
  {id:0, company: "Amked Technologies", size: "50", industry: "Manufacturing", city: "Atlanta", state: "MA", postedJobs: "4", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "For Profit"},
  {id:1, company: "Axis Inc.", size: "35", industry: "Software", city: "Boston", state: "MA", postedJobs: "2", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "Non Profit"},
  {id:2, company: "Prestige Worldwide", size: "100", industry: "Venture Capitalist", city: "Miami", state: "MA", postedJobs: "7", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "Government"},
  {id:3, company: "Edna Rubber Co.", size: "400", industry: "Tires", city: "Philadelphia", state: "MA", postedJobs: "9", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "On Campus"},
  {id:4, company: "Redwood Investments", size: "45", industry: "Investment Banking", city: "San Francisco", state: "MA", postedJobs: "4", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "Government"},
  {id:5, company: "Clark Trading Inc.", size: "50", industry: "Hedge Fund", city: "Chicago", state: "MA", postedJobs: "3", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "Non Profit"},
  {id:6, company: "Alto Air", size: "80", industry: "Airline", city: "Nantucket", state: "MA", postedJobs: "6", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "For Profit"},
  {id:7, company: "Bali Productions", size: "60", industry: "Film Production", city: "Salem", state: "MA", postedJobs: "4", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "Non Profit"},
  {id:8, company: "Donnelin's Grocery", size: "75", industry: "Produce Chain", city: "Houston", state: "MA", postedJobs: "5", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "Government"},
  {id:9, company: "FastAgro Inc.", size: "80", industry: "Food Production", city: "Dallas", state: "MA", postedJobs: "4", alumniCount: "300", contact: "Remy Carpinito", email: "test@test.com", website: "www.google.com", type: "On Campus"}
];

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

const events = [
  {id: 0, title: "Networking in NYC", date: "9/5/16", tags: "Networking", city: "New York City", state: "CT", RSVP: "27", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"workshop"},
  {id: 1, title: "Alumni Marketing in Malibu", date: "9/8/16", tags: "Marketing", city: "Malibu", state: "CT", RSVP: "33", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"ocr"},
  {id: 2, title: "Advertising Association Midwest", date: "7/7/16", tags: "Advertising", city: "Little Rock", state: "CT", RSVP: "25", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"fair"},
  {id: 3, title: "Networking in the Northeast", date: "9/24/16", tags: "Networking", city: "Waterville Valley", state: "CT", RSVP: "24", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"workshop"},
  {id: 4, title: "Young Entrepeneurs", date: "10/13/16", tags: "Entrepeneurship", city: "Boston", state: "CT", RSVP: "34", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"workshop"},
  {id: 5, title: "Bioengineering Workshop", date: "11/16/16", tags: "Bioengineering", city: "Boston", state: "State", RSVP: "33", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"ocr"},
  {id: 6, title: "Nurses Association Meeting", date: "12/18/16", tags: "Nursing", city: "Lowell", state: "State", RSVP: "27", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"other"},
  {id: 7, title: "Planning Your Career Path", date: "10/18/16", tags: "Career Guidance", city: "Los Angeles", state: "State", RSVP: "40", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"fair"},
  {id: 8, title: "Head Start", date: "11/10/16", tags: "Career Planning", city: "Kansas City", state: "State", RSVP: "38", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"workshop"},
  {id: 9, title: "CampusTap Economics Club", date: "9/14/16", tags: "Economics", city: "Stamford", state: "State", RSVP: "24", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"ocr"},
  {id: 10, title: "Debate Team visits Nationals", date: "10/29/16", tags: "Club Event", city: "New Haven", state: "State", RSVP: "22", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"other"},
  {id: 11, title: "CampusTap Football Alumni", date: "9/17/16", tags: "Networking", city: "Miami", state: "State", RSVP: "19", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"workshop"},
  {id: 12, title: "Give Back! Charity Fair", date: "8/23/16", tags: "Charity ", city: "Chicago", state: "State", RSVP: "29", attendees: 12, contact: "Remy Carpinito", email: "remy@thecampustap.com", type:"fair"}
];

const approved = [
   {id: 0, firstName: "Tom", lastName:"Viera", grad: 2012, email: "tom@thecampustap.com", type: "user"},
   {id: 1, firstName: "Eric", lastName:"Zaleski", grad: 2011, email: "Eric@thecampustap.com", type: "user"},
   {id: 2, firstName: "Talman", lastName: "Floresca", grad: 2009, email: "Talman@thecampustap.com", type: "user"},   
   {id: 3, firstName: "Kyla", lastName:"Fortune", grad: 2010, email: "Kyla@thecampustap.com", type: "user"},
   {id: 4, firstName: "Catie", lastName:"Perry", grad: 2004, email: "Catie@thecampustap.com", type: "user"},

];

const declined = [
	{id: 5, firstName: "Aiden", lastName:"Wildman", grad: 2011, email: "Aiden@thecampustap.com", type: "user"},
	{id: 6, firstName: "Rick", lastName:"Mason", grad: 2010, email: "rick@thecampustap.com.com", type: "user"},
	{id: 7, firstName: "Julia", lastName:"Scott", grad: 2009, email: "Julia@thecampustap.com", type: "user"},
	{id: 8, firstName: "Emily", lastName:"Curtis", grad: 2013, email: "Emily@thecampustap.com", type: "user"},
	{id: 9, firstName: "Alex", lastName:"Scott", grad: 2015, email: "Alex@thecampustap.com", type: "user"},
	{id: 10, firstName: "Jason", lastName:"Gallop", grad: 2013, email: "Jason@thecampustap.com", type: "user"},
];

const tableHeaders = {
	user: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", email: "E-mail", approve: "Approve", decline: "Decline"},
	company: {company: "Company", size: "Size", industry: "Industry", type: "Type", website: "Website", contact: "Contact", email: "E-mail", approve: "Approve", decline: "Decline"},
	job: {title: "Job Title", company: "Company", poster: "Poster", approve: "Approve", decline: "Decline"},
	event: {title: "Event Title", tags: "Tags", contact: "Contact", email: "Contact E-mail", approve: "Approve", decline: "Decline"},
	approved: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", email: "E-mail"},
	declined: {firstName: "First Name", lastName: "Last Name", grad: "Grad Year", email: "E-mail", approve: "Approve"},
};

const dataOrder = {
	user: ["firstName", "lastName", "grad", "email"],
	company: ["company", "size", "industry", "type", "website", "contact", "email"],
	job: ["title", "company", "poster"],
	event: ["title", "tags", "contact", "email"],
	approved: ["firstName", "lastName", "grad", "email"],
	declined: ["firstName", "lastName", "grad", "email"]
};

const disabledColumns = ["approve", "decline"];

class Requests extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			slideIndex: 0,
		};
	}

	changeSlide(value){
		this.setState({slideIndex: value});
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={6}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Wheaton College" export={true}/>
						<h3 className="sub-header">Requests</h3>
						<div className="drilldown">
							<Tabs
								onChange={this.changeSlide.bind(this)}
								value={this.state.slideIndex}
							>
								<Tab
									icon={<UsersIcon />}
									label="USERS"
									value={0}
								/>
								<Tab
									icon={<CompaniesIcon />}
									label="COMPANIES"
									value={1}
								/>
								<Tab
									icon={<JobsIcon />}
									label="JOBS"
									value={2}
								/>
								<Tab
									icon={<EventsIcon />}
									label="EVENTS"
									value={3}
								/>
								<Tab
									icon={<ApprovedIcon />}
									label="APPROVED"
									value={4}
								/>
								<Tab
									icon={<DeclinedIcon />}
									label="DECLINED"
									value={5}
								/>
							</Tabs>
							<SwipeableViews
								index={this.state.slideIndex}
								onChangeIndex={this.changeSlide.bind(this)}
								className="tabs-content-wrapper"
							>
								<div>
									<Drilldown 
										originalSortType="firstName"
										originalSortDirection="asc"
										currentType="user"
										additionalTerm="request"
										searchText="Search for people by first or last name"
										searchTerm="user"
										data={users}
										tableHeaders={tableHeaders}
										dataOrder={dataOrder}
										cards={false}
										disabledColumns={disabledColumns}
									/>
								</div>
								<div>
									<Drilldown 
										originalSortType="company"
										originalSortDirection="asc"
										currentType="company"
										additionalTerm="request"
										searchTerm="company"
										searchText="Search for companies by name"
										data={companies}
										tableHeaders={tableHeaders}
										dataOrder={dataOrder}
										cards={false}
										disabledColumns={disabledColumns}
									/>
								</div>
								<div>
									<Drilldown 
										originalSortType="title"
										originalSortDirection="asc"
										currentType="job"
										additionalTerm="request"
										searchTerm="job"
										searchText="Search for jobs by title"
										data={jobs}
										tableHeaders={tableHeaders}
										dataOrder={dataOrder}
										cards={false}
										disabledColumns={disabledColumns}
									/>
								</div>
								<div>
									<Drilldown 
										originalSortType="title"
										originalSortDirection="asc"
										currentType="event"
										additionalTerm="request"
										searchTerm="event"
										searchText="Search for events by title"
										data={events}
										tableHeaders={tableHeaders}
										dataOrder={dataOrder}
										cards={false}
										disabledColumns={disabledColumns}
									/>
								</div>
								<div>
									<Drilldown 
										originalSortType="firstName"
										originalSortDirection="asc"
										currentType="approved"
										additionalTerm="approved"
										searchTerm="user"
										searchText="Search for users by first of last name"
										data={approved}
										tableHeaders={tableHeaders}
										dataOrder={dataOrder}
										cards={false}
									/>
								</div>
								<div>
									<Drilldown 
										originalSortType="firstName"
										originalSortDirection="asc"
										currentType="declined"
										additionalTerm="declined"
										searchTerm="user"
										searchText="Search for users by first of last name"
										data={declined}
										tableHeaders={tableHeaders}
										dataOrder={dataOrder}
										cards={false}
									/>
								</div>
								<div>6</div>
							</SwipeableViews>	
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Requests;