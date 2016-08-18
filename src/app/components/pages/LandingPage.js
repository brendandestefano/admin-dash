import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import ExitIcon from 'material-ui/svg-icons/content/clear';

import School from '../../models/School';
import VerticalNavbar from '../VerticalNavbar';
import Banner from '../Banner';
import PreviewField from '../PreviewField';
import CompaniesPicker from '../CompaniesPicker';
import UsersPicker from '../UsersPicker';
import EventsPicker from '../EventsPicker';
import PostsPicker from '../PostsPicker';
import GroupsPicker from '../GroupsPicker';
import JobsPicker from '../JobsPicker';

let fullPreview = require('../../img/screens/fullPreview.png');
require('../../styles/import.scss');

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
class LandingPage extends Component{
	constructor(props, context){
		super(props, context);

		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.handleDialogOpen = this.handleDialogOpen.bind(this);

		this.state = {
			previewDialogOpen: false,
			previewDialogTitle: '',
			previewDialogContent: '',
		};
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

	updateEditorState(markup){
		//do something with `markup`
	}

	renderFirstModule(){
		if(School.enabledModules[0] != undefined)
			return this["render"+School.enabledModules[0].charAt(0).toUpperCase()+School.enabledModules[0].slice(1)]();
		else
			this.renderPosts();
	}

	renderSecondModule(){
		if(School.enabledModules[1] != undefined)
			return this["render"+School.enabledModules[1].charAt(0).toUpperCase()+School.enabledModules[1].slice(1)]();
		else
			return false;
	}

	renderThirdModule(){
		if(School.enabledModules[2] != undefined)
			return this["render"+School.enabledModules[2].charAt(0).toUpperCase()+School.enabledModules[2].slice(1)]();
		else
			return false;
	}

	renderEvents(){
		return(
			<EventsPicker />
		);
	}

	renderPosts(){
		return(
			<PostsPicker />
		);
	}

	renderGroups(){
		return(
			<GroupsPicker />
		);
	}

	renderJobs(){
		return(
			<JobsPicker />
		);
	}

	render(){		
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<VerticalNavbar setState={true} activeTab={8}/>
					<div className="main">
						<Banner backgroundUrl={School.authenticateSplashBackgroundUrl} text={School.name} />
						<h3 className="sub-header inline-block">Landing Page Editor</h3>
						<FlatButton
							label="Full Preview"
							style={{float: "right", backgroundColor: muiTheme.palette.primary1Color, color: "#FFF", margin: "2rem 1rem 0"}}
							onTouchTap={() => this.handleDialogOpen("Full Preview", fullPreview)}
						/>
						<div style={{margin: "0 1rem"}}>
							<div className="full-width">
									<PreviewField 
										fieldType="TextField"
										text="Intro Title"
										maxTextValue={80}
										previewTouchTap={this.handleDialogOpen}
									/>
									<PreviewField 
										fieldType="TextArea"
										text="Intro Text"
										previewTouchTap={this.handleDialogOpen}
									/>
									<hr />
									<PreviewField 
										fieldType="TextField"
										text="Company Section Text"
										maxTextValue={100}
										previewTouchTap={this.handleDialogOpen}
									/>
									<div style={{marginBottom: "2rem", overflow: "overlay"}}>
										<CompaniesPicker />	
									</div>
									<hr />
									<div style={{marginBottom: "2rem", overflow: "overlay"}}>
										<UsersPicker type="Mentors" />
									</div>
									<div style={{marginBottom: "2rem", overflow: "overlay"}}>
										<UsersPicker type="Mentees" />
									</div>
									<hr />
									<div style={{marginBottom: "2rem", overflow: "overlay"}}>
										<PostsPicker />
									</div>
									<hr />
									<div style={{marginBottom: "2rem", overflow: "overlay"}}>
										{this.renderFirstModule()}
									</div>
									<hr />
									<div style={{marginBottom: "2rem", overflow: "overlay"}}>
										{this.renderSecondModule()}
									</div>
									<hr />
									<div style={{marginBottom: "2rem", overflow: "overlay"}}>
										{this.renderThirdModule()}
									</div>
									<hr />
									<div className="half-left">
										<PreviewField 
											direction="left"
											fieldType="TextField"
											text="Resource 1 Text"
											maxTextValue={100}
											previewTouchTap={this.handleDialogOpen}
											noPreviewButton={true}
										/>
									</div>
									<div className="half-right">
										<PreviewField 
											direction="right"
											fieldType="TextField"
											text="Resource 1 Url"
											previewTouchTap={this.handleDialogOpen}
										/>
									</div>
									<div className="half-left">
										<PreviewField 
											direction="left"
											fieldType="TextField"
											text="Resource 2 Text"
											maxTextValue={100}
											previewTouchTap={this.handleDialogOpen}
											noPreviewButton={true}
										/>
									</div>
									<div className="half-right">
										<PreviewField 
											direction="right"
											fieldType="TextField"
											text="Resource 2 Url"
											previewTouchTap={this.handleDialogOpen}
										/>
									</div>
									<div className="half-left">
										<PreviewField 
											direction="left"
											fieldType="TextField"
											text="Resource 3 Text"
											maxTextValue={100}
											previewTouchTap={this.handleDialogOpen}
											noPreviewButton={true}
										/>
									</div>
									<div className="half-right">
										<PreviewField 
											direction="right"
											fieldType="TextField"
											text="Resource 3 Url"
											previewTouchTap={this.handleDialogOpen}
										/>
									</div>
							</div>
						</div>	
					</div>
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
			</MuiThemeProvider>
		);
	}
}

export default LandingPage;