import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import GeneralIcon from 'material-ui/svg-icons/action/settings';
import IndustryIcon from 'material-ui/svg-icons/action/account-balance';
import FieldsIcon from 'material-ui/svg-icons/social/school';
import LocationIcon from 'material-ui/svg-icons/maps/place';
import PlusIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RemoveIcon from 'material-ui/svg-icons/content/clear';
import GroupsIcon from 'material-ui/svg-icons/social/people';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';

import ExitIcon from 'material-ui/svg-icons/content/clear';

import CTEditor from '../CTEditor';
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
	{id: 0, name: 'Sam Smith', image: 'https://randomuser.me/api/portraits/med/men/83.jpg', field: '2014 - Business Administration', tags: '#athletics, #music, #investment, #technology'},
	{id: 1, name: 'Donald Moore', image: 'https://randomuser.me/api/portraits/med/men/84.jpg', field: '2008 - Marketing', tags: '#mobile, #food, #entrepreneurshp, #education'},
	{id: 2, name: 'Steve Jones', image: 'https://randomuser.me/api/portraits/med/men/85.jpg', field: '2019 - Business Administration', tags: '#traveling, #music, #investment, #cyber'},
	{id: 3, name: 'John Doe', image: 'https://randomuser.me/api/portraits/med/men/86.jpg', field: '2016 - Marketing', tags: '#science, #finance, #investment, #technology'},
	{id: 4, name: 'James Wright', image: 'https://randomuser.me/api/portraits/med/men/87.jpg', field: '2011 - Finance', tags: '#coding, #music, #mobile, #technology'},
	{id: 5, name: 'Sam Smith', image: 'https://randomuser.me/api/portraits/med/men/83.jpg', field: '2014 - Business Administration', tags: '#athletics, #music, #investment, #technology'},
	{id: 6, name: 'Donald Moore', image: 'https://randomuser.me/api/portraits/med/men/84.jpg', field: '2008 - Marketing', tags: '#mobile, #food, #entrepreneurshp, #education'},
	{id: 7, name: 'Steve Jones', image: 'https://randomuser.me/api/portraits/med/men/85.jpg', field: '2019 - Business Administration', tags: '#traveling, #music, #investment, #cyber'},
	{id: 8, name: 'John Doe', image: 'https://randomuser.me/api/portraits/med/men/86.jpg', field: '2016 - Marketing', tags: '#science, #finance, #investment, #technology'},
	{id: 9, name: 'James Wright', image: 'https://randomuser.me/api/portraits/med/men/87.jpg', field: '2011 - Finance', tags: '#coding, #music, #mobile, #technology'},
];

