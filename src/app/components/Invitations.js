import React, {Component} from 'react';
import {render} from 'react-dom';
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

let length = 0;

class Invitations extends Component{
	constructor(props, context){
		super(props, context);

		this.handleRadiusDropdownChange = this.handleRadiusDropdownChange.bind(this);
		this.state = {
			invitations: [],
			activeUsers: users,
			radiusValue: '0',
			fieldsOfStudyShowCount: 5,
			industriesShowCount: 5,
			groupsShowCount: 5,
			companyDialog: false,
		}
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
							<span>{user.field}</span>
							<span className="tags pull-right" style={{textAlign: "right"}}>{user.tags}</span>
						</p>
					}
					rightIcon={<PlusIcon className="invitations-add" style={{fill: "#555"}} />}
					onTouchTap={() => {console.log(this); this.inviteUser(user.id)}}
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
		this.setState({invitations: this.state.invitations});
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

	handleDialogClose(){
		this.setState({companyDialog: false});
	}

	renderFilters(){
		const actions = [
			<FlatButton
				label="Ok"
				primary={true}
				onTouchTap={this.handleDialogClose.bind(this)} />
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

	render(){
		return(
			<div>
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
					<p className="sub-header" style={{padding: "0 1rem"}}>Selected 
						{(this.state.invitations.length > 0) 
							? <span className="pull-right">{this.state.invitations.length}</span> 
							: ''}
					</p>
					<List>
						{this.renderInvites()}
					</List>	
				</div>
				<div style={{borderTop: "1px solid #E0E0E0", height: "4rem", width: "100%", float: "left"}}>
					<RaisedButton
						label="Send Invites"
						disableTouchRipple={true}
						disableFocusRipple={true}
						primary={true}
						onTouchTap={this.sendInvite()}
						style={{marginRight: 12, marginTop: 12, float: "right"}}
						className="rounded-button"
					/>
					<FlatButton
						label="Cancel"
						disableTouchRipple={true}
						disableFocusRipple={true}
						onTouchTap={this.cancelInvite()}
						className="rounded-button grey-button"
						style={{marginRight: 12, marginTop: 12, float: "right"}}
					/>
				</div>
			</div>
		);
	}
}

export default Invitations;