var initiateStatCharts = function(){
	var lineData = {
		'#active-users-chart': [500, 521, 489, 511, 539],
		'#mentors-chart' : [500, 489, 521, 468, 452],
		'#messages-chart' : [500, 469, 421, 468, 432],
		'#jobs-chart' : [500, 511, 489, 511, 529],
		'#companies-chart' : [500, 511, 489, 531, 589],
		'#events-chart' : [500, 511, 489, 511, 525]
	};

	var options = {
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

	var i = 0;
	$.each(lineData, function(id, data){
		if(i == 0){
			var chart = new Chartist.Line(id, {series: [data]}, options);
			createGradients(chart);
		}else
			new Chartist.Line(id, {series: [data]}, options);
		i++;	
	});
};

var initiateBarChart = function(){
	var data = {
		labels: ['Science', 'Math', 'Management', 'Business', 'History', 'Biology'],
		series: [
			[27, 36, 63, 143, 123, 43],
			[55, 43, 80, 48, 46, 29],
			[25, 45, 65, 85, 63, 80]
		]
	};

	var options = {
		seriesBarDistance: 10,
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

	var legend = $('.bar-legend');
	var chartLabels = ['Mentor', 'Company', 'Jobs'];
	$.each(chartLabels, function(i, val) {
	    var listItem = $('<li />')
	        .addClass('ct-series-' + i)
	        .html('<p>' + val + '</p>')
	        .appendTo(legend);
	});
};

var initiateLineChart = function(){
	var data = {
		labels: ['March', 'April', 'May', 'June', 'July'],
		series: [
			[27, 36, 63, 143, 123],
			[55, 43, 80, 48, 100]
		]
	};

	var options = {
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

	var legend = $('.line-legend');
	var chartLabels = ['Alumni', 'Student'];
	$.each(chartLabels, function(i, val) {
	    var listItem = $('<li />')
	        .addClass('ct-series-' + i)
	        .html('<p>' + val + '</p>')
	        .appendTo(legend);
	});
};

var initiatePieChart = function(){
	var data = {
		series: [13, 12, 41, 34]
	};

	var sum = function(a,b){return a+b};

	new Chartist.Pie('#pie-chart', data, {
		height: 300,
		labelInterpolationFnc: function(value) {
    		return Math.round(value / data.series.reduce(sum) * 100) + '%';
  		}
  	});
  	var chartLabels = ['Events', 'Interviewing', 'Resume Reviews', 'Job Shadow'];
	var legend = $('.pie-legend');
	$.each(chartLabels, function(i, val) {
	    var listItem = $('<li />')
	        .addClass('ct-series-' + i)
	        .html('<p>' + val + '</p>')
	        .appendTo(legend);
	});
};

var createGradients = function(chart){
	chart.on('created', function(ctx) {
	  var defs = ctx.svg.elem('defs');
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
	  var defs = ctx.svg.elem('defs');
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
};