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
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import School from '../models/School';
import Companies from '../models/Companies';

let companiesPreview = require('../img/screens/companySectionText.png');

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
class CompaniesPicker extends Component{
	constructor(props, context){
		super(props, context);

		this.handleCompaniesDialogClose = this.handleCompaniesDialogClose.bind(this);
		this.handleCompaniesDialogOpen = this.handleCompaniesDialogOpen.bind(this);
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleDialogOpen = this.handleDialogOpen.bind(this);

		this.state = {
			previewDialogOpen: false,
			previewDialogTitle: '',
			previewDialogContent: '',
			suggestedCompaniesShown: true,
			companies: null,
			companiesDialogOpen: false,
			companiesForDialog: null,
			showCompaniesErrorMessage: false
		};
	}

	componentWillMount(){
		let companies = [];
		Companies.sort(function(a,b) {return (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0);}).slice(0,6).map((company, index) => {
			companies.push(company);
		});
		this.setState({companies: companies, companiesForDialog: Companies});
	}

	handleCompaniesDialogOpen(){
		this.setState({companiesDialogOpen: true});
	}

	handleCompaniesDialogClose(){
		this.setState({companiesDialogOpen: false});
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

	getTopCompanies(){
		return this.state.companies.sort(function(a,b) {return (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0);}).map((company, index) => {
			if(index >= 6)
				return;
			return(
				<Chip
					key={index}
					className="invite-chip"
				>
					<ListItem 
						key={index} 
						className="hover-transparent"
						leftAvatar={<Avatar src={company.logo} />}
						primaryText={company.name} />
				</Chip>
			);
		})
	}

	renderCompanies(){
		return this.state.companiesForDialog.map((company, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={company.logo} />}
					primaryText={company.name}
					rightIcon={<PlusIcon className="invitations-add" style={{fill: "#555"}} />}
					onTouchTap={() => {this.inviteCompany(company)}}
					className={this.inBothLists(company)} 
				/>
			);
		})
	}

	inviteCompany(companyToAdd){
		if(this.state.companies.length == 6){
			this.setState({showCompaniesErrorMessage: true});
			return false;
		}
		let companies = this.state.companies.push(companyToAdd);
		this.setState({companies: this.state.companies, suggestedCompaniesShown: false});
	}

	inBothLists(companyObject){
		const result = this.state.companies.filter(function(company, key) {
			return company.name == companyObject.name;
		});
		return (Object.keys(result).length !== 0) ? 'selected' : '';
	}

	searchCompanies(event){
		let searchValue = event.target.value;
		let companies = (length >= searchValue.length) ? Companies : this.state.companiesForDialog;
		length = searchValue.length;
		const result = companies.filter(function(company, key) {
		    return company.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({companiesForDialog: result});
	}

	renderChosenCompanies(){
		return this.state.companies.map((company, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={company.logo} />}
					primaryText={company.name}
					rightIcon={<RemoveIcon style={{fill: "#555"}} />}
					onTouchTap={() => this.removeCompany(company)} />
			);
		});
	}

	removeCompany(companyToRemove){
		let result = this.state.companies.filter((company, index) => {
			return company != companyToRemove;
		});
		this.setState({companies: result, showCompaniesErrorMessage: false});
	}

	render(){
		return(
			<div>
				<h2 style={{marginBottom: "1rem", color: "#555", fontSize: "1.25rem"}}>Companies</h2>
				{(this.state.suggestedCompaniesShown 
					&& <p style={{color: "#555", fontSize: "1rem"}}>{School.name+"'s Suggested Companies:"}</p>)}
				<div style={{overflow: "overlay"}}>
					{this.getTopCompanies()}
				</div>
				<FlatButton
					label="Manage Companies"
					style={{float: "left", backgroundColor: muiTheme.palette.primary1Color, color: "#FFF", margin: "1rem 0"}}
					onTouchTap={this.handleCompaniesDialogOpen}
				/>
				<div className="landing-config-group" style={{height: "2.25rem"}}>
					<FlatButton
						label="Preview"
						className="preview"
						onTouchTap={() => this.handleDialogOpen("Companies", companiesPreview)}
					/>
				</div>
				<Dialog
					title={<h3>Manage Companies<ExitIcon style={{float: "right"}} onTouchTap={this.handleCompaniesDialogClose}/></h3>}
					modal={false}
					open={this.state.companiesDialogOpen}
					onRequestClose={this.handleCompaniesDialogClose}
					contentStyle={{maxWidth: "none", width: "90%"}}>
					<div className="invitation-left-75">
						<TextField
							hintText="Search for people by name"
							fullWidth={true}
							onChange={(e) => this.searchCompanies(e)}
							inputStyle={{color: "#555"}}
						/>
						<List style={{paddingTop: "2.25rem"}}>
							{this.renderCompanies()}
						</List>
					</div>
					<div className="event-input-right-25 invitation-selected-column">
						{(!this.state.showCompaniesErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem"}}>Your Companies</p>)}
						{(this.state.showCompaniesErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem", color: "#FF0000"}}>Max of 6 Companies.  Delete A Company First!</p>)}
						<List>
							{this.renderChosenCompanies()}
						</List>
					</div>
					<div style={{borderTop: "1px solid #E0E0E0", height: "4rem", position: "fixed", bottom: "0", left: "0", right: "0", background: "#FFF", zIndex: "1"}}>
						<RaisedButton
							label="Ok"
							disableTouchRipple={true}
							disableFocusRipple={true}
							primary={true}
							onTouchTap={this.handleCompaniesDialogClose}
							style={{marginRight: 12, marginTop: 12, float: "right"}}
							className="rounded-button"
						/>
						<FlatButton
							label="Cancel"
							disableTouchRipple={true}
							disableFocusRipple={true}
							onTouchTap={this.handleCompaniesDialogClose}
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

export default CompaniesPicker;