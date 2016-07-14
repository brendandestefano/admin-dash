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
   {id: 44, messenger: "Tom Viera", messengee: "Donna Crawford", messages: 10, started: "1/7/2016", last: "6/12/2016", type:"oneToOne"},
   {id: 45, messenger: "Eric Zaleski", messengee: "Glen Rinaldi, Andy Gilbert, Earl Nichols", messages: 12, started: "1/7/2016", last: "6/10/2016", type:"group"},
   {id: 46, messenger: "Talman Floresca", messengee: "Leon Ahumada", messages: 15, started: "1/7/2016", last: "6/8/2016", type:"oneToOne"},
   {id: 47, messenger: "Kyla Fortune", messengee: "Troy Schild, Edna Freeman, Leigh Cole", messages: 20, started: "1/7/2016", last: "6/15/2016", type:"group"},
   {id: 48, messenger: "Catie Perry", messengee: "Wendell Holley", messages: 32, started: "1/7/2016", last: "6/9/2016", type:"oneToOne"},
   {id: 49, messenger: "Aiden Wildman", messengee: "Rodger Guillory", messages: 11, started: "1/7/2016", last: "6/8/2016", type:"oneToOne"},
   {id: 50, messenger: "Rick Mason", messengee: "Troy Schild, Edna Freeman, Leigh Cole", messages: 2, attempts: 1, started: "1/7/2016", last: "6/4/2016", type:"noResponse"},
   {id: 51, messenger: "Julia Scott", messengee: "Kevin Sarmiento, Susan Mckain, Eugene Jackson", messages: 17, started: "1/7/2016", last: "6/4/2016", type:"group"},
   {id: 52, messenger: "Emily Curtis", messengee: "Judy Johnson", messages: 4, attempts: 3, started: "1/7/2016", last: "6/29/2016", type:"noResponse"},
   {id: 53, messenger: "Luke Olson", messengee: "Rose Watkins", messages: 14, started: "1/7/2016", last: "6/5/2016", type:"oneToOne"},
   {id: 54, messenger: "Alex Scott", messengee: "Ben Kraft", messages: 12, started: "1/7/2016", last: "6/7/2016", type:"oneToOne"},
];

const tableHeaders = {
	oneToOne: {messenger: "Message From", messengee: "Message To", messages: "# of Messages", started: "Thread Started", last: "Last Message"},
	group: {messenger: "Message From", messengee: "Message To", messages: "# of Messages", started: "Thread Started", last: "Last Message"},
	noResponse: {messenger: "Message From", messengee: "Message To", attempts: "# of Attempts", started: "Thread Started", last: "Most Recent Attempt"},
};

const dataOrder = {
	oneToOne: ["messenger", "messengee", "messages", "started", "last"],
	group: ["messenger", "messengee", "messages", "started", "last"],
	noResponse: ["messenger", "messengee", "attempts", "started", "last"],
};

const cards = [
	{cardText: "1 to 1", totalCount: "600", changeCount : "34", changePercentage : "18.7", positive:true, chartId: "active-users-chart", filterText: "oneToOne"},
	{cardText: "Group", totalCount: "250", changeCount : "13", changePercentage : "1.7", positive:false, chartId: "mentors-chart", filterText: "group"},
	{cardText: "No Response", totalCount: "33", changeCount : "8", changePercentage : "12.7", positive:false, chartId: "messages-chart", filterText: "noResponse"},
];

class Messages extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={0}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Wheaton College" export={true}/>
						<h3 className="sub-header">Messages</h3>
						<div className="drilldown">
							<Drilldown 
								originalSortType="messenger"
								originalSortDirection="asc"
								currentType="oneToOne"
								searchText="Search for people by first or last name"
								searchTerm="message"
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

export default Messages;