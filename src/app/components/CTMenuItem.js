import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CTMenuItem = ({icon, text, isActive, path}) => {
	const className = (isActive) ? 'navbar-item active' : 'navbar-item';
	return(
		<div className={className}>
			<Link to={path}>
				<div className="icon-small">
					{icon}
				</div>
				<p className="text-navbar">{text}</p>
			</Link>
		</div>
	);
}

CTMenuItem.propTypes = {
	icon: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired
}

export default CTMenuItem;