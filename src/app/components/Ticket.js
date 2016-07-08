import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RemoveIcon from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';

const Ticket = ({type, onClick, index}) => {
	return(
		<div className="ticket">
			<p className="step-header" style={{marginBottom: "-1.25rem"}}>Ticket {index + 1}</p>
			<TextField className="input-field" floatingLabelText="Ticket Name" />
			<TextField className="input-field" floatingLabelText="Qty" />
			<TextField className="input-field" floatingLabelText={(type == 'free') ? "Free" : "Price"} disabled={(type == 'free') ? true : false} />
			<div className="input-field">
				<FlatButton 
					label="" 
					labelPosition="after" 
					primary={true} 
					icon={<RemoveIcon color={red500} />}
					hoverColor="transparent" 
					onClick={onClick}/>
			</div>
			<TextField fullWidth={true} floatingLabelText="Ticket Description" />
			<hr className="break"/>
		</div>
	);
}

Ticket.propTypes = {
	type: PropTypes.string.isRequired,
}

export default Ticket;