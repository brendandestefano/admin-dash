import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List';
import Chip from 'material-ui/Chip';
import {
	Step,
	Stepper,
	StepButton,
	StepContent,
} from 'material-ui/Stepper';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import UsersIcon from 'material-ui/svg-icons/social/person';
import JobsIcon from 'material-ui/svg-icons/action/work';
import CompaniesIcon from 'material-ui/svg-icons/social/location-city';
import EventsIcon from 'material-ui/svg-icons/editor/insert-invitation';
import GroupsIcon from 'material-ui/svg-icons/social/people';
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

const nestedItems = {
	people: ["student", "alumni", "faculty", "friends", "parents"],
	jobs: ["fullTime", "partTime", "internship", "jobShadow"],
	companies: ["forProfit", "nonProfit", "government", "onCampus"],
	groups: ["groups"],
	events: ["workshop", "OCR", "careerFair", "other"],
};

const availableDataPoints = {
	people: ["Name", "E-mail", "Major", "Minor", "Grad Year", "School ID", "City", "State", "Logins", "Title", "Employer", "Mentor", "Is Active"],
	jobs: ["Job Title", "Company", "City", "State", "Date Posted", "Views", "Applicants", "Posted By", "Poster E-mail", "User Role", "Job Type"],
	companies: ["Company", "URL", "Size", "Primary Industry", "Secondary Industry", "Address", "City", "State", "Zip", "Phone", "Jobs Posted", "# of Alumni", "Contact Name", "Contact E-mail", "Profit Type", "Description", "Mission", "Culture", "Contact Method", "Country", "Job Count"],
	groups: ["Group Name"],
	events: ["Event Title", "Date of Event", "Tags", "City", "State", "# of RSVP's", "# of Attendees", "Contact Name", "Contact E-mail"],
};

const defaultReports = {
	activeUsers: {
		reportType: "people",
		subField: ["student", "alumni", "faculty", "friends", "parents"],
		chosenFields: {1: "Name", 2: "E-mail", 3: "Major", 4: "School ID", 5: "User Role", 6: "Title", 7: "Employer"}
	},
	inactiveUsers: {
		reportType: "people",
		subField: ["student", "alumni", "faculty", "friends", "parents"],
		chosenFields: {1: "Name", 2: "E-mail", 3: "Major", 4: "School ID", 5: "User Role", 6: "Title", 7: "Employer"}
	},
	jobs: {
		reportType: "jobs",
		subField: ["fullTime", "partTime", "internship", "jobShadow"],
		chosenFields: {1: "Job Title", 2: "Company", 3: "Job Type", 4: "Industry", 5: "Date Posted", 6: "Posted By", 7: "User Role", 8: "Poster E-mail"}
	},
	companies: {
		reportType: "companies",
		subField: ["forProfit", "nonProfit", "government", "onCampus"],
		chosenFields: {1: "Company", 2: "URL", 3: "Primary Industry", 4: "Secondary Industry", 5: "Profit Type", 6: "Size", 7: "Address", 8: "City", 9: "State", 10: "Zip", 11: "Phone", 12: "Contact Name", 13: "Contact E-mail", 14: "Description", 15: "Mission", 16: "Culture", 17: "Contact Method", 18: "Country", 19: "Job Count"}
	},
	groups: {
		reportType: "groups",
		subField: ["groups"],
		chosenFields: {1: "Group Name"}
	},
	events: {
		reportType: "events",
		subField: ["workshop", "OCR", "careerFair", "other"],
		chosenFields: {1: "Event Title"}
	}
};

