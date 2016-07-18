import React, {Component} from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
	from 'material-ui/Table';
import AscIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import DescIcon from 'material-ui/svg-icons/navigation/arrow-downward';
import TextField from 'material-ui/TextField';
import Card from './Card';
import EditEvent from './EditEvent';
import ApproveRequest from './ApproveRequest';
import DeclineRequest from './DeclineRequest';

class Drilldown extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			sortType: this.props.originalSortType,
			sortDirection: this.props.originalSortDirection,
			data: [],
			cardSelected: false,
			searchPrevious: [],
			currentType: this.props.currentType
		};
	}
	
	renderIcon(type){
		if(this.props.disabledColumns && this.props.disabledColumns.indexOf(type) != -1)
			return;
		if(this.state.sortType != type.index && this.state.sortType != "-"+type.index)
			return;
		if(this.state.sortDirection == 'asc')
			return <AscIcon className="btn-sort" />;
		else
			return <DescIcon className="btn-sort" />;
	}

	sortColumn(type){
		if(this.props.disabledColumns && this.props.disabledColumns.indexOf(type) != -1)
			return;
		if(this.state.sortType == type && this.state.sortDirection == "asc"){
			this.setState({sortType: "-"+type, sortDirection: "desc"});
		}else
			this.setState({sortType: type, sortDirection: "asc"});
	}

	dynamicSort(property){
		var sortOrder = 1;
		if(property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function (a,b) {
			var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
		}
	}

	renderTableHeaders(type){
		let tableHeadersOutput = [];
		for(let index in this.props.tableHeaders[type]){
			tableHeadersOutput.push(
				<TableHeaderColumn data-type={index}>
					{this.props.tableHeaders[type][index]}{this.renderIcon({index})}
				</TableHeaderColumn>);
		}
		return(<TableRow>{tableHeadersOutput}</TableRow>);
	}

	renderData(type){
		return this.state.data.sort(this.dynamicSort(this.state.sortType)).map((d, index) => {
			return(
				this.getRowData(index, type, d)
		)});
	}

	getRowData(index, type, data){
		let columns = [];
		for(let i = 0; i < this.props.dataOrder[type].length; i++){
			columns.push(<TableRowColumn>{data[this.props.dataOrder[type][i]]}</TableRowColumn>);
		}
		if(this.props.searchTerm == 'event' && !this.props.additionalTerm)
			columns.push(<TableRowColumn><EditEvent /></TableRowColumn>);
		else if(this.props.additionalTerm && this.props.additionalTerm == 'request'){
			columns.push(<TableRowColumn><ApproveRequest /></TableRowColumn>);
			columns.push(<TableRowColumn><DeclineRequest /></TableRowColumn>);
		}else if(this.props.additionalTerm && this.props.additionalTerm == 'declined')
			columns.push(<TableRowColumn><ApproveRequest /></TableRowColumn>);
		return(<TableRow key={index}>{columns}</TableRow>);
	}

	setData(){
		this.setState({data: this.props.data});
	}

	getAllElementsWithAttribute(attribute){
		var matchingElements = [];
		var allElements = document.getElementsByTagName('*');
		for (var i = 0, n = allElements.length; i < n; i++){
			if (allElements[i].getAttribute(attribute) !== null)
				matchingElements.push(allElements[i]);
		}
		return matchingElements;
	}

	attachClickListeners(){
		let headers = this.getAllElementsWithAttribute('data-type');
		for(let i = 0; i < headers.length; i++){
			let globalThis = this;
			headers[i].addEventListener('click', function(){globalThis.sortColumn(headers[i].getAttribute('data-type'))}, false);
		}
	}

	componentDidMount(){
		this.setData();
		this.attachClickListeners();
	}

	filterTable(type){
		if(this.state.cardSelected == true){
			this.setState({data: this.props.data, cardSelected: false});
			return;
		}
		let result = this.state.data.filter((d, index) => {
			return d.type == type;
		});
		this.setState({data: result, cardSelected: true, currentType: type});
	}

	getInitialData(){
		return this.props.data;
	}

	userSearch(data, searchValue){
		let result = data.filter(function(user, key) {
		    return user.firstName.toLowerCase().indexOf(searchValue) != -1 || user.lastName.toLowerCase().indexOf(searchValue) != -1;
		});
		return result;
	}

	eventSearch(data, searchValue){
		let result = data.filter(function(event, key) {
		    return event.title.toLowerCase().indexOf(searchValue) != -1;
		});
		return result;
	}

	jobSearch(data, searchValue){
		let result = data.filter(function(job, key) {
		    return job.title.toLowerCase().indexOf(searchValue) != -1;
		});
		return result;
	}

	messageSearch(data, searchValue){
		let result = data.filter(function(user, key) {
		    return user.messenger.toLowerCase().indexOf(searchValue) != -1 || user.messengee.toLowerCase().indexOf(searchValue) != -1;
		});
		return result;
	}

	companySearch(data, searchValue){
		let result = data.filter(function(company, key) {
		    return company.company.toLowerCase().indexOf(searchValue) != -1;
		});
		return result;
	}

	search(event){
		let searchPrevious = (this.state.data.length == 0 || event.target.value == '') ? this.getInitialData() : this.state.data;
		this.setState({searchPrevious: searchPrevious});
		let searchValue = event.target.value;
		let data = (length >= searchValue.length) ? this.state.searchPrevious : this.state.data;
		length = searchValue.length;
		const result = this[this.props.searchTerm+'Search'](data, searchValue);
		this.setState({data: (searchValue == '' && this.state.searchPrevious.length > 0) ? this.getInitialData() : result});
	}

	switchCurrentType(type){
		if(this.state.currentType == type)
			this.setState({currentType: this.props.currentType});
		else
			this.setState({currentType: type});
	}

	resetState(){
		this.setState({
			sortType: this.props.originalSortType,
			sortDirection: this.props.originalSortDirection,
			data: this.props.data,
			cardSelected: false,
			searchPrevious: [],
			currentType: this.props.currentType
		});
	}

	renderCards(){
		let cards = [];
		this.props.cards.map((card, index) => {
			cards.push(<Card 
				cardText={card.cardText}
				totalCount={card.totalCount}
				changeCount={card.changeCount}
				changePercentage={card.changePercentage}
				positive={card.positive}
				chartId={card.chartId}
				filterTable={this.filterTable.bind(this)}
				filterText={card.filterText}
				setType={this.switchCurrentType.bind(this)}
				reset={this.resetState.bind(this)}
			/>);
		});
			
		return(<div>{cards}</div>);
	}

	render(){
		return(
			<div>
				{(this.props.cards &&
					this.renderCards())}
				{(this.props.searchText != false && 
					<TextField
						hintText={this.props.searchText}
						fullWidth={true}
						onChange={(e) => this.search(e)}
						inputStyle={{color: "#555"}}
						className="search-field"
						style={{marginTop: "2rem"}}
					/>
				)}
				<Table
					fixedHeader={true}
					className="table"
					wrapperStyle={{width: "100%", float: "left"}}
				>
					<TableHeader
						adjustForCheckbox={false}
						displaySelectAll={false}
					>
						{this.renderTableHeaders(this.state.currentType)}
					</TableHeader>
					<TableBody
						displayRowCheckbox={false}
					>
						{this.renderData(this.state.currentType)}
					</TableBody>	
				</Table>
				<div className="pagination">
					<p className="previous disabled">&lt;&lt; Previous</p>
					<p className="pages">
						<a href="" className="active">1</a>
						<a href="">2</a>
						<a href="">3</a>
						<a href="">4</a>
						<a href="">5</a>
					</p>
					<p className="next">Next &gt;&gt;</p>
				</div>
			</div>	
		);
	}
}

export default Drilldown;