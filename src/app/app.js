import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import Users from './components/pages/Users';
import Events from './components/pages/Events';
import Jobs from './components/pages/Jobs';
import Companies from './components/pages/Companies';

injectTapEventPlugin();

render((
	<Router>
		<Route path="/" component={Main} />
		<Route path="users" component={Users} />
		<Route path="events" component={Events} />
		<Route path="jobs" component={Jobs} />
		<Route path="companies" component={Companies} />
	</Router>
), document.getElementById('app'));
