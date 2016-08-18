import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Chip from 'material-ui/Chip';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import PlusIcon from 'material-ui/svg-icons/content/add-circle-outline';
import ExitIcon from 'material-ui/svg-icons/content/clear';
import RemoveIcon from 'material-ui/svg-icons/content/clear';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import ViewsIcon from 'material-ui/svg-icons/action/visibility';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {Card , CardHeader} from 'material-ui/Card';

import School from '../models/School';
import Companies from '../models/Companies';

let jobsPreview = require('../img/screens/companySectionText.png');

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
class JobsPicker extends Component{
	constructor(props, context){
		super(props, context);

		this.handleJobsDialogClose = this.handleJobsDialogClose.bind(this);
		this.handleJobsDialogOpen = this.handleJobsDialogOpen.bind(this);
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleDialogOpen = this.handleDialogOpen.bind(this);

		this.state = {
			previewDialogOpen: false,
			previewDialogTitle: '',
			previewDialogContent: '',
			suggestedJobsShown: true,
			jobs: null,
			jobsDialogOpen: false,
			jobsForDialog: null,
			showJobsErrorMessage: false
		};
	}

	getIsSecondModuleEnabled(){
		if(School.enabledModules[1] == 'jobs')
			return true;
		return false;
	}

	componentWillMount(){
		let result = Companies.map((company, index) => {
			company.spotlightJob['name'] = company.name;
			company.spotlightJob['logo'] = company.logo;
			return company.spotlightJob;
		});
		let jobs = [];
		let slice = (this.getIsSecondModuleEnabled()) ? 5 : 3;
		result.slice(0,slice).map((job, index) => {
			jobs.push(job);
		});
		this.setState({jobs: jobs, jobsForDialog: result});
	}

	handleJobsDialogOpen(){
		this.setState({jobsDialogOpen: true});
	}

