import React, {Component} from 'react';
import PlusSign from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RemoveIcon from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';
import areIntlLocalesSupported from 'intl-locales-supported';

let DateTimeFormat;
if (areIntlLocalesSupported(['fr']))
	DateTimeFormat = global.Intl.DateTimeFormat;
else {
	const IntlPolyfill = require('intl');
	DateTimeFormat = IntlPolyfill.DateTimeFormat;
	require('intl/locale-data/jsonp/fr');
}

class Reminders extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			reminders : [],
			dropdownValue: 'email',
		}
	}

	renderReminderList(){
		const reminders = this.state.reminders;
		if(typeof reminders[0] === 'undefined')
			return true;
		return reminders.map((reminder, index) => {
			return(
				<div className="reminder" key={reminder.key}>
					<p className="step-header" style={{marginBottom: "-.25rem"}}>Reminder {index + 1}</p>
					<DatePicker 
						hintText="Day" 
						mode="landscape" 
						autoOk={true}
						formatDate={new DateTimeFormat('en-US', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
							}).format}
						inputStyle={{color: "#555"}}
						className="input-field" />
					<div className="input-field">
						<TimePicker hintText="Time" inputStyle={{color: "#555"}} />
					</div>	
					<SelectField 
						className="input-field" 
						value={this.state.dropdownValue} 
						onChange={this.handleReminderTypeDropdownChange.bind(this)}
						floatingLabelText="Reminder Type"
						labelStyle={{color: "#555"}}>
						<MenuItem value='email' primaryText="Email" />
						<MenuItem value='push' primaryText="Push Notification" />
						<MenuItem value='both' primaryText="Both" />
					</SelectField>
					<div className="input-field">
						<FlatButton 
							label="" 
							labelPosition="after" 
							primary={true} 
							icon={<RemoveIcon color={red500} />}
							hoverColor="transparent" 
							onClick={() => this.deleteReminder(reminder.key)}/>
					</div>
					<TextField floatingLabelText="Reminder Text" fullWidth={true}/>
					<hr className="break" />
				</div>
			);
		})

	}

	handleReminderTypeDropdownChange(event, index, value) {
		this.setState({dropdownValue: value});
	}

	addReminder(){
		const reminders = this.state.reminders;

		reminders.push({key: (reminders.length > 0) ? reminders.length : 0});

		this.setState({reminders : reminders});
	}

	deleteReminder(key){
		const reminderKey = key;
		const result = this.state.reminders.filter(function(reminder, key) {
		    return reminder.key != reminderKey;
		});
		this.setState({reminders: result});
	}

	render(){
		return(
			<div>
				<FlatButton 
					label="Add Reminder" 
					labelPosition="after" 
					primary={true} 
					icon={<PlusSign />} 
					style={{float: 'left'}} 
					className="rounded-button"
					onClick={() => this.addReminder(this)}/>
				{this.renderReminderList()}
			</div>
		);
	}
}

export default Reminders;