import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const iconButtonElement = (
	<IconButton
		touch={true}
		disableTouchRipple={true}
	>
		<MoreVertIcon />
	</IconButton>
);

const rightIconMenu = (
	<IconMenu iconButtonElement={iconButtonElement}>
		<MenuItem onTouchTap={() => console.log('edit')}>Edit</MenuItem>
		<MenuItem onTouchTap={() => console.log('clone')}>Clone</MenuItem>
		<MenuItem onTouchTap={() => console.log('delete')}>Delete</MenuItem>
	</IconMenu>
);

class EditEvent extends Component{
	render(){
		return(
			<List>
				<ListItem
					rightIconButton={rightIconMenu}
					className="btn-settings"
				/>
			</List>	
		);
	}
}

export default EditEvent;