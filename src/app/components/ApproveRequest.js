import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class ApproveRequest extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			open: false,
		}
	}

	approveRequest(){
		this.setState({open: true});
	}

	handleClose(){
		this.setState({open: false});
	}

	render(){
		const actions = [
			<FlatButton
				label="Approve"
				primary={true}
				onTouchTap={this.handleClose.bind(this)}
			/>,
			<FlatButton
				label="Cancel"
				primary={false}
				onTouchTap={this.handleClose.bind(this)}
			/>,
		];
		return(
			<div>
				<Dialog
					title="Approve Request"
					actions={actions}
					modal={true}
					open={this.state.open}
				>
					Are you sure you want to approve this request?
				</Dialog>
				<FlatButton
					label="Approve"
					backgroundColor="#28BB28"
					hoverColor="#7ED67E"
					style={{color: "#FFF", marginTop: "0.4rem"}}
					onTouchTap={this.approveRequest.bind(this)}
				/>
			</div>
		);
	}
}

export default ApproveRequest;