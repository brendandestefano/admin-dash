import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CTEditor from './CTEditor';

let screens = [
	{IntroTitle : require('../img/screens/introTitle.png')},
	{IntroText : require('../img/screens/introText.png')},
	{CompanySectionText : require('../img/screens/companySectionText.png')},
	{Resource1Text : require('../img/screens/companySectionText.png')},
	{Resource2Text : require('../img/screens/companySectionText.png')},
	{Resource3Text : require('../img/screens/companySectionText.png')},
	{Resource1Url : require('../img/screens/companySectionText.png')},
	{Resource2Url : require('../img/screens/companySectionText.png')},
	{Resource3Url : require('../img/screens/companySectionText.png')},
];

class PreviewField extends Component{
	constructor(props, context){
		super(props, context);

		this.onTextFieldChange = this.onTextFieldChange.bind(this);
		this.state = {
			theme: 'snow',
			enabled: true,
			readOnly: false,
			value: (this.props.defaultText) ? '<h1>'+this.props.defaultText+'</h1>' : null,
			textNoSpaces : '',
			preview : '',
			textFieldValue: undefined
		};
	}

	componentWillMount(){
		this.setState({textNoSpaces: this.props.text.split(' ').join('')});
	}

	componentDidMount(){
		this.setState({
			preview: screens.filter((screen, index) => {
						return screen[this.state.textNoSpaces];
					})[0][this.state.textNoSpaces]
		});
	}

	onTextFieldChange(event){
		if(this.props.maxTextValue < event.target.value.length)
			return;
		this.setState({textFieldValue: event.target.value});
	}

	getTextField(){
		return(
			<TextField 
				floatingLabelText={this.props.text}
				className={(this.props.noPreviewButton) ? "input-field fill" : "input-field"}
				onChange={this.onTextFieldChange}
				value={(this.state.textFieldValue == undefined) ? '' : this.state.textFieldValue}
			/>
		);
	}

	getTextArea(){
		return (
			<CTEditor 
				defaultText={this.props.text}
				editorOnly={true}
				onChange={this.props.updateEditorState}
				cssClass="input-field"
			/>
		);
	}	

	render(){
		return(
			<div className="landing-config-group" style={{marginBottom: "2rem", minHeight: "6.875rem"}}>
				<h2 style={{marginBottom: (this.props.fieldType == "TextField") ? "0" : "1rem", color: "#555", fontSize: "1.25rem"}}>{this.props.text}</h2>
				{this["get"+this.props.fieldType]()}
				{(this.props.maxTextValue && <p style={{color: (this.state.textFieldValue && this.props.maxTextValue == this.state.textFieldValue.length) ? "#FF0000" : "#555", fontSize: "1rem", float: "right"}}>{(this.state.textFieldValue == undefined) ? 0 : this.state.textFieldValue.length}/{this.props.maxTextValue}</p>)}
				{(!this.props.noPreviewButton && <FlatButton
					label="Preview"
					className={(this.props.fieldType == "TextField") ? "preview text-field" : "preview"}
					onTouchTap={() => this.props.previewTouchTap(this.props.text, this.state.preview)}
				/>)}
			</div>
		);
	}
}

export default PreviewField;