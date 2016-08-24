import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';

class Banner extends Component{
	render(){
		return(
			<div className="banner" style={{background: "url('"+this.props.backgroundUrl+"') no-repeat center/cover"}} >
				<h2 className="header">CampusTap University</h2>
				<div className="overlay"></div>
				{(this.props.export) ? 
					<FlatButton label="Export To CSV" className="btn-export"/>
					: ''
				}
			</div>
		);
	}	
}

Banner.propTypes = {
	backgroundUrl: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default Banner;