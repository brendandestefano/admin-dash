import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ViewsIcon from 'material-ui/svg-icons/action/visibility';
import LikesIcon from 'material-ui/svg-icons/action/favorite';
import CommentsIcon from 'material-ui/svg-icons/communication/comment';

const content = [
	{id: 0, name: 'Shawn Tee', time: '1d ago', type: 'Newsfeed Post', text: 'What is the best way to start a phone interview?', views: 100, favorites: 10, comments: 5, image: 'https://randomuser.me/api/portraits/med/men/68.jpg'},
	{id: 1, name: 'Joe Dimaggio', time: '3d ago', type: 'Suffolk Alumni Group', text: 'When is the 5 year reunion?', views: 200, favorites: 5, comments: 7, image: 'https://randomuser.me/api/portraits/med/men/48.jpg'},
	{id: 2, name: 'Ronda Rousey', time: '5d ago', type: 'Newsfeed Post', text: 'What are some of your favorite resume resources and how did you find these long text text long long', view: 234, favorites: 12, comments: 5, image: 'https://randomuser.me/api/portraits/med/women/68.jpg'},
];

class TrendingContentWidget extends Component{
	constructor(props, context){
		super(props, context);
	}

	renderContent(){
		return content.map((content, index) => {
			return(
				<ListItem 
					key={index} 
					leftAvatar={<Avatar src={content.image} style={{left:0,top:0}}/>}
					primaryText={<p className="text-user-name">{content.name} <span>{content.time}</span></p>}
					secondaryText={
						<div className="user-details-wrapper">
							<p className="text-user-city">{content.type}</p>
							<p className="text-user-title">{content.text}</p>
							<p className="text-user-title"><ViewsIcon /> {content.views} | <LikesIcon /> {content.favorites} | <CommentsIcon /> {content.comments}</p>
						</div>
					}
					innerDivStyle={{paddingLeft: 50, paddingTop: 0}} />
			);
		})
	}

	render(){
		return(
			<div className="widget">
				<h4 className="text-widget-header">Trending Content</h4>
				<List>
					{this.renderContent()}
				</List>
				<button className="btn-widget">See More</button>
			</div>
		);
	}
}

export default TrendingContentWidget;