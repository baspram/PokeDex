// Style Dependencies
import '../css/bootstrap.css';
import '../css/style.css';

// Main Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import store from './store/store';

// Pages
import MainLayout from './MainLayout';
import Home from './pages/Home';
import Single from './pages/Single';

ReactDOM.render(
	<Provider store={store}>
		<Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
			<Route path="/" component={MainLayout}>
				<IndexRoute component={Home}> </IndexRoute>
				<Route path="pokemon/:name" component={Single}> </Route>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);