import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import VerticalNavbar from './components/VerticalNavbar';
import Banner from './components/Banner';
import Card from './components/Card';
import Graph from './components/Graph';
import TrendingMentorsWidget from './components/TrendingMentorsWidget';
import NewConnectionsWidget from './components/NewConnectionsWidget';
import TrendingContentWidget from './components/TrendingContentWidget';
import UsersIcon from 'material-ui/svg-icons/social/person';
import MentorsIcon from 'material-ui/svg-icons/social/people';
import MessagesIcon from 'material-ui/svg-icons/notification/sms';
import EventsIcon from 'material-ui/svg-icons/editor/insert-invitation';
import JobsIcon from 'material-ui/svg-icons/action/work';
import CompaniesIcon from 'material-ui/svg-icons/social/location-city';
require('./styles/import.scss');

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

class Main extends Component {
	getMainDashboard(){
		return(
			<div>
				<VerticalNavbar />
				<div className="main">
					<div className="content">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Wheaton College"/>
						<div className="cards-wrapper">
							<div className="card-row">
								<Card 
									path="users"
									icon={<UsersIcon className="icon-medium"/>}
									cardText="Active Users"
									totalCount="5,232"
									changeCount="345"
									changePercentage="18.7"
									positive={true}
									chartId="active-users-chart"
								/>
								<Card 
									path="mentors"
									icon={<MentorsIcon className="icon-medium"/>}
									cardText="Mentors"
									totalCount="2,345"
									changeCount="13"
									changePercentage="1.7"
									positive={false}
									chartId="mentors-chart"
								/>
								<Card 
									path="messages"
									icon={<MessagesIcon className="icon-medium"/>}
									cardText="Messages"
									totalCount="38,343"
									changeCount="1.1K"
									changePercentage="12.7"
									positive={false}
									chartId="messages-chart"
								/>
							</div>
							<div className="card-row">
								<Card 
									path="jobs"
									icon={<JobsIcon className="icon-medium"/>}
									cardText="Jobs"
									totalCount="245"
									changeCount="12"
									changePercentage="14.3"
									positive={true}
									chartId="jobs-chart"
								/>
								<Card 
									path="companies"
									icon={<CompaniesIcon className="icon-medium"/>}
									cardText="Companies"
									totalCount="38"
									changeCount="5"
									changePercentage="20.1"
									positive={true}
									chartId="companies-chart"
								/>
								<Card 
									path="events"
									icon={<EventsIcon className="icon-medium"/>}
									cardText="Events"
									totalCount="61"
									changeCount="7"
									changePercentage="8.8"
									positive={true}
									chartId="events-chart"
								/>
							</div>
						</div>
						<div className="graphs-wrapper">
							<hr />
							<Graph 
								title="Engagement by Role"
								type="line"
							/>
							<Graph
								title="Mentor Categories"
								type="pie"
							/>
							<Graph
								title="Engagement by Industry"
								type="bar"
							/>
						</div>
					</div>
					<div className="engagement">
						<div className="widgets-wrapper">
							<TrendingMentorsWidget />
							<hr />
							<NewConnectionsWidget />
							<hr />
							<TrendingContentWidget />
						</div>
					</div>
				</div>
			</div>
		);
	}
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					{(this.props.children === null) ? this.getMainDashboard() : this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Main;