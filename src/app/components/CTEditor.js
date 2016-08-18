import React, {Component} from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ReactFilepicker from 'react-filepicker';
import RaisedButton from 'material-ui/RaisedButton';
import AttachmentIcon from 'material-ui/svg-icons/action/description';
import ExitIcon from 'material-ui/svg-icons/content/clear';
let ReactQuill = require('react-quill');
let ReactDOM = require('react-dom');
'use strict';

const FILE_PICKER_KEY = 'A4dOeHXUnQHS0qVUJYRRez';
var Editor = React.createClass({

	getInitialState: function() {
		return {
			theme: 'snow',
			enabled: true,
			readOnly: false,
			value: '<h1>'+this.props.defaultText+'</h1>',
			attachments: []
		};
	},

	onTextareaChange: function(event) {
		var value = event.target.value;
		this.setState({ value:value });
		this.props.onChange(this.state.value);
	},

	onEditorChange: function(value, delta, source) {
		this.setState({
			value: value
		});
		this.props.onChange(this.state.value);
	},

	handleUploadSuccess: function(fpfiles){
		let newAttachments = this.state.attachments;
		newAttachments.push({name: fpfiles.filename, url: fpfiles.url});
		this.setState({attachments: newAttachments});
	},

	renderAttachments: function(){
		return this.state.attachments.map((attachment, index) => {
			return(
				<ListItem 
					primaryText={attachment.name}
					leftIcon={<AttachmentIcon />}
					rightIcon={<ExitIcon style={{float: "right", fill: "#FF0000"}} onTouchTap={() => this.removeAttachment(attachment)}/>}
				/>
			);
		});
	},

	removeAttachment: function(attachmentToRemove){
		let newAttachments = this.state.attachments.filter((attachment, index) => {
			return attachment != attachmentToRemove;
		});
		this.setState({attachments: newAttachments});
	},

	render: function() {
		return (
			(this.props.editorOnly)
			?
			<div className={(this.props.cssClass) ? this.props.cssClass : ''}>
				{this.state.enabled && ReactQuill({
					theme: this.state.theme,
					value: this.state.value,
					readOnly: this.state.readOnly,
					onChange: this.onEditorChange,
				})}
			</div>
			:
			<div className={(this.props.cssClass) ? this.props.cssClass : ''}>
				{this.state.enabled && ReactQuill({
					theme: this.state.theme,
					value: this.state.value,
					readOnly: this.state.readOnly,
					onChange: this.onEditorChange,
				})}
				<h3 style={this.props.attachmentTextStyle}>Attachments:</h3>,
				<List style={{maxWidth: "30rem"}}>
					{this.renderAttachments()}
				</List>
				<ReactFilepicker 
					apikey={FILE_PICKER_KEY} 
					options={{
						buttonText: 'Add File',
						buttonClass: 'filepicker',
						webcamDim: [1280, 720],
						webcam: {
							videoRes: '1280x720'
						},
					}} 
					onSuccess={this.handleUploadSuccess} 
				/>
				<RaisedButton 
					label={this.props.btnText}
					onTouchTap={() => this.props.btnOnClick(stateToHTML(this.state.editorState.getCurrentContent()))}
					primary={true}
					className={this.props.btnClassName}
				/>
			</div>	
		);
	}

});

Editor = React.createFactory(Editor);
ReactQuill = React.createFactory(ReactQuill);

export default Editor;
