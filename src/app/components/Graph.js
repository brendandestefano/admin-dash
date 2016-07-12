import React, {Component} from 'react';
import Chartist from 'chartist';

class Graph extends Component{
	constructor(props,context){
		super(props, context);
	}

	componentDidMount(){
		const method = "initiate"+this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1) + "Graph";
		this[method]();
	}

	initiateLineGraph(){
		const data = {
			labels: ['March', 'April', 'May', 'June', 'July'],
			series: [
				[27, 36, 63, 143, 123],
				[55, 43, 80, 48, 100]
			]
		};

		const options = {
			showPoint: false,
			lineSmooth: true,
			height: 300,
			axisX: {
				showGrid: false,
				showLabel: true
			},
			axisY: {
				showGrid: true,
				showLabel: true
			}
		};

		new Chartist.Line('#line-chart', data, options);

		this.createLegend(document.getElementsByClassName('line-legend')[0], ['Alumni', 'Student']);
	}

	initiatePieGraph(){
		const data = {
			series: [13, 12, 41, 34]
		};

		let sum = function(a,b){return a+b};

		new Chartist.Pie('#pie-chart', data, {
			height: 300,
			labelInterpolationFnc: function(value) {
				return Math.round(value / data.series.reduce(sum) * 100) + '%';
			}
		});

		this.createLegend(document.getElementsByClassName('pie-legend')[0], ['Events', 'Interviewing', 'Resume Reviews', 'Job Shadow']);
	}

	initiateBarGraph(){
		const data = {
			labels: ['Science', 'Math', 'Management', 'Business', 'History', 'Biology'],
			series: [
				[27, 36, 63, 143, 123, 43],
				[55, 43, 80, 48, 46, 29],
				[25, 45, 65, 85, 63, 80]
			]
		};

		const options = {
			seriesBarDistance: window.innerWidth > 767 ? 20 : 8,
			axisX: {
				offset: 20,
				showGrid: false,
			},
			axisY: {
				offset: 30
			},
			height: 300
		};

		new Chartist.Bar('#bar-chart', data, options);

		this.createLegend(document.getElementsByClassName('bar-legend')[0], ['Mentor', 'Company', 'Jobs']);
	}

	createLegend($legend, labels){
		for(let id in labels){
			let listItem = document.createElement('li');
			let label = '<p>' + labels[id] + '</p>';
			listItem.innerHTML = label;
			listItem.className += 'ct-series-' + id;
			$legend.appendChild(listItem);
		}
	}

	render(){
		return(
			<div className="graph">
				<h6 className="text-chart-title">{this.props.title}</h6>
				<div id={this.props.type+"-chart"} className="ct-chart ct-square"></div>
				<div className={this.props.type+"-legend"}></div>
			</div>
		);
	}
}

export default Graph;