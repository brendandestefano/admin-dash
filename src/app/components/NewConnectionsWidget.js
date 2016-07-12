import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';
import ConnectionIcon from 'material-ui/svg-icons/action/timeline';

const connections = [
	{id: 0, connectionData: {
		connector: {name: 'Shawn Tee', type: 'Mentor', image: 'https://randomuser.me/api/portraits/med/men/68.jpg'},
		connectee: {name: 'Joe Dimaggio', type: 'Student', image: 'https://randomuser.me/api/portraits/med/men/20.jpg'},
		interests: ['sports','business','fashion','art','music','economics']
	}},
	{id: 1, connectionData: {
		connector: {name: 'Shawn Tee', type: 'Mentor', image: 'https://randomuser.me/api/portraits/med/men/68.jpg'},
		connectee: {name: 'Joe Dimaggio', type: 'Student', image: 'https://randomuser.me/api/portraits/med/men/20.jpg'},
		interests: ['sports','business','fashion','art','music','economics']
	}},
	{id: 2, connectionData: {
		connector: {name: 'Shawn Tee', type: 'Mentor', image: 'https://randomuser.me/api/portraits/med/men/68.jpg'},
		connectee: {name: 'Joe Dimaggio', type: 'Student', image: 'https://randomuser.me/api/portraits/med/men/20.jpg'},
		interests: ['sports','business','fashion','art','music','economics']
	}}
];

class NewConnectionsWidget extends Component{
	constructor(props,context){
		super(props, context);
	}

	renderConnections(){
		return connections.map((connection, index) => {
			return(
				<div key={index}>
					<div className="connection-avatar-wrapper">
						<img className="widget-avatar" src={connection.connectionData.connector.image} />
						<p className="text-user-name">{connection.connectionData.connector.name}</p>
						<p className="text-user-type">{connection.connectionData.connector.type}</p>
					</div>
					<ConnectionIcon className="connection-icon" />
					<div className="connection-avatar-wrapper">
						<img className="widget-avatar" src={connection.connectionData.connectee.image} />
						<p className="text-user-name">{connection.connectionData.connectee.name}</p>
						<p className="text-user-type">{connection.connectionData.connectee.type}</p>
					</div>
					<p className="text-shared-interests">
						<span>Shared Interests</span><br />
						{this.renderInterests(connection)}
					</p>
				</div>
			);
		})
	}

	renderInterests(connection){
		let id = connection.id;
		let connectionResult = connections.filter((connection, index) => {
			return connection.id == id;
		});
		return connection.connectionData.interests.map((interest, index) => {
			return(<Chip 
						key={index}
						backgroundColor={"#EA7600"}
						labelColor={"#FFF"}
						style={{textTransform: 'uppercase', float: 'left', marginRight: "10px", marginTop: "10px"}}>
						{interest}
					</Chip>
			);
		})
	}

	render(){
		return(
			<div className="widget">
				<h4 className="text-widget-header">New Connections</h4>
				{this.renderConnections()}
				<button className="btn-widget">See More</button>
			</div>
		);
	}
}

export default NewConnectionsWidget;