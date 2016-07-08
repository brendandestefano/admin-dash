import React, {Component} from 'react';
import {render} from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';

class Tooltip extends Component {
	constructor(props, context){
		super(props, context);

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			open: false,
		}
	}

	handleOpen(){
		this.setState({open: true});
	}

	handleClose(){
		this.setState({open: false});
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Submit"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose}
			/>,
		];

		return (
			<div>
				<InfoIcon onTouchTap={this.handleOpen} />
				<Dialog
					title={this.props.label}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					{this.props.text}
				</Dialog>
			</div>
		);
	}
}

export default Tooltip;