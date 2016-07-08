import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import PlusSign from 'material-ui/svg-icons/content/add';
import Ticket from './Ticket';

class Tickets extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			tickets: [],
		}
	}
		
	renderTicketList(){
		const tickets = this.state.tickets;
		if(typeof tickets[0] === 'undefined')
			return true;
		return tickets.map((ticket, index) => {
			return(
				<Ticket type={ticket.type} key={ticket.key} index={index} onClick={() => this.deleteTicket(ticket.key)}/>
			);
		})

	}

	addTicket(type){
		const tickets = this.state.tickets;

		tickets.push({key: (tickets.length > 0) ? tickets.length : 0, type: type});

		this.setState({tickets : tickets});
	}

	deleteTicket(key){
		const ticketKey = key;
		const result = this.state.tickets.filter(function(ticket, key) {
		    return ticket.key != ticketKey;
		});
		this.setState({tickets: result});
	}

	render(){
		return(
			<div>
				<div style={{width: "100%", marginTop: "1rem", float: "left"}}>
					<FlatButton 
						label="Add Free Ticket" 
						labelPosition="after" 
						primary={true} 
						icon={<PlusSign />} 
						style={{float: 'left'}} 
						className="rounded-button"
						onClick={() => this.addTicket('free')}/>
					<FlatButton 
						label="Add Paid Ticket" 
						labelPosition="after" 
						primary={true} 
						icon={<PlusSign />} 
						style={{float: 'left'}} 
						className="rounded-button"
						onClick={() => this.addTicket('paid')}/>	
				</div>
				{this.renderTicketList()}
			</div>
		);
	}
}

export default Tickets;