	handleJobsDialogClose(){
		this.setState({jobsDialogOpen: false});
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

	getTopJobs(){
		return this.state.jobs.map((job, index) => {
			let i = (this.getIsSecondModuleEnabled()) ? 5 : 3;
			if(index >= i)
				return;
			return(
				<Card key={index} className="event-small-card" style={{width: "30%"}}>
					<CardHeader
						title={job.name+' | '+job.position}
						subtitle={job.location}
						avatar={job.logo}
					/>
					<p style={{padding: "0 1rem", color: "#555", minHeight: "7.5rem", lineHeight: "1.25rem"}}>
						{this.addEllipsis(job.description, 250)}
					</p>
					<hr style={{borderWidth: "1px"}}/>
					<div style={{padding: "0 1rem 1rem"}}>
						<FavoriteIcon style={{fill: "#555", verticalAlign: "sub", width: "1.25rem", height: "1.25rem", marginTop: "0.5rem"}}/>
						<p className="inline-block" style={{color: "#555", marginLeft: "0.25rem"}}>{job.favorites}</p>
						<ViewsIcon style={{fill: "#555", verticalAlign: "sub", width: "1.25rem", height: "1.25rem", marginLeft: "0.25rem"}}/>
						<p className="inline-block" style={{color: "#555", marginLeft: "0.25rem"}}>{job.views}</p>
					</div>
				</Card>
			);
		})
	}

	addEllipsis(text, length){
		if(text.length < length)
			return text;
		return text.slice(0, length)+'...';
	}

	renderJobs(){
		return this.state.jobsForDialog.map((job, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={job.logo} />}
					primaryText={job.name}
					secondaryText={job.position}
					rightIcon={<PlusIcon className="invitations-add" style={{fill: "#555"}} />}
					onTouchTap={() => {this.inviteJob(job)}}
					className={this.inBothLists(job)} 
				/>
			);
		})
	}

	inviteJob(jobToAdd){
		let limit = (this.getIsSecondModuleEnabled()) ? 5 : 3;
		if(this.state.jobs.length == limit){
			this.setState({showJobsErrorMessage: true});
			return false;
		}
		let jobs = this.state.jobs.push(jobToAdd);
		this.setState({jobs: this.state.jobs, suggestedJobsShown: false});
	}

	inBothLists(jobObject){
		const result = this.state.jobs.filter(function(job, key) {
			return job.name == jobObject.name;
		});
		return (Object.keys(result).length !== 0) ? 'selected' : '';
	}

	searchJobs(event){
		let searchValue = event.target.value;
		let jobs = (length >= searchValue.length) ? Companies.map((company, index) => {
			company.spotlightJob['name'] = company.name;
			company.spotlightJob['logo'] = company.logo;
			return company.spotlightJob;
		}) : this.state.jobsForDialog;
		length = searchValue.length;
		const result = jobs.filter(function(job, key) {
		    return job.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({jobsForDialog: result});
	}

	renderChosenJobs(){
		return this.state.jobs.map((job, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={job.logo} />}
					primaryText={job.name}
					secondaryText={job.position}
					rightIcon={<RemoveIcon style={{fill: "#555"}} />}
					onTouchTap={() => this.removeCompany(job)} />
			);
		});
	}

	removeCompany(jobToRemove){
		let result = this.state.jobs.filter((job, index) => {
			return job != jobToRemove;
		});
		this.setState({jobs: result, showJobsErrorMessage: false});
	}

	render(){
		return(
			<div>
				<h2 style={{marginBottom: "1rem", color: "#555", fontSize: "1.25rem"}}>Jobs</h2>
				{(this.state.suggestedJobsShown 
					&& <p style={{color: "#555", fontSize: "1rem"}}>{School.name+"'s Suggested Jobs:"}</p>)}
				<div style={{overflow: "overlay"}}>
					{this.getTopJobs()}
				</div>
				<FlatButton
					label="Manage Jobs"
					style={{float: "left", backgroundColor: muiTheme.palette.primary1Color, color: "#FFF", margin: "1rem 0"}}
					onTouchTap={this.handleJobsDialogOpen}
				/>
				<div className="landing-config-group" style={{height: "2.25rem"}}>
					<FlatButton
						label="Preview"
						className="preview"
						onTouchTap={() => this.handleDialogOpen("Jobs", jobsPreview)}
					/>
				</div>
				<Dialog
					title={<h3>Manage Jobs<ExitIcon style={{float: "right"}} onTouchTap={this.handleJobsDialogClose}/></h3>}
					modal={false}
					open={this.state.jobsDialogOpen}
					onRequestClose={this.handleJobsDialogClose}
					contentStyle={{maxWidth: "none", width: "90%"}}>
					<div className="invitation-left-75">
						<TextField
							hintText="Search for people by name"
							fullWidth={true}
							onChange={(e) => this.searchSchool.jobs(e)}
							inputStyle={{color: "#555"}}
						/>
						<List style={{paddingTop: "2.25rem"}}>
							{this.renderJobs()}
						</List>
					</div>
					<div className="event-input-right-25 invitation-selected-column">
						{(!this.state.showJobsErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem"}}>Your Jobs</p>)}
						{(this.state.showJobsErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem", color: "#FF0000"}}>{"Max of "+((this.getIsSecondModuleEnabled()) ? 5 : 3)+" Jobs.  Delete A Job First!"}</p>)}
						<List>
							{this.renderChosenJobs()}
						</List>
					</div>
					<div style={{borderTop: "1px solid #E0E0E0", height: "4rem", position: "fixed", bottom: "0", left: "0", right: "0", background: "#FFF", zIndex: "1"}}>
						<RaisedButton
							label="Ok"
							disableTouchRipple={true}
							disableFocusRipple={true}
							primary={true}
							onTouchTap={this.handleJobsDialogClose}
							style={{marginRight: 12, marginTop: 12, float: "right"}}
							className="rounded-button"
						/>
						<FlatButton
							label="Cancel"
							disableTouchRipple={true}
							disableFocusRipple={true}
							onTouchTap={this.handleJobsDialogClose}
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

export default JobsPicker;