import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const mentors = [
	{id: 0, name: 'Shawn Tee', year: '10', city: 'Boston', state: 'MA', title: 'Systems Analyst', company: 'Fidelity Investments', image: 'https://randomuser.me/api/portraits/med/men/68.jpg'},
	{id: 1, name: 'Joe Dimaggio', year: '13', city: 'Providence', state: 'RI', title: 'Full-Stack Developer', company: 'Nike Corporation', image: 'https://randomuser.me/api/portraits/med/men/48.jpg'},
	{id: 2, name: 'Ronda Rousey', year: '09', city: 'Boston', state: 'MA', title: 'Business Development Representative', company: 'Bank of America', image: 'https://randomuser.me/api/portraits/med/women/68.jpg'},
];

class TrendingMentorsWidget extends Component{
	constructor(props,context){
		super(props, context);
	}

	renderMentors(){
		return mentors.map((user, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={user.image} style={{left:0,top:0}}/>}
					primaryText={<p className="text-user-name">{user.name+" '"+user.year}</p>}
					secondaryText={
						<div className="user-details-wrapper">
							<p className="text-user-city">{user.city+", "+user.state}</p>
							<p className="text-user-title">{user.title+" | "+user.company}</p>
						</div>
					}
					innerDivStyle={{paddingLeft: 50, paddingTop: 0}} />
			);
		})
	}

	render(){
		return(
			<div className="widget">
				<h4 className="text-widget-header">Trending Mentors</h4>
				<List className="widget-list-wrapper">
					{this.renderMentors()}
				</List>
				<button className="btn-widget">See More</button>
			</div>
		);
	}
}

export default TrendingMentorsWidget;