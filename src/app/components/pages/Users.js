import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
	from 'material-ui/Table';
import AscIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import DescIcon from 'material-ui/svg-icons/navigation/arrow-downward';
import TextField from 'material-ui/TextField';
import VerticalNavbar from '../VerticalNavbar';
import Banner from '../Banner';
import Card from '../Card';
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

class Users extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			sortType: "firstName",
			sortDirection: "asc",
			users: [],
			cardSelected: false,
			searchPreviousUsers: [],
			currentType: "student"
		};
	}
	
	renderIcon(type){
		if(this.state.sortType != type.index && this.state.sortType != "-"+type.index)
			return;
		if(this.state.sortDirection == 'asc')
			return <AscIcon className="btn-sort" />;
		else
			return <DescIcon className="btn-sort" />;
	}

	sortColumn(type){
		if(this.state.sortType == type && this.state.sortDirection == "asc"){
			this.setState({sortType: "-"+type, sortDirection: "desc"});
		}else
			this.setState({sortType: type, sortDirection: "asc"});
	}

	dynamicSort(property){
		var sortOrder = 1;
		if(property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function (a,b) {
			var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
		}
	}

	renderTableHeaders(type){
		let tableHeadersOutput = [];
		for(let index in tableHeaders[type]){
			tableHeadersOutput.push(
				<TableHeaderColumn data-type={index}>
					{tableHeaders[type][index]}{this.renderIcon({index})}
				</TableHeaderColumn>);
		}
		return(<TableRow>{tableHeadersOutput}</TableRow>);
	}

	renderUsers(type){
		return this.state.users.sort(this.dynamicSort(this.state.sortType)).map((user, index) => {
			return(
				this.getRowData(index, type, user)
		)});
	}

	getRowData(index, type, user){
		let columns = [];
		for(let i = 0; i < dataOrder[type].length; i++){
			columns.push(<TableRowColumn>{user[dataOrder[type][i]]}</TableRowColumn>);
		}
		return(<TableRow key={index}>{columns}</TableRow>);
	}

	setUsers(){
		this.setState({users: users});
	}

	attachClickListeners(){
		let headers = document.getElementsByClassName('table')[0].getElementsByTagName('th');
		for(let i = 0; i < headers.length; i++){
			let globalThis = this;
			headers[i].addEventListener('click', function(){globalThis.sortColumn(headers[i].getAttribute('data-type'))}, false);
		}
	}

	componentDidMount(){
		this.setUsers();
		this.attachClickListeners();
	}

	filterTable(type){
		if(this.state.cardSelected == true){
			this.setState({users: users, cardSelected: false});
			return;
		}
		let result = this.state.users.filter((user, index) => {
			return user.type == type;
		});
		this.setState({users: result, cardSelected: true, currentType: type});
	}

	getInitialUsers(){
		return users;
	}

	searchUsers(event){
		let searchPreviousUsers = (this.state.users.length == 0 || event.target.value == '') ? this.getInitialUsers() : this.state.users;
		this.setState({searchPreviousUsers: searchPreviousUsers});
		let searchValue = event.target.value;
		let users = (length >= searchValue.length) ? this.state.searchPreviousUsers : this.state.users;
		length = searchValue.length;
		const result = users.filter(function(user, key) {
		    return user.firstName.toLowerCase().indexOf(searchValue) != -1 || user.lastName.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({users: (searchValue == '' && this.state.searchPreviousUsers.length > 0) ? this.getInitialUsers() : result});
	}

	switchCurrentType(type){
		if(this.state.currentType == type)
			this.setState({currentType: 'student'});
		else
			this.setState({currentType: type});
	}

	resetState(){
		this.setState({
			sortType: "firstName",
			sortDirection: "asc",
			users: users,
			cardSelected: false,
			searchPreviousUsers: [],
			currentType: "student"
		});
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={0}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Colby College" export={true}/>
						<div className="drilldown">
							<Card 
								cardText="Students"
								totalCount="5,232"
								changeCount="345"
								changePercentage="18.7"
								positive={true}
								chartId="active-users-chart"
								filterTable={this.filterTable.bind(this)}
								filterText="student"
								setType={this.switchCurrentType.bind(this)}
								reset={this.resetState.bind(this)}
							/>
							<Card 
								cardText="Alumni"
								totalCount="2,345"
								changeCount="13"
								changePercentage="1.7"
								positive={false}
								chartId="mentors-chart"
								filterTable={this.filterTable.bind(this)}
								filterText="alumni"
								setType={this.switchCurrentType.bind(this)}
								reset={this.resetState.bind(this)}
							/>
							<Card 
								cardText="Parents/Friends"
								totalCount="38,343"
								changeCount="1.1K"
								changePercentage="12.7"
								positive={false}
								chartId="messages-chart"
								filterTable={this.filterTable.bind(this)}
								filterText="parent"
								setType={this.switchCurrentType.bind(this)}
								reset={this.resetState.bind(this)}
							/>
							<Card 
								cardText="Faculty/Staff"
								totalCount="245"
								changeCount="12"
								changePercentage="14.3"
								positive={true}
								chartId="jobs-chart"
								filterTable={this.filterTable.bind(this)}
								filterText="staff"
								setType={this.switchCurrentType.bind(this)}
								reset={this.resetState.bind(this)}
							/>
							<TextField
								hintText="Search for people by first or last name"
								fullWidth={true}
								onChange={(e) => this.searchUsers(e)}
								inputStyle={{color: "#555"}}
								style={{marginTop: "2rem"}}
							/>
							<Table
								fixedHeader={true}
								className="table"
								wrapperStyle={{width: "100%", float: "left"}}
							>
								<TableHeader
									adjustForCheckbox={false}
									displaySelectAll={false}
								>
									{this.renderTableHeaders(this.state.currentType)}
								</TableHeader>
								<TableBody
									displayRowCheckbox={false}
								>
									{this.renderUsers(this.state.currentType)}
								</TableBody>	
							</Table>
							<div className="pagination">
								<p className="previous disabled">&lt;&lt; Previous</p>
								<p className="pages">
									<a href="" className="active">1</a>
									<a href="">2</a>
									<a href="">3</a>
									<a href="">4</a>
									<a href="">5</a>
								</p>
								<p className="next">Next &gt;&gt;</p>
							</div>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Users;