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

const tableHeaders = {
	workshop: {title: "Event Title", date: "Date of Event", tags: "Tags", city: "City", state: "State", RSVP: "# RSVP's", attendees: "# Attendees", contact: "Contact Name", email: "Contact E-mail", settings: "Settings"},
	ocr: {title: "Event Title", date: "Date of Event", tags: "Tags", city: "City", state: "State", RSVP: "# RSVP's", attendees: "# Attendees", contact: "Contact Name", email: "Contact E-mail", settings: "Settings"},
	fair: {title: "Event Title", date: "Date of Event", tags: "Tags", city: "City", state: "State", RSVP: "# RSVP's", attendees: "# Attendees", contact: "Contact Name", email: "Contact E-mail", settings: "Settings"},
	other: {title: "Event Title", date: "Date of Event", tags: "Tags", city: "City", state: "State", RSVP: "# RSVP's", attendees: "# Attendees", contact: "Contact Name", email: "Contact E-mail", settings: "Settings"},
};

const dataOrder = {
	workshop: ["title", "date", "tags", "city", "state", "RSVP", "attendees", "contact", "email"],
	ocr: ["title", "date", "tags", "city", "state", "RSVP", "attendees", "contact", "email"],
	fair: ["title", "date", "tags", "city", "state", "RSVP", "attendees", "contact", "email"],
	other: ["title", "date", "tags", "city", "state", "RSVP", "attendees", "contact", "email"],
};

const cards = [
	{cardText: "Workshop", totalCount: "600", changeCount : "34", changePercentage : "18.7", positive:true, chartId: "active-users-chart", filterText: "workshop"},
	{cardText: "OCR", totalCount: "500", changeCount : "13", changePercentage : "1.7", positive:false, chartId: "mentors-chart", filterText: "ocr"},
	{cardText: "Career Fair", totalCount: "380", changeCount : "11", changePercentage : "12.7", positive:false, chartId: "messages-chart", filterText: "fair"},
	{cardText: "Other", totalCount: "232", changeCount : "12", changePercentage : "14.3", positive:true, chartId: "jobs-chart", filterText: "other"},
];

const disabledColumns = ["settings"];

class Events extends Component{
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={3}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Wheaton College" export={true}/>
						<h3 className="sub-header">Events</h3>
						<div className="drilldown">
							<Drilldown 
								originalSortType="title"
								originalSortDirection="asc"
								currentType="workshop"
								searchText="Search for events by title"
								searchTerm="event"
								data={events}
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