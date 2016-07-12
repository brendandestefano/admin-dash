import React, {PropTypes} from 'react';

const CTMenuItem = ({icon, text, isActive}) => {
	const className = (isActive) ? 'navbar-item active' : 'navbar-item';
	return(
		<div className={className}>
			<a href="/">
				<div className="icon-small">
					{icon}
				</div>
				<p className="text-navbar">{text}</p>
			</a>
		</div>
	);
}

CTMenuItem.propTypes = {
	icon: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired
}

export default CTMenuItem;