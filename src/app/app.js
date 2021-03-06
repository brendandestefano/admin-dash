import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import Users from './components/pages/Users';
import Events from './components/pages/Events';
import Jobs from './components/pages/Jobs';
import Companies from './components/pages/Companies';
import Requests from './components/pages/Requests';
import Mentors from './components/pages/Mentors';
import Messages from './components/pages/Messages';
import Reports from './components/pages/Reports';
import Email from './components/pages/Email';
import LandingPage from './components/pages/LandingPage';

injectTapEventPlugin();

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="users" component={Users} />
			<Route path="events" component={Events} />
			<Route path="jobs" component={Jobs} />
			<Route path="companies" component={Companies} />
			<Route path="requests" component={Requests} />
			<Route path="mentors" component={Mentors} />
			<Route path="messages" component={Messages} />
			<Route path="reports" component={Reports} />
			<Route path="email" component={Email} />
			<Route path="landing-page" component={LandingPage} />
		</Route>
	</Router>
, document.getElementById('app'));
