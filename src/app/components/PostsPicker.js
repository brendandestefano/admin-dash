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
import CommentIcon from 'material-ui/svg-icons/communication/comment';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {Card, CardHeader} from 'material-ui/Card';

import School from '../models/School';
import Posts from '../models/Posts';

let postsPreview = require('../img/screens/companySectionText.png');

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
class PostsPicker extends Component{
	constructor(props, context){
		super(props, context);

		this.handlePostsDialogClose = this.handlePostsDialogClose.bind(this);
		this.handlePostsDialogOpen = this.handlePostsDialogOpen.bind(this);
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleDialogOpen = this.handleDialogOpen.bind(this);

		this.state = {
			previewDialogOpen: false,
			previewDialogTitle: '',
			previewDialogContent: '',
			suggestedPostsShown: true,
			posts: null,
			postsDialogOpen: false,
			postsForDialog: null,
			showPostsErrorMessage: false
		};
	}

	addEllipsis(text, length){
		if(text.length < length)
			return text;
		return text.slice(0, length)+'...';
	}

	componentWillMount(){
		let posts = [];
		Posts.slice(0,3).map((post, index) => {
			posts.push(post);
		});
		this.setState({posts: posts, postsForDialog: Posts});
	}

	handlePostsDialogOpen(){
		this.setState({postsDialogOpen: true});
	}

	handlePostsDialogClose(){
		this.setState({postsDialogOpen: false});
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

	getTopPosts(){
		return this.state.posts.map((post, index) => {
			if(index >= 4)
				return;
			return(
				<Card key={index} className="event-small-card" style={{width: "30%"}}>
					<CardHeader
						title={post.name+' | Class of '+post.schoolInfo.gradYear}
						subtitle={(post.mentor) ? 'Mentor' : 'Student'}
						avatar={post.avatarUrl}
					/>
					<p style={{padding: "0 1rem", color: "#555", minHeight: "7.5rem", lineHeight: "1.25rem"}}>
						{this.addEllipsis(post.content, 250)}
					</p>
					<hr style={{borderWidth: "1px"}}/>
					<div style={{padding: "0 1rem 1rem"}}>
						<FavoriteIcon style={{fill: "#555", verticalAlign: "sub", width: "1.25rem", height: "1.25rem", marginTop: "0.5rem"}}/>
						<p className="inline-block" style={{color: "#555", marginLeft: "0.25rem"}}>{post.favoriteCount}</p>
						<CommentIcon style={{fill: "#555", verticalAlign: "sub", width: "1.25rem", height: "1.25rem", marginLeft: "0.25rem"}}/>
						<p className="inline-block" style={{color: "#555", marginLeft: "0.25rem"}}>{post.commentCount}</p>
					</div>
				</Card>
			);
		})
	}

	renderPosts(){
		return this.state.postsForDialog.map((post, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={post.avatarUrl} />}
					primaryText={post.name}
					secondaryText={post.content}
					rightIcon={<PlusIcon className="invitations-add" style={{fill: "#555"}} />}
					onTouchTap={() => {this.invitePost(post)}}
					className={this.inBothLists(post)} 
				/>
			);
		})
	}

	invitePost(postToAdd){
		if(this.state.posts.length == 3){
			this.setState({showPostsErrorMessage: true});
			return false;
		}
		let posts = this.state.posts.push(postToAdd);
		this.setState({posts: this.state.posts, suggestedPostsShown: false});
	}

	inBothLists(postObject){
		const result = this.state.posts.filter(function(post, key) {
			return post.name == postObject.name;
		});
		return (Object.keys(result).length !== 0) ? 'selected' : '';
	}

	searchPosts(event){
		let searchValue = event.target.value;
		let posts = (length >= searchValue.length) ? Posts : this.state.postsForDialog;
		length = searchValue.length;
		const result = posts.filter(function(post, key) {
		    return post.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({postsForDialog: result});
	}

	renderChosenPosts(){
		return this.state.posts.map((post, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={post.avatarUrl} />}
					primaryText={post.name}
					secondaryText={post.content}
					rightIcon={<RemoveIcon style={{fill: "#555"}} />}
					onTouchTap={() => this.removePost(post)} />
			);
		});
	}

	removePost(postToRemove){
		let result = this.state.posts.filter((post, index) => {
			return post != postToRemove;
		});
		this.setState({posts: result, showPostsErrorMessage: false});
	}

	render(){
		return(
			<div>
				<h2 style={{marginBottom: "1rem", color: "#555", fontSize: "1.25rem"}}>Posts</h2>
				{(this.state.suggestedPostsShown 
					&& <p style={{color: "#555", fontSize: "1rem"}}>{School.name+"'s Suggested Posts:"}</p>)}
				<div style={{overflow: "overlay"}}>
					{this.getTopPosts()}
				</div>
				<FlatButton
					label="Manage Posts"
					style={{float: "left", backgroundColor: muiTheme.palette.primary1Color, color: "#FFF", margin: "1rem 0"}}
					onTouchTap={this.handlePostsDialogOpen}
				/>
				<div className="landing-config-group" style={{height: "2.25rem"}}>
					<FlatButton
						label="Preview"
						className="preview"
						onTouchTap={() => this.handleDialogOpen("Posts", postsPreview)}
					/>
				</div>
				<Dialog
					title={<h3>Manage Posts<ExitIcon style={{float: "right"}} onTouchTap={this.handlePostsDialogClose}/></h3>}
					modal={false}
					open={this.state.postsDialogOpen}
					onRequestClose={this.handlePostsDialogClose}
					contentStyle={{maxWidth: "none", width: "90%"}}>
					<div className="invitation-left-75">
						<TextField
							hintText="Search for people by name"
							fullWidth={true}
							onChange={(e) => this.searchPosts(e)}
							inputStyle={{color: "#555"}}
						/>
						<List style={{paddingTop: "2.25rem"}}>
							{this.renderPosts()}
						</List>
					</div>
					<div className="event-input-right-25 invitation-selected-column">
						{(!this.state.showPostsErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem"}}>Your Posts</p>)}
						{(this.state.showPostsErrorMessage 
							&& <p className="sub-header-2" style={{padding: "0 1rem", color: "#FF0000"}}>Max of 3 Posts.  Delete A Post First!</p>)}
						<List>
							{this.renderChosenPosts()}
						</List>
					</div>
					<div style={{borderTop: "1px solid #E0E0E0", height: "4rem", position: "fixed", bottom: "0", left: "0", right: "0", background: "#FFF", zIndex: "1"}}>
						<RaisedButton
							label="Ok"
							disableTouchRipple={true}
							disableFocusRipple={true}
							primary={true}
							onTouchTap={this.handlePostsDialogClose}
							style={{marginRight: 12, marginTop: 12, float: "right"}}
							className="rounded-button"
						/>
						<FlatButton
							label="Cancel"
							disableTouchRipple={true}
							disableFocusRipple={true}
							onTouchTap={this.handlePostsDialogClose}
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

export default PostsPicker;