class Reports extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			stepIndex: 0,
			reportType: "",
			subField: [],
			chosenFields: {},
			fileType: null,
		};
	}

	renderSelectedFields(){
		if(Object.keys(this.state.chosenFields).length == 0)
			return(<p className="text-empty-report">No Data Points Selected</p>);
		let fields = [];
		for(let i in this.state.chosenFields){
			fields.push(
				<Chip
					key={i}
					onRequestDelete={() => this.toggleField(i, this.state.chosenFields[i])}
					backgroundColor={"#EA7600"}
					labelColor={"#FFF"}
					style={{textTransform: 'uppercase', float: 'left', marginRight: "10px", marginTop: "10px"}}
					className="tag-chip"
				>{this.state.chosenFields[i]}</Chip>
			);
		}
		return(<div style={{overflow: "overlay", marginBottom: "2rem"}}>
			<p className="text-empty-report">Selected Fields:</p>
			{fields}</div>);
		
	}

	toggleField(index, field){
		let currentFields = this.state.chosenFields;
		if(this.isSelectedField(field))
			delete currentFields[index];
		else
			currentFields[index] = field;
		this.setState({chosenFields: currentFields});
	}

	isSelectedField(field){
		field = field.charAt(0).toUpperCase() + field.slice(1);
		for(let i = 0; i < availableDataPoints[this.state.reportType].length; i++){
			if(this.state.chosenFields[i] == field)
				return true;
		}
		return false;
	}

	isSelectedSubField(field){
		if(this.state.reportType == '')
			return false;
		for(let i = 0; i < nestedItems[this.state.reportType].length; i++){
			if(this.state.subField[i] == field)
				return true;
		}
		return false;
	}

	renderReportFields(){
		if(Object.keys(this.state.subField).length == 0)
			return(<p className="text-empty-report">Pick one of the default report buttons above or choose data points on the left to create your report</p>);
		let fields = [];
		let globalThis = this;
		availableDataPoints[this.state.reportType].map((field, index) => {
			fields.push(<ListItem 
							key={index} 
							primaryText={field} 
							onTouchTap={() => globalThis.toggleField(index, field)}
							className={(globalThis.isSelectedField(field)) ? "selected" : ""}/>);
		});
		return(
			<div>
				<p className="text-empty-report">Possible Report Fields: {fields.length}</p>
				<p className="text-empty-report">Select which fields you would like to report on</p>
				<List>{fields}</List>
			</div>
		);
	}

	setReportAndSubField(reportType, subField){
		let newSubField = this.state.subField;
		newSubField.push(subField);
		this.setState({reportType: reportType, subField: newSubField});
	}

	getNestedItems(type){
		let items = [];
		let globalThis = this;
		for(let i = 0; i < nestedItems[type].length; i++){
			items.push(<ListItem key={nestedItems[type][i]} 
						primaryText={nestedItems[type][i].replace(/([A-Z])/g, ' $1').replace(/^./, function(str){return str.toUpperCase()})} 
						onTouchTap={() => this.setReportAndSubField(type,nestedItems[type][i])} 
						className={(globalThis.isSelectedSubField(nestedItems[type][i])) ? "selected" : ""}/>);
		}
		return items;
	}

	handleFileTypeChange(event, index, value){
		this.setState({fileType: value});
	}
	
	getRunButtonVisibility(){
		return (Object.keys(this.state.chosenFields).length == 0 || this.state.fileType == null);
	}

	createDefaultReport(step, type){
		this.setState({stepIndex: step, 
					reportType: defaultReports[type].reportType, 
					subField: defaultReports[type].subField, 
					chosenFields: defaultReports[type].chosenFields});
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={2}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Wheaton College" />
						<h3 className="sub-header">Reports</h3>
						<div className="reports">
							<div className="default-reports">
								<p>Default Reports:</p>
								<FlatButton label="Active Users" onClick={() => this.createDefaultReport(0, 'activeUsers').bind(this)}/>
								<FlatButton label="Inactive Users" onClick={() => this.createDefaultReport(0, 'inactiveUsers').bind(this)}/>
								<FlatButton label="Jobs" onClick={() => this.createDefaultReport(1, 'jobs').bind(this)}/>
								<FlatButton label="Companies" onClick={() => this.createDefaultReport(2, 'companies').bind(this)}/>
								<FlatButton label="Groups" onClick={() => this.createDefaultReport(3, 'groups').bind(this)}/>
								<FlatButton label="Events" onClick={() => this.createDefaultReport(4, 'events').bind(this)}/>
							</div>
							<div className="report-choices">
								<Stepper
									activeStep={this.state.stepIndex}
									linear={false}
									orientation="vertical"
								>
									<Step className="report-step">
										<StepButton className="reports-stepper-button"
											onClick={() => this.setState({stepIndex: 0})}
											icon={<UsersIcon style={{width: "32px", height: "32px", fill: "#555"}}/>}>
											People
										</StepButton>
										<StepContent>
											<List>
												{this.getNestedItems('people')}
											</List>
										</StepContent>
									</Step>
									<Step className="report-step">
										<StepButton className="reports-stepper-button"
											onClick={() => this.setState({stepIndex: 1})}
											icon={<JobsIcon style={{width: "32px", height: "32px", fill: "#555"}}/>}>
											Jobs
										</StepButton>
										<StepContent>
												{this.getNestedItems('jobs', 1)}
										</StepContent>
									</Step>
									<Step className="report-step">
										<StepButton className="reports-stepper-button"
											onClick={() => this.setState({stepIndex: 2})}
											icon={<CompaniesIcon style={{width: "32px", height: "32px", fill: "#555"}}/>}>
											Companies
										</StepButton>
										<StepContent>
												{this.getNestedItems('companies', 2)}
										</StepContent>
									</Step>
									<Step className="report-step">
										<StepButton className="reports-stepper-button"
											onClick={() => this.setState({stepIndex: 3})}
											icon={<GroupsIcon style={{width: "32px", height: "32px", fill: "#555"}}/>}>
											Groups
										</StepButton>
										<StepContent>
												{this.getNestedItems('groups', 3)}
										</StepContent>
									</Step>
									<Step className="report-step">
										<StepButton className="reports-stepper-button"
											onClick={() => this.setState({stepIndex: 4})}
											icon={<EventsIcon style={{width: "32px", height: "32px", fill: "#555"}}/>}>
											Events
										</StepButton>
										<StepContent>
												{this.getNestedItems('jobs', 4)}
										</StepContent>
									</Step>
								</Stepper>
							</div>
							<div className="report-list">
								{this.renderReportFields()}
							</div>
							<div className="report-settings">
								{this.renderSelectedFields()}
								<DatePicker hintText="Start Date" mode="landscape" className="report-start-date"/>
								<DatePicker hintText="End Date" mode="landscape" className="report-end-date"/>
								<SelectField
									value={this.state.fileType}
									onChange={this.handleFileTypeChange.bind(this)}
									floatingLabelText="Select File Type"
									fullWidth={true}>
									<MenuItem key={1} value={1} primaryText="CSV" />
									<MenuItem key={2} value={2} primaryText="XLSX" />
									<MenuItem key={3} value={3} primaryText="ODS" />
									<MenuItem key={4} value={4} primaryText="PDF" />
								</SelectField>
								<FlatButton label="Run Report" className="btn-run-report" disabled={this.getRunButtonVisibility()}/>
							</div>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Reports;