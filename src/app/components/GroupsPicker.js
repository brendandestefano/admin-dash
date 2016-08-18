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
import UserIcon from 'material-ui/svg-icons/social/person';
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Card from 'material-ui/Card';
import School from '../models/School';

let groupsPreview = require('../img/screens/companySectionText.png');

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
class GroupsPicker extends Component{
	constructor(props, context){
		super(props, context);

		this.handleGroupsDialogClose = this.handleGroupsDialogClose.bind(this);
		this.handleGroupsDialogOpen = this.handleGroupsDialogOpen.bind(this);
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleDialogOpen = this.handleDialogOpen.bind(this);

		this.state = {
			previewDialogOpen: false,
			previewDialogTitle: '',
			previewDialogContent: '',
			suggestedGroupsShown: true,
			groups: null,
			groupsDialogOpen: false,
			groupsForDialog: null,
			showGroupsErrorMessage: false
		};
	}

	getIsFirstModuleEnabled(){
		if(School.enabledModules[0] == 'groups')
			return true;
		return false;
	}

	addEllipsis(text, length){
		if(text.length < length)
			return text;
		return text.slice(0, length)+'...';
	}
	

	componentWillMount(){
		let groups = [];
		let slice = (this.getIsFirstModuleEnabled()) ? 3 : 5;
		School.groups.slice(0,slice).map((group, index) => {
			groups.push(group);
		});
		this.setState({groups: groups, groupsForDialog: School.groups});
	}

	handleGroupsDialogOpen(){
		this.setState({groupsDialogOpen: true});
	}

	handleGroupsDialogClose(){
		this.setState({groupsDialogOpen: false});
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

	getTopGroups(){
		return this.state.groups.map((group, index) => {
			let i = (this.getIsFirstModuleEnabled()) ? 3 : 5;
			if(index >= i)
				return;
			return(
				<Card key={index} className="user-card relative active">
					<div 
					className="card-background-image"
					style={{
						background: "url('"+group.backgroundUrl+"') no-repeat center/cover"}}></div>
					<div 
					className="card-background-overlay"></div>	
					<Avatar src={group.avatarUrl} size={100} className="card-avatar"/>
					<h2 className="card-name text-center">{group.name}</h2>
					<div style={{minHeight: "11rem"}}>
						<div className="card-text-wrapper">
							<UserIcon className="card-icon"/>
							<h4 className="card-text">{group.members+" Members"}</h4>
						</div>
						<div className="card-text-wrapper">
							<DescriptionIcon className="card-icon" style={{marginTop: "-0.25rem"}}/>
							<h4 className="card-text" style={{lineHeight: "1.25rem"}}>{this.addEllipsis(group.description, 150)}</h4>
						</div>
					</div>
				</Card>
			);
		})
	}

	renderGroups(){
		return this.state.groupsForDialog.map((group, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={group.avatarUrl} />}
					primaryText={group.name}
					rightIcon={<PlusIcon className="invitations-add" style={{fill: "#555"}} />}
					onTouchTap={() => {this.inviteGroup(group)}}
					className={this.inBothLists(group)} 
				/>
			);
		})
	}

	inviteGroup(groupToAdd){
		let limit = (this.getIsFirstModuleEnabled()) ? 3 : 5;
		if(this.state.groups.length == limit){
			this.setState({showGroupsErrorMessage: true});
			return false;
		}
		let groups = this.state.groups.push(groupToAdd);
		this.setState({groups: this.state.groups, suggestedGroupsShown: false});
	}

	inBothLists(groupObject){
		const result = this.state.groups.filter(function(group, key) {
			return group.name == groupObject.name;
		});
		return (Object.keys(result).length !== 0) ? 'selected' : '';
	}

	searchGroups(event){
		let searchValue = event.target.value;
		let groups = (length >= searchValue.length) ? School.groups : this.state.groupsForDialog;
		length = searchValue.length;
		const result = groups.filter(function(group, key) {
		    return group.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({groupsForDialog: result});
	}

	renderChosenGroups(){
		return this.state.groups.map((group, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={group.avatarUrl} />}
					primaryText={group.name}
					rightIcon={<RemoveIcon style={{fill: "#555"}} />}
					onTouchTap={() => this.removeCompany(group)} />
			);
		});
	}

	removeCompany(groupToRemove){
		let result = this.state.groups.filter((group, index) => {
			return group != groupToRemove;
		});
		this.setState({groups: result, showGroupsErrorMessage: false});
	}

	render(){
		return(
			<div>
				<h2 style={{marginBottom: "1rem", color: "#555", fontSize: "1.25rem"}}>Groups</h2>
				{(this.state.suggestedGroupsShown 
					&& <p style={{color: "#555", fontSize: "1rem"}}>{School.name+"'s Suggested Groups:"}</p>)}
				<div style={{overflow: "overlay"}}>
					{this.getTopGroups()}
				</div>
				<FlatButton
					label="Manage Groups"
					style={{float: "left", backgroundColor: muiTheme.palette.primary1Color, color: "#FFF", margin: "1rem 0"}}
					onTouchTap={this.handleGroupsDialogOpen}
				/>
				<div className="landing-config-group" style={{height: "2.25rem"}}>
					<FlatButton
						label="Preview"
						className="preview"
						onTouchTap={() => this.handleDialogOpen("School.groups", groupsPreview)}
					/>
				</div>
				<Dialog
					title={<h3>Manage Groups<ExitIcon style={{float: "right"}} onTouchTap={this.handleGroupsDialogClose}/></h3>}
					modal={false}
					open={this.state.groupsDialogOpen}
					onRequestClose={this.handleGroupsDialogClose}
					contentStyle={{maxWidth: "none", width: "90%"}}>
					<div className="invitation-left-75">
						<TextField
							hintText="Search for people by name"
							fullWidth={true}
							onChange={(e) => this.searchSchool.groups(e)}
							inputStyle={{color: "#555"}}
						/>
						<List style={{paddingTop: "2.25rem"}}>
							{this.renderGroups()}
						</List>
					</div>
					<div className="event-input-right-25 invitation-selected-column">
						{(!this.state.showGroupsErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem"}}>Your Groups</p>)}
						{(this.state.showGroupsErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem", color: "#FF0000"}}>{"Max of "+((this.getIsFirstModuleEnabled()) ? 3 : 5)+" Groups.  Delete A Group First!"}</p>)}
						<List>
							{this.renderChosenGroups()}
						</List>
					</div>
					<div style={{borderTop: "1px solid #E0E0E0", height: "4rem", position: "fixed", bottom: "0", left: "0", right: "0", background: "#FFF", zIndex: "1"}}>
						<RaisedButton
							label="Ok"
							disableTouchRipple={true}
							disableFocusRipple={true}
							primary={true}
							onTouchTap={this.handleGroupsDialogClose}
							style={{marginRight: 12, marginTop: 12, float: "right"}}
							className="rounded-button"
						/>
						<FlatButton
							label="Cancel"
							disableTouchRipple={true}
							disableFocusRipple={true}
							onTouchTap={this.handleGroupsDialogClose}
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

export default GroupsPicker;