const companies = [
	{id: 10, name: 'Nike', image: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-128.png', field: 'Tim Carey', tags: '#athletics, #sports, #technology', company: true},
	{id: 11, name: 'Fidelity', image: 'http://file.answcdn.com/answ-cld/image/upload/v1/tk/brand_image/43591956/2cebf63c50a6b753dc7d9f34c50ccdabf452443d.png', field: 'Kathy Smith', tags: '#investment, #banking, #VC, #technology', company: true},
	{id: 12, name: 'Bank of America', image: 'http://about.bankofamerica.com/assets/images/common/bank_logo_256x256.png', field: 'Steve Jones', tags: '#traveling, #music, #investment, #cyber', company: true},
	{id: 13, name: 'Reebok', image: 'http://static.wixstatic.com/media/f8a510c25eed86f4013966caa21174db.wix_mp_256', field: 'John Doe', tags: '#science, #finance, #investment, #technology', company: true},
	{id: 14, name: 'Adidas', image: 'http://www.indosoccerjersey.com/image/cache/data/Logo/Brand/200px-Adidas_Logo.svg-128x128.png', field: 'James Wright', tags: '#coding, #music, #mobile, #technology', company: true},
];

const groups = [
	{id: 15, name: 'Marketing Club', image: 'https://s3.amazonaws.com/campustapstaging/SYYdmvy8TBezhUPcpdl8_c2e56917549043a09b2ba98409b6531d.png', field: 23, tags: '#athletics, #sports, #technology', group: true},
	{id: 16, name: 'Biotech', image: 'https://s3.amazonaws.com/campustapstaging/gFlCbmaQeOgdsN2XHZEs_ad7b19bc23a14b3c84e9e2e6a411f9af.png', field: 103, tags: '#investment, #banking, #VC, #technology', group: true},
	{id: 17, name: 'LGBTQ', image: 'https://s3.amazonaws.com/campustapstaging/2vi484CGQuCrlBUlQLdA_16e8b888982a4ac9833b78b1b6de55fd.png', field: 45, tags: '#traveling, #music, #investment, #cyber', group: true},
	{id: 18, name: 'Graduate School Students', image: 'https://s3.amazonaws.com/campustapstaging/7BxTRBSsOukzn4TelYAc_b56aebccc862495c9f5cc0c07030475b.png', field: 231, tags: '#science, #finance, #investment, #technology', group: true},
	{id: 19, name: 'Alumni Jobs', image: 'https://s3.amazonaws.com/campustapstaging/GLNMD1XuSgWqVnMbwCNU_d8bead46b947463c89e6ad8e8c2231d7.png', field: 27, tags: '#coding, #music, #mobile, #technology', group: true},
];

let length = 0;

let inviteAllOptions = ["students", "alumni", "staff", "parents", "mentors", "mentees"];

let optionsToKeyDataMap = {
	students: "role",
	alumni: "role",
	staff: "role",
	parents: "role",
	mentors: "mentor",
	mentees: "mentor",
};

let optionsToValueDataMap = {
	students: "student",
	alumni: "alumni",
	staff: "staff",
	parents: "parent",
	mentors: true,
	mentees: false,
};

let majors = ["biology", "marketing", "finance"];

class Email extends Component{
	constructor(props, context){
		super(props, context);

		this.handleRadiusDropdownChange = this.handleRadiusDropdownChange.bind(this);
		this.state = {
			dialogOpen: false,
			invitations: [],
			activeUsers: users,
			radiusValue: '0',
			fieldsOfStudyShowCount: 5,
			industriesShowCount: 5,
			groupsShowCount: 5,
			companyDialog: false,
			fromOptions: ['remy@thecampustap.com'],
			fromValue: 'remy@thecampustap.com',
			isAuthenticated: false,
			overallCount: 0,
		};
	}

	handleDialogOpen(){
		this.setState({dialogOpen: true, activeUsers: users});
	}

	handleDialogClose(){
		this.setState({dialogOpen: false});
	}

	getInitialUsersState(){
		let invitations = this.state.invitations;
		const result = users.filter(function(user, key){
			return invitations.indexOf(user) == -1;
		});
		return result;
	}

	renderUsers(users){
		return users.map((user, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={user.image} />}
					primaryText={user.name}
					secondaryText={
						<p>
							<span>{(user.group) ? user.field+' members' : user.field}</span>
							<span className="tags pull-right" style={{textAlign: "right"}}>{user.tags}</span>
						</p>
					}
					rightIcon={<PlusIcon className="invitations-add" style={{fill: "#555"}} />}
					onTouchTap={() => {this.inviteUser(user.id)}}
					className={this.inBothLists(user)} />
			);
		})
	}

	inBothLists(userObject){
		const invite = this.state.invitations.filter(function(user, key) {
			return user.id == userObject.id;
		});
		return (Object.keys(invite).length !== 0) ? 'selected' : '';
	}

	inviteUser(userId){
		const invite = this.state.activeUsers.filter(function(user, key) {
			return user.id == userId;
		});
		let invitations = this.state.invitations.push(invite[0]);
		let count = 0;
		this.state.invitations.map((invitation, index) => {
			count = (invitation.group) ? count+invitation.field : count+1;
		});
		this.setState({invitations: this.state.invitations, overallCount: count});
	}

	uninviteUser(userObject){
		const invitations = this.state.invitations.filter(function(user, key) {
			return user.id != userObject.id;
		});
		this.setState({invitations: invitations});
	}

	renderInvites(){
		return this.state.invitations.map((invite, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={invite.image} />}
					primaryText={(invite.company) ? invite.field : invite.name}
					secondaryText={(invite.group) ? invite.field+' members' : null}
					rightIcon={<RemoveIcon style={{fill: "#555"}} />}
					onTouchTap={() => this.uninviteUser(invite)} />
			);
		});
	}

	handleRadiusDropdownChange(event, index, value){
		this.setState({radiusValue: value});
	}

	showMore(event, type){
		let filterType = type+"ShowCount";
		if(event.target.parentNode.querySelectorAll('.show-more')[0].textContent == 'Show Less'){
			this.showLess(event, type);
			return true;
		}
		for(let i = 1; i < 6; i++){
			if(event.target.parentNode.querySelectorAll('.filter')[this.state[filterType]]){
				event.target.parentNode.querySelectorAll('.filter')[this.state[filterType]].style.cssText = 'display: block !important';
				this.state[filterType] = this.state[filterType] + 1;
			}
		}
		if(this.state[filterType] == event.target.parentNode.querySelectorAll('.filter').length)
			event.target.parentNode.querySelectorAll('.show-more')[0].textContent = 'Show Less';
	}

	showLess(event, type){
		let filterType = type+"ShowCount";
		if(this.state[filterType] == event.target.parentNode.querySelectorAll('.filter').length)
			this.state[filterType] = this.state[filterType] - 1;
		for(let i = 1; i < 6; i++){
			if(event.target.parentNode.querySelectorAll('.filter')[this.state[filterType]]){
				event.target.parentNode.querySelectorAll('.filter')[this.state[filterType]].setAttribute('style', 'display: none !important');
				if(i != 5)
					this.state[filterType] = this.state[filterType] - 1;
			}
		}
		event.target.parentNode.querySelectorAll('.show-more')[0].textContent = 'Show More';
	}

	switchToCompanies(event, checked){
		if(checked){
			window.setTimeout(
				function() {
					this.setState({companyDialog: true});
					this.setState({activeUsers: companies});
				}.bind(this),
				0
			);
		}	
		else
			window.setTimeout(
				function() {
					this.setState({activeUsers: users});
				}.bind(this),
				0
			);
	}

	switchToGroups(event, checked){
		if(checked){
			window.setTimeout(
				function() {
					this.setState({activeUsers: groups});
				}.bind(this),
				0
			);
		}	
		else
			window.setTimeout(
				function() {
					this.setState({activeUsers: users});
				}.bind(this),
				0
			);
	}

	handleMoreInfoDialogClose(){
		this.setState({companyDialog: false});
	}

	renderFilters(){
		const actions = [
			<FlatButton
				label="Ok"
				primary={true}
				onTouchTap={this.handleMoreInfoDialogClose.bind(this)} />
		];
		return (
			<div>
				<div className="filter-container">
					<GeneralIcon className="invitations-icon" />
					<p className="filter-title">General</p>
					<Checkbox 
						label="Suggested"
						labelStyle={{color: "#555"}} />
					<Checkbox 
						label="Students"
						labelStyle={{color: "#555"}} />
					<Checkbox 
						label="Alumni"
						labelStyle={{color: "#555"}} />	
					<Checkbox 
						label="Administrators"
						labelStyle={{color: "#555"}} />
					<Checkbox 
						label="Companies"
						labelStyle={{color: "#555"}} 
						onCheck={this.switchToCompanies.bind(this)} />
					<Checkbox 
						label="Groups"
						labelStyle={{color: "#555"}} 
						onCheck={this.switchToGroups.bind(this)} />
					<Dialog
						title="Info About Companies"
						actions={actions}
						modal={true}
						open={this.state.companyDialog} >
						Companies are not included in the general filtering but can be accessed here. (Need better copy)
						<Checkbox 
							label="Do Not Show Me This Again"
							labelStyle={{color: "#555"}}
							style={{position: "absolute", fontSize: ".85rem", bottom: "0.85rem", width: "50%"}} />
					</Dialog>	
				</div>
				<div className="filter-container">
					<FieldsIcon className="invitations-icon" />
					<p className="filter-title">Fields of Study</p>
					<Checkbox 
						label="Art"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Biology"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Business"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Chemistry"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Finance"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Government"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="History"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Spanish"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Sociology"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Theater"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<p className="show-more" onClick={(e) => this.showMore(e, 'fieldsOfStudy')}>Show More</p>
				</div>
				<div className="filter-container">
					<IndustryIcon className="invitations-icon" />
					<p className="filter-title">Industries</p>
					<Checkbox 
						label="Biotech"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Business"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Education"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Fashion"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Finance"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Marketing"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Research"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Sales"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Software"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Sports"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<p className="show-more" onClick={(e) => this.showMore(e, 'industries')}>Show More</p>
				</div>
				<div className="filter-container">
					<GroupsIcon className="invitations-icon" />
					<p className="filter-title">Groups</p>
					<Checkbox 
						label="Biotech"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Business"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Education"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Fashion"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Finance"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Marketing"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Research"
						labelStyle={{color: "#555"}} 
						className="filter" />	
					<Checkbox 
						label="Sales"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Software"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<Checkbox 
						label="Sports"
						labelStyle={{color: "#555"}} 
						className="filter" />
					<p className="show-more" onClick={(e) => this.showMore(e, 'groups')}>Show More</p>
				</div>
				<div className="filter-container">
					<LocationIcon className="invitations-icon" />
					<p className="filter-title">Location</p>
					<TextField
						floatingLabelText="Enter your zip code"
						hintText="i.e. 02113"
						onChange={() => this.filterByGeo()}
						inputStyle={{color: "#555"}}
						style={{marginTop: "-1rem"}}
					/>
					<SelectField
						floatingLabelText="Radius" 
						value={this.state.radiusValue} 
						onChange={this.handleRadiusDropdownChange.bind(this)}
						labelStyle={{color: "#555"}}>
						<MenuItem value="0" primaryText="--" />
						<MenuItem value="5" primaryText="5 Miles" />
						<MenuItem value="10" primaryText="10 Miles" />
						<MenuItem value="25" primaryText="25 Miles" />
						<MenuItem value="50" primaryText="50 Miles" />
						<MenuItem value="50+" primaryText="50+ Miles" />
					</SelectField>
				</div>
			</div>
		);
	}

	inviteAll(){
		this.state.activeUsers.map((user, index) => {
			if(this.state.invitations.indexOf(user) == -1)
				this.inviteUser(user.id);
		});
	}

	filterByGeo(){return}
	cancelInvite(){return}
	sendInvite(){return}

	searchUsers(event){
		let searchValue = event.target.value;
		let users = (length >= searchValue.length) ? this.getInitialUsersState() : this.state.activeUsers;
		length = searchValue.length;
		const result = users.filter(function(user, key) {
		    return user.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({activeUsers: result});
	}

	renderEmailRecipients(){
		return this.state.invitations.map((invite, index) => {
			if(index > 10)
				return;
			return(
				<Chip
					className="invite-chip"
				>
					<ListItem 
						key={index} 
						className="hover-transparent"
						leftAvatar={<Avatar src={invite.image} />}
						primaryText={(invite.company) ? invite.field : ((invite.group) ? invite.name+' ('+invite.field+')' : invite.name)} />
				</Chip>
				
			);
		});
	}

	updateEditorState(markup){
		//do something with `markup`
	}

	renderFromOptions(){
		return this.state.fromOptions.map((option, index) => {
			return(
				<MenuItem value={option} primaryText={option} />
			);
		});
	}

	handleFromValueChange(event, index, value){
		let newEmails = this.state.fromOptions;
		newEmails.push(value);
		this.setState({fromOptions: newEmails});
	}

	authenticateEmail(){
		let newOptions = this.state.fromOptions;
		newOptions.push(this.refs.authenticateEmail.getValue());
		this.setState({fromOptions: newOptions, isAuthenticated: true});
		let globalThis = this;
		window.setTimeout(function(){
			globalThis.setState({isAuthenticated: false});
		}, 3000);
	}

	renderAuthenticateEmailBtn(){
		if(!this.state.isAuthenticated)
			return(<RaisedButton
						label="Authenticate"
						primary={true}
						onTouchTap={this.authenticateEmail.bind(this)}
					/>);
		else
			return(
				<p style={{display: "inline-block", fontSize: "1rem", color: muiTheme.palette.primary1Color}}>Email added to dropdown!</p>
			);
	}

	getSelectedCount(){
		if(this.state.invitations.length == 0) 
			return;
		let count = 0;
		this.state.invitations.map((invitation, index) => {
			count = (invitation.group) ? count+invitation.field : count+1;
		});
		return(<span className="pull-right">{count}</span>);
	}

	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={7}/>
					<div className="main">
						<Banner backgroundUrl="https://www.filepicker.io/api/file/xwfciiM0Sw2iqkc2SDCY" text="Wheaton College" />
						<h3 className="sub-header">Email</h3>
						<h4 style={{color: "#555", fontSize: "1.5rem", margin: "2rem 0.5rem 1rem 1rem", fontWeight: "300", display: "inline-block"}}>From:</h4>
						<SelectField value={this.state.fromValue} onChange={this.handleFromValueChange.bind(this)}>
							{this.renderFromOptions()}
						</SelectField>
						<TextField 
							floatingLabelText="Authenticate Email"
							ref="authenticateEmail"
							style={{marginLeft: "1rem", top: "-0.65rem", marginRight: "1rem"}}
						/>
						{this.renderAuthenticateEmailBtn()}
						<br />
						<h4 style={{color: "#555", fontSize: "1.5rem", margin: "2rem 0.5rem 1rem 1rem", fontWeight: "300", display: "inline-block"}}>{(this.state.overallCount != 0) ? 'To ('+this.state.overallCount+'):' : 'To:'}</h4>
							{this.renderEmailRecipients()}
						{(this.state.invitations.length != 0 && <br />)}
						<FlatButton 
							backgroundColor={muiTheme.palette.primary1Color}
							style={{color: "#FFF", margin: "1rem 1rem 0"}}
							label="Manage Recipients"
							onTouchTap={() => this.handleDialogOpen()}
						/>
						<br />
						<h4 style={{color: "#555", fontSize: "1.5rem", margin: "2rem 0.5rem 1rem 1rem", fontWeight: "300", display: "inline-block"}}>Subject:</h4>
						<TextField 
							style={{width: "90%"}}
							inputStyle={{fontSize: "1.5rem", color: "#555"}}
						/>
						<h4 style={{color: "#555", fontSize: "1.5rem", margin: "2rem 0.5rem 1rem 1rem", fontWeight: "300", display: "inline-block"}}>Body:</h4>
						<div style={{margin: "0 1rem"}}>
							<CTEditor 
								defaultText="Write an email..."
								btnText="Send"
								onChange={this.updateEditorState}
								btnClassName="editor-done-btn"
								attachmentTextStyle={{margin: "1rem 0", fontSize: "1.25rem", color: "#555", fontWeight: "300"}}
							/>
						</div>
					</div>
					<Dialog
						title={<h3>Manage Recipients<ExitIcon style={{float: "right"}} onTouchTap={() => this.handleDialogClose()}/></h3>}
						modal={false}
						open={this.state.dialogOpen}
						onRequestClose={this.handleDialogClose.bind(this)}
						contentStyle={{maxWidth: "none", width: "90%"}}>
						<div className="invitation-left-75" style={{paddingLeft: "1rem"}}>
						<TextField
							hintText="Search for people to invite by name or tag"
							fullWidth={true}
							onChange={(e) => this.searchUsers(e)}
							inputStyle={{color: "#555"}}
						/>
						<div style={{width: "100%"}}>
							<div className="event-input-left-33 invitation-left-33 invitation-column" 
								style={{borderRight: "1px solid #E0E0E0", marginTop: "-0.5rem"}}>
								{this.renderFilters()}
							</div>
							<div className="event-input-right-66 invitation-column">
								<RaisedButton
									label="Invite All"
									disableTouchRipple={true}
									disableFocusRipple={true}
									primary={true}
									onTouchTap={this.inviteAll.bind(this)}
									style={{float: "right", marginRight: 8}}
									className="rounded-button"
								/>
								<List style={{paddingTop: "2.25rem"}}>
									{this.renderUsers(this.state.activeUsers)}
								</List>
							</div>
						</div>
					</div>
					<div className="event-input-right-25 invitation-selected-column">
						<p className="sub-header-2" style={{padding: "0 1rem"}}>Selected 
							{this.getSelectedCount()}
						</p>
						<List>
							{this.renderInvites()}
						</List>	
					</div>
					<div style={{borderTop: "1px solid #E0E0E0", height: "4rem", position: "fixed", bottom: "0", left: "0", right: "0", background: "#FFF", zIndex: "1"}}>
						<RaisedButton
							label="Ok"
							disableTouchRipple={true}
							disableFocusRipple={true}
							primary={true}
							onTouchTap={() => this.handleDialogClose()}
							style={{marginRight: 12, marginTop: 12, float: "right"}}
							className="rounded-button"
						/>
						<FlatButton
							label="Cancel"
							disableTouchRipple={true}
							disableFocusRipple={true}
							onTouchTap={() => this.handleDialogClose()}
							className="rounded-button grey-button"
							style={{marginRight: 12, marginTop: 12, float: "right"}}
						/>
					</div>
					</Dialog>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Email;