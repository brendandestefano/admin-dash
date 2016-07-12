import React, {Component, PropTypes} from 'react';

class Banner extends Component{
	render(){
		return(
			<div className="banner" style={{background: "url('"+this.props.backgroundUrl+"') no-repeat center/cover"}} >
				<h2 className="header">{this.props.text}</h2>
				<div className="overlay"></div>
			</div>
		);
	}	
}

Banner.propTypes = {
	backgroundUrl: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default Banner;