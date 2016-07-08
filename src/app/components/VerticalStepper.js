import React, {Component} from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {
	Step,
	Stepper,
	StepButton,
	StepContent
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Paper from 'material-ui/Paper';
import CTAutoComplete from './CTAutoComplete';
import Tickets from './Tickets';
import Reminders from './Reminders';
import Invitations from './Invitations';
import Tooltip from './Tooltip';
import States from 'ustates';
import areIntlLocalesSupported from 'intl-locales-supported';
require('../styles/import.scss');

let DateTimeFormat;
if (areIntlLocalesSupported(['fr']))
	DateTimeFormat = global.Intl.DateTimeFormat;
else {
	const IntlPolyfill = require('intl');
	DateTimeFormat = IntlPolyfill.DateTimeFormat;
	require('intl/locale-data/jsonp/fr');
}

const invitationTheme = getMuiTheme({
	palette: {
		primary1Color: "#00A9E0",
		accent1Color: "#EA7600",
	},
});

class VerticalStepper extends Component{
	constructor(props, context){
		super(props, context);

		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleEventTypeDropdownChange = this.handleEventTypeDropdownChange.bind(this);
		this.handleStateDropdownChange = this.handleStateDropdownChange.bind(this);
		this.handlePrivacyDropdownChange = this.handlePrivacyDropdownChange.bind(this);
		this.handleAttendSettingDropdownChange = this.handleAttendSettingDropdownChange.bind(this);

		this.state = {
			stepIndex: 0,
			dropdownValue: 1,
			stateValue: 'AL',
			privacyValue: 1,
			attendSettingValue: 1,
		};
	}

	handleNext(){
		const stepIndex = this.state.stepIndex;
		if(stepIndex < 4)
			this.setState({stepIndex: stepIndex + 1});
	}

	handlePrev(){
		const stepIndex = this.state.stepIndex;
		if(stepIndex > 0)
			this.setState({stepIndex: stepIndex - 1});
	}

	showInvitations(){
		render(
			<MuiThemeProvider muiTheme={invitationTheme}>
				<div>
					<AppBar title="Colby College" />
					<Paper zDepth={1} className="container" style={{padding: "1rem 0 0"}}>
						<h1 className="page-header">Invitations</h1>
						<Invitations />
					</Paper>	
				</div>
			</MuiThemeProvider>
		, document.getElementById('app'));
	}

	renderStepActions(step) {
		return (
		<div style={{margin: '12px 0', float: 'left', width: '100%'}}>
			{step == 4 && (
				<RaisedButton
					label="Save"
					disableTouchRipple={true}
					disableFocusRipple={true}
					primary={true}
					onTouchTap={this.showInvitations}
					style={{marginRight: 12}}
					className="rounded-button"
				/>
			)}
			{step < 4 && (
				<RaisedButton
					label="Next"
					disableTouchRipple={true}
					disableFocusRipple={true}
					primary={true}
					onTouchTap={this.handleNext}
					style={{marginRight: 12}}
					className="rounded-button"
				/>
			)}
			{step > 0 && step < 4 && (
			<FlatButton
				label="Back"
				disableTouchRipple={true}
				disableFocusRipple={true}
				onTouchTap={this.handlePrev}
				className="rounded-button grey-button"
			/>
			)}
		</div>
		);
	}

	renderStates(){
		const states = [];
		let i = 1;
		for(var code in States){
			if(i == 50)
				break;
			states.push(<MenuItem value={code} primaryText={code} />);
			i++;
		}
		return (
			<SelectField 
				floatingLabelText="State" 
				value={this.state.stateValue} 
				onChange={this.handleStateDropdownChange}
				className="event-input-left-50"
				labelStyle={{color: "#555"}}>
				{states}
			</SelectField>
		);
	}

	handleEventTypeDropdownChange(event, index, value) {
		this.setState({dropdownValue: value});
	}

	handleStateDropdownChange(event, index, value) {
		this.setState({stateValue: value});
	}

	handlePrivacyDropdownChange(event, index, value) {
		this.setState({privacyValue: value});
	}

	handleAttendSettingDropdownChange(event, index, value) {
		this.setState({attendSettingValue: value});
	}

	render() {
		const stepIndex = this.state.stepIndex;
		return(
			<Paper zDepth={1} className="container">
				<h1 className="page-header">Create A New Event</h1>
				<Stepper activeStep={stepIndex} linear={false} orientation="vertical">
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 0})}>
							<p className="sub-header">Name & Details</p>
						</StepButton>
						<StepContent>
							<TextField 
								hintText="i.e. Alumni Night" 
								floatingLabelText="Event Name" 
								className="event-input-left-75"
								inputStyle={{color: "#555"}} />
							<SelectField 
								className="event-input-right-25" 
								value={this.state.dropdownValue} 
								onChange={this.handleEventTypeDropdownChange}
								floatingLabelText="Event Type"
								labelStyle={{color: "#555"}}>
								<MenuItem value={1} primaryText="Career Fair" />
								<MenuItem value={2} primaryText="OCR" />
								<MenuItem value={3} primaryText="Job Shadow" />
								<MenuItem value={4} primaryText="Workshop" />
								<MenuItem value={5} primaryText="Other" />
							</SelectField>
							<TextField 
								floatingLabelText="Event Description" 
								fullWidth={true} 
								inputStyle={{color: "#555"}} />
							<DatePicker 
								hintText="Start Date" 
								mode="landscape" 
								className="date-input" 
								autoOk={true}
								formatDate={new DateTimeFormat('en-US', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
									}).format} 
								fullWidth={true}
								inputStyle={{color: "#555"}}
							/>
							<TimePicker hintText="Start Time" className="time-input" inputStyle={{color: "#555"}}/>
							<DatePicker 
								hintText="End Date" 
								mode="landscape" 
								className="date-input" 
								fullWidth={true} 
								autoOk={true}
								formatDate={new DateTimeFormat('en-US', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
									}).format}
								inputStyle={{color: "#555"}} />
							<TimePicker hintText="End Time" className="time-input" inputStyle={{color: "#555"}} />
							{this.renderStepActions(0)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 1})}>
							<p className="sub-header">Location</p>
						</StepButton>
						<StepContent>
							<TextField 
								hintText="i.e. Cambridge Innovation Center" 
								floatingLabelText="Location Name" 
								fullWidth={true}
								inputStyle={{color: "#555"}} 
								className="event-input-left-50"
								/>
							<a href="https://www.google.com/maps/place/Boston,+MA/" className="event-input-right-50" style={{margin: "9px 0"}}>
								<img src="http://maps.googleapis.com/maps/api/staticmap?center=Boston,+MA&zoom=13&scale=1&size=540x372&maptype=roadmap&format=png&visual_refresh=true" alt="Google Map of Boston, MA" />
							</a>
							<TextField 
								hintText="i.e. 123 Center St" 
								floatingLabelText="Address" 
								className="event-input-left-50"
								inputStyle={{color: "#555"}} />
							<TextField 
								hintText="i.e. Boston" 
								floatingLabelText="City" 
								className="event-input-left-50"
								inputStyle={{color: "#555"}} />
							<div className="event-input-left-50">
								{this.renderStates()}
								<TextField 
									hintText="i.e. 02113" 
									floatingLabelText="Postal Code" 
									className="event-input-right-50"
									inputStyle={{color: "#555"}} />
							</div>
							<div className="event-input-left-50">
								<TextField 
									hintText="i.e. United States" 
									floatingLabelText="Country" 
									className="event-input-left-50"
									inputStyle={{color: "#555"}} />	
								
								<TextField 
									hintText="i.e. 12" 
									floatingLabelText="Room/Floor" 
									className="event-input-right-50"
									inputStyle={{color: "#555"}} />	
							</div>		
							{this.renderStepActions(1)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 2})}>
							<p className="sub-header">Privacy & Tags
								<Tooltip label="Tags" text="This is why tags are important, man."/>
							</p>
						</StepButton>
						<StepContent>
							<TextField 
								floatingLabelText="Primary Contanct Name"
								className="event-input-left-50"
								inputStyle={{color: "#555"}} />
							<TextField 
								floatingLabelText="Primary Contact E-Mail"
								className="event-input-right-50"
								inputStyle={{color: "#555"}} />
							<SelectField 
								className="event-input-left-50"
								labelStyle={{color: "#555"}} 
								value={this.state.privacyValue} 
								onChange={this.handlePrivacyDropdownChange}>
								<MenuItem value={1} primaryText="Public" />
								<MenuItem value={2} primaryText="Invite Only" />
							</SelectField>
							<SelectField 
								className="event-input-right-50"
								labelStyle={{color: "#555"}} 
								value={this.state.attendSettingValue} 
								onChange={this.handleAttendSettingDropdownChange}>
								<MenuItem value={1} primaryText="Everyone" />
								<MenuItem value={2} primaryText="Alumni" />
								<MenuItem value={3} primaryText="Students" />
							</SelectField>
							<CTAutoComplete />
							{this.renderStepActions(2)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 3})}>
							<p className="sub-header">Tickets (Optional)</p>
						</StepButton>
						<StepContent>
							<Tickets />
							{this.renderStepActions(3)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 4})}>
							<p className="sub-header">Reminders</p>
						</StepButton>
						<StepContent>
							<Reminders />
							{this.renderStepActions(4)}
						</StepContent>
					</Step>
				</Stepper>
			</Paper>
		);
	}
}

export default VerticalStepper;