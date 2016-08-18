import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Chip from 'material-ui/Chip';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import PlusIcon from 'material-ui/svg-icons/content/add-circle-outline';
import ExitIcon from 'material-ui/svg-icons/content/clear';
import RemoveIcon from 'material-ui/svg-icons/content/clear';
import EventIcon from 'material-ui/svg-icons/action/event';
import DateIcon from 'material-ui/svg-icons/action/date-range';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import UserIcon from 'material-ui/svg-icons/social/person';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Card from 'material-ui/Card';

import School from '../models/School';

let eventsPreview = require('../img/screens/companySectionText.png');

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: School.primaryColor,
		accent1Color: School.secondaryColor,
		pickerHeaderColor: School.primaryColor,
	},
	datePicker: {
		selectColor: School.primaryColor,
	}
});
let monthMap = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class EventsPicker extends Component{
	constructor(props, context){
		super(props, context);

		this.handleEventsDialogClose = this.handleEventsDialogClose.bind(this);
		this.handleEventsDialogOpen = this.handleEventsDialogOpen.bind(this);
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleDialogOpen = this.handleDialogOpen.bind(this);

		this.state = {
			previewDialogOpen: false,
			previewDialogTitle: '',
			previewDialogContent: '',
			suggestedEventsShown: true,
			events: null,
			eventsDialogOpen: false,
			eventsForDialog: null,
			showEventsErrorMessage: false
		};
	}

	componentWillMount(){
		let events = [];
		School.events.slice(0,4).map((event, index) => {
			events.push(event);
		});
		this.setState({events: events, eventsForDialog: School.events});
	}

	handleEventsDialogOpen(){
		this.setState({eventsDialogOpen: true});
	}

	handleEventsDialogClose(){
		this.setState({eventsDialogOpen: false});
	}

	handleDialogClose(){
		this.setState({previewDialogOpen: false});
	}

	handleDialogOpen(title, content){
		this.setState({
			previewDialogOpen: true, 
			previewDialogTitle: title,
			previewDialogContent: content
		});
	}

	formatAMPM(date) {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0'+minutes : minutes;
		let strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	}

	getNumberWithSuffix(n) {
		let s = ["th","st","nd","rd"],
			v = n%100;
		return n+(s[(v-20)%10]||s[v]||s[0]);
	}

	addEllipsis(text, length){
		if(text.length < length)
			return text;
		return text.slice(0, length)+'...';
	}

	getTopEvents(){
		return this.state.events.map((event, index) => {
			if(index >= 4)
				return;
			let date = new Date(event.date);
			return(
				<Card key={index} className="event-small-card relative">
					<div 
					className="card-background-image"
					style={{
						background: "url('"+event.backgroundUrl+"') no-repeat center/cover"}}></div>
					<div 
					className="card-background-overlay"></div>
					<h2 className="text-center event-small-card-title">{event.name}</h2>
					<div style={{marginTop: "4rem"}}>
						<div className="card-text-wrapper">
							<DateIcon className="card-icon"/>
							<h4 className="card-text">{monthMap[date.getMonth()]+' '+this.getNumberWithSuffix(date.getDate())+', '+date.getFullYear()} at {this.formatAMPM(date)}</h4>
						</div>
						<div className="card-text-wrapper">
							<UserIcon className="card-icon"/>
							<h4 className="card-text">Attendees: {event.attendees}</h4>
						</div>
						<div className="card-text-wrapper">
							<DescriptionIcon className="card-icon"/>
							<h4 className="card-text" style={{minHeight: "3rem"}}>{this.addEllipsis(event.description, 80)}</h4>
						</div>
					</div>
				</Card>
			);
		})
	}

	renderEvents(){
		return this.state.eventsForDialog.map((event, index) => {
			return(
				<ListItem 
					key={index} 
					primaryText={event.name}
					rightIcon={<PlusIcon className="invitations-add" style={{fill: "#555"}} />}
					onTouchTap={() => {this.inviteEvent(event)}}
					className={this.inBothLists(event)} 
				/>
			);
		})
	}

	inviteEvent(eventToAdd){
		if(this.state.events.length == 4){
			this.setState({showEventsErrorMessage: true});
			return false;
		}
		let events = this.state.events.push(eventToAdd);
		this.setState({events: this.state.events, suggestedEventsShown: false});
	}

	inBothLists(eventObject){
		const result = this.state.events.filter(function(event, key) {
			return event.name == eventObject.name;
		});
		return (Object.keys(result).length !== 0) ? 'selected' : '';
	}

	searchEvents(event){
		let searchValue = event.target.value;
		let events = (length >= searchValue.length) ? School.events : this.state.eventsForDialog;
		length = searchValue.length;
		const result = events.filter(function(event, key) {
		    return event.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({eventsForDialog: result});
	}

	renderChosenEvents(){
		return this.state.events.map((event, index) => {
			return(
				<ListItem 
					key={index} 
					primaryText={event.name}
					rightIcon={<RemoveIcon style={{fill: "#555"}} />}
					onTouchTap={() => this.removeEvent(event)} />
			);
		});
	}

	removeEvent(eventToRemove){
		let result = this.state.events.filter((event, index) => {
			return event != eventToRemove;
		});
		this.setState({events: result, showEventsErrorMessage: false});
	}

	render(){
		return(
			<div>
				<h2 style={{marginBottom: "1rem", marginTop: "1rem", color: "#555", fontSize: "1.25rem"}}>Events</h2>
				{(this.state.suggestedEventsShown 
					&& <p style={{color: "#555", fontSize: "1rem"}}>{School.name+"'s Suggested Events:"}</p>)}
				<div style={{overflow: "overlay"}}>
					{this.getTopEvents()}
				</div>
				<FlatButton
					label="Manage Events"
					style={{float: "left", backgroundColor: muiTheme.palette.primary1Color, color: "#FFF", margin: "1rem 0"}}
					onTouchTap={this.handleEventsDialogOpen}
				/>
				<div className="landing-config-group" style={{height: "2.25rem"}}>
					<FlatButton
						label="Preview"
						className="preview"
						onTouchTap={() => this.handleDialogOpen("Events", eventsPreview)}
					/>
				</div>
				<Dialog
					title={<h3>Manage Events<ExitIcon style={{float: "right"}} onTouchTap={this.handleEventsDialogClose}/></h3>}
					modal={false}
					open={this.state.eventsDialogOpen}
					onRequestClose={this.handleEventsDialogClose}
					contentStyle={{maxWidth: "none", width: "90%"}}>
					<div className="invitation-left-75">
						<TextField
							hintText="Search for events by name"
							fullWidth={true}
							onChange={(e) => this.searchEvents(e)}
							inputStyle={{color: "#555"}}
						/>
						<List style={{paddingTop: "2.25rem"}}>
							{this.renderEvents()}
						</List>
					</div>
					<div className="event-input-right-25 invitation-selected-column">
						{(!this.state.showEventsErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem"}}>Your Events</p>)}
						{(this.state.showEventsErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem", color: "#FF0000"}}>Max of 4 Events.  Delete An Event First!</p>)}
						<List>
							{this.renderChosenEvents()}
						</List>
					</div>
					<div style={{borderTop: "1px solid #E0E0E0", height: "4rem", position: "fixed", bottom: "0", left: "0", right: "0", background: "#FFF", zIndex: "1"}}>
						<RaisedButton
							label="Ok"
							disableTouchRipple={true}
							disableFocusRipple={true}
							primary={true}
							onTouchTap={this.handleEventsDialogClose}
							style={{marginRight: 12, marginTop: 12, float: "right"}}
							className="rounded-button"
						/>
						<FlatButton
							label="Cancel"
							disableTouchRipple={true}
							disableFocusRipple={true}
							onTouchTap={this.handleEventsDialogClose}
							className="rounded-button grey-button"
							style={{marginRight: 12, marginTop: 12, float: "right"}}
						/>
					</div>
				</Dialog>
				<Dialog
					className="preview-dialog"
					title={<h3 style={{border: 0, color: "#555"}}>{this.state.previewDialogTitle}<ExitIcon style={{float: "right", fill: "#555"}} onTouchTap={() => this.handleDialogClose}/></h3>}
					modal={false}
					open={this.state.previewDialogOpen}
					onRequestClose={this.handleDialogClose}
					autoScrollBodyContent={true}
				>
					<img src={this.state.previewDialogContent} style={{border: "1px solid #CCC"}}/>
				</Dialog>
			</div>
		);
	}
}

export default EventsPicker;