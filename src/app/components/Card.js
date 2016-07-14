import React, {Component} from 'react';
import Chartist from 'chartist';
import {Link} from 'react-router';
import PositiveIcon from 'material-ui/svg-icons/navigation/arrow-drop-up';
import NegativeIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';

class Card extends Component{
	constructor(props, context){
		super(props, context);
	}

	componentDidMount(){
		this.initiateCharts();
	}

	initiateCharts(){
		const lineData = {
			'#active-users-chart': [500, 521, 489, 511, 539],
			'#mentors-chart' : [500, 489, 521, 468, 452],
			'#messages-chart' : [500, 469, 421, 468, 432],
			'#jobs-chart' : [500, 511, 489, 511, 529],
			'#companies-chart' : [500, 511, 489, 531, 589],
			'#events-chart' : [500, 511, 489, 511, 525]
		};

		const options = {
			showPoint: false,
			lineSmooth: true,
			axisX: {
				showGrid: false,
				showLabel: false,
				offset: 0
			},
			axisY: {
				showGrid: false,
				showLabel: false
			}
		};
		let count = 0;
		for(let id in lineData){
			if(document.getElementById(id.replace('#', '').length == 0))
				continue;
			if(count == 0){
				let chart = new Chartist.Line(document.getElementById(id.replace('#', '')), {series: [lineData[id]]}, options);
				this.createStatChartGradients(chart);
			}
			else
				new Chartist.Line(document.getElementById(id.replace('#', '')), {series: [lineData[id]]}, options);
			count++;
		}
	}

	createStatChartGradients(chart){
		chart.on('created', function(ctx) {
			let defs = ctx.svg.elem('defs');
			defs.elem('linearGradient', {
				id: 'gradientPositive',
				x1: 0,
				y1: 0,
				x2: 1,
				y2: 0
			}).elem('stop', {
				offset: 0,
				'stop-color': '#E3FFE3'
			}).parent().elem('stop', {
				offset: 1,
				'stop-color': '#178817'
			});
		});

		chart.on('created', function(ctx) {
			let defs = ctx.svg.elem('defs');
			defs.elem('linearGradient', {
				id: 'gradientNegative',
				x1: 0,
				y1: 0,
				x2: 1,
				y2: 0
			}).elem('stop', {
				offset: 0,
				'stop-color': '#FFE3E7'
			}).parent().elem('stop', {
				offset: 1,
				'stop-color': '#CC171B'
			});
		});
	}

	getChangeTriangle(){
		if(this.props.positive)
			return <PositiveIcon className="change-triangle positive" />
		else
			return <NegativeIcon className="change-triangle negative" />
	}

	getParent(el, selector){
		while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,selector)));
    	return el;
	}

	toggleSelected(e){
		let card = this.getParent(e.target, '.card');
		if(document.getElementsByClassName('selected').length > 0 && document.getElementsByClassName('selected')[0] != card){
			for(let i = 0; i < document.getElementsByClassName('card').length; i++){
				document.getElementsByClassName('card')[i].className = "card";
			}
			this.props.reset();
			return;
		}
		this.props.setType(this.props.filterText);
		this.props.filterTable(this.props.filterText);
		for(let i = 0; i < document.getElementsByClassName('card').length; i++){
			if(document.getElementsByClassName('card')[i] == card)
				continue;
			document.getElementsByClassName('card')[i].className = "card";
		}
		if(card.className.indexOf('selected') >= 0)
			card.className = "card";
		else
			card.className += " selected";
	}

	getCard(){
		if(this.props.path)
			return(
			<div className="card">
				<Link to={this.props.path}>
					<p className="text-category">
						{(this.props.icon) ? this.props.icon : undefined} {this.props.cardText}
					</p>
					<div className="chart-wrapper">
						<div id={this.props.chartId} className={"ct-chart ct-major-twelfth "+((this.props.positive) ? "positive" : "negative")}>
						</div>
					</div>
					<p className="text-total-count">{this.props.totalCount}</p>
					<p className="text-data-change">
						{this.getChangeTriangle()}
						<span className={(this.props.positive) ? "positive" : "negative"}>{this.props.changeCount} &bull; {this.props.changePercentage+"%"}</span><br />
						<span className="timeframe">Monthly Change</span>
					</p>
				</Link>
			</div>);
		else
			return(
				<div className="card" onClick={(e) => this.toggleSelected(e)}>
					<p className="text-category">
						{(this.props.icon) ? this.props.icon : undefined} {this.props.cardText}
					</p>
					<div className="chart-wrapper">
						<div id={this.props.chartId} className={"ct-chart ct-major-twelfth "+((this.props.positive) ? "positive" : "negative")}>
						</div>
					</div>
					<p className="text-total-count">{this.props.totalCount}</p>
					<p className="text-data-change">
						{this.getChangeTriangle()}
						<span className={(this.props.positive) ? "positive" : "negative"}>{this.props.changeCount} &bull; {this.props.changePercentage+"%"}</span><br />
						<span className="timeframe">Monthly Change</span>
					</p>
				</div>);
	}

	render(){
		return(
			this.getCard()
		);
	}
}

export default Card;