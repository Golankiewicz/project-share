import React from 'react';

import Home from './components/Home';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Form from './components/Form';
import Register from './components/Register';

import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<>
			<HashRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/aboutus' component={AboutUs} />
					<Route path='/form' component={Form} />
					<Route path='/register' component={Register} />
				</Switch>
			</HashRouter>
		</>
	);
}

export default App;
