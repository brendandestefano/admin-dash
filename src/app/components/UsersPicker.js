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
import SchoolIcon from 'material-ui/svg-icons/social/school';
import StudiesIcon from 'material-ui/svg-icons/communication/import-contacts';
import LocationIcon from 'material-ui/svg-icons/communication/location-on';
import WorkIcon from 'material-ui/svg-icons/action/work';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Card from 'material-ui/Card';

import School from '../models/School';
import Users from '../models/Users';

let usersPreview = require('../img/screens/companySectionText.png');

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
class UsersPicker extends Component{
	constructor(props, context){
		super(props, context);

		this.handleUsersDialogClose = this.handleUsersDialogClose.bind(this);
		this.handleUsersDialogOpen = this.handleUsersDialogOpen.bind(this);
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleDialogOpen = this.handleDialogOpen.bind(this);

		this.state = {
			previewDialogOpen: false,
			previewDialogTitle: '',
			previewDialogContent: '',
			suggestedUsersShown: true,
			users: null,
			usersDialogOpen: false,
			usersForDialog: null,
			showUsersErrorMessage: false
		};
	}

	componentWillMount(){
		let users = [];
		let filteredUsers = Users.filter((user, index) => {
			if(this.props.type == "Mentors")
				return user.mentor == true;
			else
				return user.mentor == false;
		});
		filteredUsers.slice(0,4).map((user, index) => {
			users.push(user);
		});
		this.setState({users: users, usersForDialog: Users});
	}

	handleUsersDialogOpen(){
		this.setState({usersDialogOpen: true});
	}

	handleUsersDialogClose(){
		this.setState({usersDialogOpen: false});
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

	getTopUsers(){
		return this.state.users.map((user, index) => {
			if(index >= 6)
				return;
			return(
				<Card key={index} className="user-card relative active">
					<div 
					className="card-background-image"
					style={{
						background: "url('"+user.backgroundUrl+"') no-repeat center/cover"}}></div>
					<div 
					className="card-background-overlay"></div>	
					<Avatar src={user.avatarUrl} size={100} className="card-avatar"/>
					<h2 className="card-name text-center">{user.firstName}</h2>
					<div style={{minHeight: "11rem"}}>
						<div className="card-text-wrapper">
							<SchoolIcon className="card-icon"/>
							<h4 className="card-text">{user.schools[0].name+" '"+user.schools[0].year.slice(2)}</h4>
						</div>
						<div className="card-text-wrapper">
							<StudiesIcon className="card-icon" style={{marginTop: "-0.25rem"}}/>
							<h4 className="card-text">{user.schools[0].major}</h4>
						</div>
						<div className="card-text-wrapper">
							<LocationIcon className="card-icon"/>
							<h4 className="card-text">{user.city+", "+user.state}</h4>
						</div>
						{(user.experience && <div className="card-text-wrapper">
							<WorkIcon className="card-icon"/>
							<h4 className="card-text">{user.experience[0].position+" at "+user.experience[0].company}</h4>
						</div>)}
					</div>
				</Card>
			);
		})
	}

	renderUsers(){
		return this.state.usersForDialog.map((user, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={user.avatarUrl} />}
					primaryText={user.name}
					rightIcon={<PlusIcon className="invitations-add" style={{fill: "#555"}} />}
					onTouchTap={() => {this.inviteUser(user)}}
					className={this.inBothLists(user)} 
				/>
			);
		})
	}

	inviteUser(userToAdd){
		if(this.state.users.length == 5){
			this.setState({showUsersErrorMessage: true});
			return false;
		}
		let users = this.state.users.push(userToAdd);
		this.setState({users: this.state.users, suggestedUsersShown: false});
	}

	inBothLists(userObject){
		const result = this.state.users.filter(function(user, key) {
			return user.name == userObject.name;
		});
		return (Object.keys(result).length !== 0) ? 'selected' : '';
	}

	searchUsers(event){
		let searchValue = event.target.value;
		let users = (length >= searchValue.length) ? Users : this.state.usersForDialog;
		length = searchValue.length;
		const result = users.filter(function(user, key) {
		    return user.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({usersForDialog: result});
	}

	renderChosenUsers(){
		return this.state.users.map((user, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={user.avatarUrl} />}
					primaryText={user.name}
					rightIcon={<RemoveIcon style={{fill: "#555"}} />}
					onTouchTap={() => this.removeUser(user)} />
			);
		});
	}

	removeUser(userToRemove){
		let result = this.state.users.filter((user, index) => {
			return user != userToRemove;
		});
		this.setState({users: result, showUsersErrorMessage: false});
	}

	render(){
		return(
			<div>
				<h2 style={{marginBottom: "1rem", color: "#555", fontSize: "1.25rem"}}>{this.props.type}</h2>
				{(this.state.suggestedUsersShown 
					&& <p style={{color: "#555", fontSize: "1rem"}}>{School.name+"'s Suggested "+this.props.type+":"}</p>)}
				<div style={{overflow: "overlay"}}>
					{this.getTopUsers()}
				</div>
				<FlatButton
					label={"Manage "+this.props.type}
					style={{float: "left", backgroundColor: muiTheme.palette.primary1Color, color: "#FFF", margin: "1rem 0"}}
					onTouchTap={this.handleUsersDialogOpen}
				/>
				<div className="landing-config-group" style={{height: "2.25rem"}}>
					<FlatButton
						label="Preview"
						className="preview"
						onTouchTap={() => this.handleDialogOpen("Users", usersPreview)}
					/>
				</div>
				<Dialog
					title={<h3>{"Manage "+this.props.type}<ExitIcon style={{float: "right"}} onTouchTap={this.handleUsersDialogClose}/></h3>}
					modal={false}
					open={this.state.usersDialogOpen}
					onRequestClose={this.handleUsersDialogClose}
					contentStyle={{maxWidth: "none", width: "90%"}}>
					<div className="invitation-left-75">
						<TextField
							hintText="Search for people by name"
							fullWidth={true}
							onChange={(e) => this.searchUsers(e)}
							inputStyle={{color: "#555"}}
						/>
						<List style={{paddingTop: "2.25rem"}}>
							{this.renderUsers()}
						</List>
					</div>
					<div className="event-input-right-25 invitation-selected-column">
						{(!this.state.showUsersErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem"}}>Your Users</p>)}
						{(this.state.showUsersErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem", color: "#FF0000"}}>Max of 5 Users.  Delete A User First!</p>)}
						<List>
							{this.renderChosenUsers()}
						</List>
					</div>
					<div style={{borderTop: "1px solid #E0E0E0", height: "4rem", position: "fixed", bottom: "0", left: "0", right: "0", background: "#FFF", zIndex: "1"}}>
						<RaisedButton
							label="Ok"
							disableTouchRipple={true}
							disableFocusRipple={true}
							primary={true}
							onTouchTap={this.handleUsersDialogClose}
							style={{marginRight: 12, marginTop: 12, float: "right"}}
							className="rounded-button"
						/>
						<FlatButton
							label="Cancel"
							disableTouchRipple={true}
							disableFocusRipple={true}
							onTouchTap={this.handleUsersDialogClose}
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

export default UsersPicker;